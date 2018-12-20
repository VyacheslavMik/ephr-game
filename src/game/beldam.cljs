(ns game.beldam
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture [name]
  (str "textures/Sprites/Beldam/" name))

(defn new-beldam [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"run" (-> (anim/new-animation-strip (load-texture "Run.png")
                                                        48
                                                        "run")
                              (assoc :loop-animation? true
                                     :frame-delay 0.2)
                              (anim/update-animation-strip))
                    "die" (-> (anim/new-animation-strip (load-texture "Die.png")
                                                        48
                                                        "die")
                              (assoc :loop-animation? false)
                              (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* (inc cell-y) tile-map/tile-height) 120)}
               :fall-speed {:x 0 :y 20}
               :last-throw-time 0
               :facing-left true
               :dead? false
               :walk-speed 60
               :frame-width 48
               :frame-height 120
               :collision-rectangle {:x 1 :y 1 :width 48 :height 119}
               :enabled? true
               :code-based-blocks? true)
        (game-object/play-animation "run"))))

(defn update-velocity-and-flipped [beldam]
  (if (:dead? beldam)
    beldam
    (let [velocity (assoc (:velocity beldam) :x 0)
          world-location (:world-location beldam)
          direction (if (:facing-left beldam)
                      {:x -1 :y 0}
                      {:x 1 :y 0})
          flipped? (not (:facing-left beldam))
          direction (u/vector-mul direction (:walk-speed beldam))
          velocity (u/vector-add velocity direction)
          velocity (u/vector-add velocity (:fall-speed beldam))]
      (assoc beldam
             :velocity velocity
             :flipped? flipped?))))

(defn update-facing-and-enabled [beldam world-location]
  (if (:dead? beldam)
    (if (:finished-playing? ((:animations beldam) (:current-animation beldam)))
      (assoc beldam :enabled? false)
      beldam)
    (if (= world-location (:world-location beldam))
      (update beldam :facing-left not)
      beldam)))

(defn update* [beldam elapsed]
  (-> beldam
      (update-velocity-and-flipped)
      (game-object/update* elapsed)
      (update-facing-and-enabled (:world-location beldam))))

(ns game.enemy
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture [type name]
  (str "textures/Sprites/Monster" type "/" name))

(defn new-enemy [cell-x cell-y type]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (load-texture type "Idle.png")
                                                         48
                                                         "idle")
                               (assoc :loop-animation? true)
                               (anim/update-animation-strip))
                    "run" (-> (anim/new-animation-strip (load-texture type "Run.png")
                                                        48
                                                        "run")
                              (assoc :loop-animation? true
                                     :frame-delay 0.2)
                              (anim/update-animation-strip))
                    "die" (-> (anim/new-animation-strip (load-texture type "Die.png")
                                                        48
                                                        "die")
                              (assoc :loop-animation? false)
                              (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width) :y (* cell-y tile-map/tile-height)}
               :fall-speed {:x 0 :y 20}
               :facing-left true
               :dead? false
               :walk-speed 60
               :frame-width 48
               :frame-height 48
               :collision-rectangle {:x 9 :y 1 :width 30 :height 46}
               :enabled? true
               :code-based-blocks? true)
        (game-object/play-animation "run"))))

(defn update-velocity-and-flipped [enemy]
  (if (:dead? enemy)
    enemy
    (let [velocity (assoc (:velocity enemy) :x 0)
          world-location (:world-location enemy)
          direction (if (:facing-left enemy)
                      {:x -1 :y 0}
                      {:x 1 :y 0})
          flipped? (not (:facing-left enemy))
          direction (u/vector-mul direction (:walk-speed enemy))
          velocity (u/vector-add velocity direction)
          velocity (u/vector-add velocity (:fall-speed enemy))]
      (assoc enemy
             :velocity velocity
             :flipped? flipped?))))

(defn update-facing-and-enabled [enemy world-location]
  (if (:dead? enemy)
    (if (:finished-playing? ((:animations enemy) (:current-animation enemy)))
      (assoc enemy :enabled? false)
      enemy)
    (if (= world-location (:world-location enemy))
      (update enemy :facing-left not)
      enemy)))

(defn update* [enemy elapsed]
  (-> enemy
      (update-velocity-and-flipped)
      (game-object/update* elapsed)
      (update-facing-and-enabled (:world-location enemy))))

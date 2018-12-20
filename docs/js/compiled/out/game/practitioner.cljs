(ns game.practitioner
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture [name]
  (str "textures/" name))

(defn new-practitioner [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (load-texture "Idle.png")
                                                         48
                                                         "idle")
                               (assoc :loop-animation? true)
                               (anim/update-animation-strip))
                    "run" (-> (anim/new-animation-strip (load-texture "Run.png")
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

(defn update-velocity-and-flipped [practitioner]
  (if (:dead? practitioner)
    practitioner
    (let [velocity (assoc (:velocity practitioner) :x 0)
          world-location (:world-location practitioner)
          direction (if (:facing-left practitioner)
                      {:x -1 :y 0}
                      {:x 1 :y 0})
          flipped? (not (:facing-left practitioner))
          direction (u/vector-mul direction (:walk-speed practitioner))
          velocity (u/vector-add velocity direction)
          velocity (u/vector-add velocity (:fall-speed practitioner))]
      (assoc practitioner
             :velocity velocity
             :flipped? flipped?))))

(defn update-facing-and-enabled [practitioner world-location]
  (if (:dead? practitioner)
    (if (:finished-playing? ((:animations practitioner) (:current-animation practitioner)))
      (assoc practitioner :enabled? false)
      practitioner)
    (if (= world-location (:world-location practitioner))
      (update practitioner :facing-left not)
      practitioner)))

(defn update* [practitioner elapsed]
  (-> practitioner
      (update-velocity-and-flipped)
      (game-object/update* elapsed)
      (update-facing-and-enabled (:world-location practitioner))))

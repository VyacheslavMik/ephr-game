(ns game.nurse
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture [name]
  (str "textures/Sprites/Nurse/" name))

(defn new-nurse [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"run" (-> (anim/new-animation-strip (load-texture "Run.png")
                                                        134
                                                        "run"
                                                        {:x 8
                                                         :y 36
                                                         :width 68
                                                         :height 88})
                              (assoc :loop-animation? true
                                     :frame-delay 0.2)
                              (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* cell-y tile-map/tile-height) 40)}
               :facing-left true
               :flipped? false
               :dead? false
               :walk-speed 60
               :frame-width 134
               :frame-height 133
               :collision-rectangle {:x 0 :y 0 :width 68 :height 88}
               :code-based-blocks? false
               :enabled? true)
        (game-object/play-animation "run"))))

(defn intersects [nurse patient]
  (let [patient-collision-rectangle (game-object/collision-rectangle patient)
        nurse-collision-rectangle   (game-object/collision-rectangle nurse)]
    (u/rectangle-intersects? patient-collision-rectangle nurse-collision-rectangle)))

(defn update-velocity-and-flipped [nurse]
  (let [velocity (assoc (:velocity nurse) :x 0)
        world-location (:world-location nurse)
        direction (if (:facing-left nurse)
                    {:x -1 :y 0}
                    {:x 1 :y 0})
        flipped? (:facing-left nurse)
        direction (u/vector-mul direction (:walk-speed nurse))
        velocity (u/vector-add velocity direction)]
    (assoc nurse
           :velocity velocity
           :flipped? flipped?)))

(defn update-facing-and-enabled [nurse world-location]
  (if (= world-location (:world-location nurse))
    (update nurse :facing-left not)
    nurse))

(defn update* [nurse elapsed]
  (-> nurse
      (update-velocity-and-flipped)
      (game-object/update* elapsed)
      (update-facing-and-enabled (:world-location nurse))))

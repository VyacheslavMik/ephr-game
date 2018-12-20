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
                                                        144
                                                        "run")
                              (assoc :loop-animation? true
                                     :frame-delay 0.2)
                              (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* (inc cell-y) tile-map/tile-height) 120)}
               :facing-left true
               :dead? false
               :walk-speed 60
               :frame-width 144
               :frame-height 120
               :collision-rectangle        {:x 0 :y 0 :width 144 :height 119}
               :nurse-collision-rectangle  {:x 0 :y 0 :width 48 :height 119}
               :gurney-collision-rectangle {:x 0 :y 0 :width 144 :height 72}
               :code-based-blocks? false
               :enabled? true)
        (game-object/play-animation "run"))))

(defn nurse-collision-rectangle [nurse]
  (assoc nurse :collision-rectangle {:x (if (:facing-left nurse) 96 0) :y 0
                                     :width  (-> nurse :nurse-collision-rectangle :width)
                                     :height (-> nurse :nurse-collision-rectangle :height)}))

(defn gurney-collision-rectangle [nurse]
  (assoc nurse :collision-rectangle {:x 0 :y 47
                                     :width  (-> nurse :gurney-collision-rectangle :width)
                                     :height (-> nurse :gurney-collision-rectangle :height)}))

(defn intersects [nurse patient]
  (let [patient-collision-rectangle (game-object/collision-rectangle patient)
        nurse-collision-rectangle   (game-object/collision-rectangle (nurse-collision-rectangle nurse))
        gurney-collision-rectangle  (game-object/collision-rectangle (gurney-collision-rectangle nurse))]
    (or
     (u/rectangle-intersects? patient-collision-rectangle nurse-collision-rectangle)
     (u/rectangle-intersects? patient-collision-rectangle gurney-collision-rectangle))))

(defn update-velocity-and-flipped [nurse]
  (let [velocity (assoc (:velocity nurse) :x 0)
        world-location (:world-location nurse)
        direction (if (:facing-left nurse)
                    {:x -1 :y 0}
                    {:x 1 :y 0})
        flipped? (not (:facing-left nurse))
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

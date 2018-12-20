(ns game.spike
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture []
  "textures/Sprites/Spike.png")

(defn new-spike [cell-x cell-y facing-left?]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (load-texture) 48 "default")
                               (assoc :loop-animation? true)
                               (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width) :y (* cell-y tile-map/tile-height)}
               :facing-left facing-left?
               :speed 60
               :frame-width 48
               :frame-height 48
               :collision-rectangle {:x 9 :y 1 :width 30 :height 46}
               :enabled? true)
        (game-object/play-animation "default"))))

(defn normalize-velocity [spike]
  (if (> (u/vector-length (:velocity spike)) (:speed spike))
    (let [vel (-> (:velocity spike)
                  (u/vector-normalize)
                  (u/vector-mul (:speed spike)))]
      (assoc spike :velocity vel))
    spike))

(defn update-velocity [spike]
  (if (:enabled? spike)
    (let [velocity (normalize-velocity spike)]
      (assoc spike :velocity velocity))
    spike))

(defn update* [spike elapsed]
  (-> spike
      (normalize-velocity)
      (game-object/update* elapsed)))

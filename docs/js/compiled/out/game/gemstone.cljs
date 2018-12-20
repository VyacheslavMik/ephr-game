(ns game.gemstone
  (:require [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn texture-path []
  "textures/")

(defn new-gemstone [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (texture-path) 48 "idle")
                               (assoc :loop-animation? true
                                      :frame-delay 0.15)
                               (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (* cell-y tile-map/tile-height)}
               :frame-width  tile-map/tile-width
               :frame-height tile-map/tile-height
               :collision-rectangle {:x 9 :y 24 :width 30 :height 24}
               :draw-depth 6
               :enabled? true)
        (game-object/play-animation "idle"))))

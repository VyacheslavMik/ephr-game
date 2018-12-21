(ns game.doc
  (:require [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn texture-path []
  "textures/Doc.png")

(defn new-doc [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (texture-path) 20 "idle")
                               (assoc :loop-animation? false)
                               (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (+ (* cell-y tile-map/tile-height) 28)}
               :frame-width 20
               :frame-height 20
               :collision-rectangle {:x 0 :y 0 :width 20 :height 20}
               :enabled? true)
        (game-object/play-animation "idle"))))

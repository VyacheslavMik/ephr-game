(ns game.doc
  (:require [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn texture-path []
  "textures/Doc.png")

(defn new-doc [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (texture-path) 48 "idle")
                               (assoc :loop-animation? true
                                      :frame-delay 0.15)
                               (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* (inc cell-y) tile-map/tile-height) 4)}
               :frame-width 48
               :frame-height 4
               :collision-rectangle {:x 0 :y 0 :width 48 :height 48}
               :enabled? true)
        (game-object/play-animation "idle"))))

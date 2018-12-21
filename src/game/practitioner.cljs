(ns game.practitioner
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture [name]
  (str "textures/Sprites/Practitioner/" name))

(defn new-practitioner [cell-x cell-y]
  (let [ob (game-object/new-game-object)
        animations {"attack" (-> (anim/new-animation-strip (load-texture "Attack.png")
                                                           48
                                                           "attack")
                                 (assoc :loop-animation? true)
                                 (anim/update-animation-strip))
                    "surrender" (-> (anim/new-animation-strip (load-texture "Surrender.png")
                                                              48
                                                              "surrender")
                                    (assoc :loop-animation? true
                                           :frame-delay 0.2)
                                    (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* (inc cell-y) tile-map/tile-height) 120)}
               :facing-left true
               :frame-width 48
               :frame-height 120
               :collision-rectangle {:x 1 :y 1 :width 48 :height 119}
               :enabled? true
               :surrendered? false)
        (game-object/play-animation "attack"))))

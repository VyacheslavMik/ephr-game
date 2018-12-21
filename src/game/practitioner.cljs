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
                                                           129
                                                           "attack"
                                                           {:x 11
                                                            :y 27
                                                            :width 93
                                                            :height 96})
                                 (assoc :loop-animation? false
                                        :next-animation "idle")
                                 (anim/update-animation-strip))
                    "idle" (-> (anim/new-animation-strip (load-texture "Idle.png")
                                                         129
                                                         "idle"
                                                         {:x 11
                                                          :y 27
                                                          :width 93
                                                          :height 96})
                               (assoc :loop-animation? true
                                      :frame-delay 0.2)
                               (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x (* cell-x tile-map/tile-width)
                                :y (- (* cell-y tile-map/tile-height) 45)}
               :facing-left true
               :flipped? true
               :frame-width 129
               :frame-height 130
               :collision-rectangle {:x 1 :y 1 :width 48 :height 96}
               :enabled? true
               :surrendered? false)
        (game-object/play-animation "idle"))))

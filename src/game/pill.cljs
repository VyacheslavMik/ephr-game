(ns game.pill
  (:require [game.utils :as u]
            [game.tile-map :as tile-map]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]))

(defn load-texture []
  "textures/Pill.png")

(defn new-pill [world-location velocity]
  (let [ob (game-object/new-game-object)
        animations {"default" (-> (anim/new-animation-strip (load-texture) 48 "default")
                                  (assoc :loop-animation? true)
                                  (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location world-location
               :velocity (-> velocity
                             (u/vector-normalize)
                             (u/vector-mul 200))
               :facing-left (< (:x velocity) 0)
               :frame-width 48
               :frame-height 4
               :collision-rectangle {:x 0 :y 0 :width 48 :height 4}
               :short? true
               :code-based-blocks? false
               :enabled? true)
        (game-object/play-animation "default"))))

(defn exhausted? [pill world-location]
  (if (= world-location (:world-location pill))
    (assoc pill :enabled? false)
    pill))

(defn update* [pill elapsed]
  (-> pill
      (game-object/update* elapsed)
      (exhausted? (:world-location pill))))

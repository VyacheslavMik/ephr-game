(ns game.pixi
  (:require [clojure.set :as clj-set]))

(defonce loader (js/PIXI.loaders.Loader.))
(defonce loaded-resources (atom #{}))

(defn init
  ([]
   (init [] #()))
  ([resources onload]
   (let [loading-resources (remove @loaded-resources resources)
         pixi-dom (.querySelector js/document "#pixi")
         app (js/PIXI.Application. #js{:width 800
                                       :height 600
                                       :backgroundColor 0x000000})]
     (when-not (zero? (.. pixi-dom -children -length))
       (.remove (aget (.. pixi-dom -children) 0)))
     (if (zero? (count loading-resources))
       (.appendChild pixi-dom (.. app -view))
       (do
         (.. loader (add (to-array loading-resources)))
         (.. loader (load (fn [loader resources]
                            (.appendChild pixi-dom (.. app -view))
                            (onload))))))
     (swap! loaded-resources clj-set/union (set resources))
     (.. app -renderer -plugins -interaction destroy)
     app)))

(require '[cljs.build.api :as api]
         '[clojure.string :as string]
         '[figwheel-sidecar.repl-api :as figwheel]
         '[figwheel-sidecar.components.nrepl-server :as figwheel.nrepl])

(def source-dir "src")

(def compiler-config
  {:main          'game.core
   :asset-path    "js/compiled/out"
   :output-to     "resources/public/js/compiled/main.js"
   :source-map    "resources/public/js/compiled/main.js.map"
   :output-dir    "resources/public/js/compiled/out"
   :closure-warnings {:externs-validation :off}
   :externs ["resources/public/js/pixi.min.js"]
   :optimizations :simple
   ;; :optimizations :none
   ;; :optimize-constants true
   ;; :source-map    true
   })

(def dev-config
  (merge compiler-config
         {:optimizations :none
          :optimize-constants true
          :source-map    true}))

(def nrepl-options
  {:nrepl-port       7890
   :nrepl-middleware ["cider.nrepl/cider-middleware"
                      "cemerick.piggieback/wrap-cljs-repl"]})

(def ensure-nrepl-port! #(spit ".nrepl-port" (:nrepl-port nrepl-options)))

(def figwheel-options
  {:figwheel-options (merge nrepl-options
                            {:css-dirs ["resources/public/css"]
                             :server-port 3450})
   :all-builds       [{:id           "dev"
                       :figwheel     {:on-jsload "game.core/on-js-reload"}
                       :source-paths [source-dir "dev"]
                       :compiler     dev-config}]})

;;; Tasks --------------------------------------------------------------------------------

(defmulti task first)

(defmethod task :default [_]
  (task ["repl"]))

(defmethod task "compile" [_]
  (api/build source-dir compiler-config))

(defmethod task "repl" [_]
  (ensure-nrepl-port!)
  (figwheel.nrepl/start-nrepl-server nrepl-options nil)
  (println "Started nREPL server on port:" (:nrepl-port nrepl-options)))

(defmethod task "figwheel" [_]
  (ensure-nrepl-port!)
  (figwheel/start-figwheel! figwheel-options)
  (figwheel/cljs-repl))

(task *command-line-args*)

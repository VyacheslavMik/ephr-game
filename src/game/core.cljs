(ns game.core
  (:require[game.level-manager :as level-manager]
           [game.tile-map :as tile-map]
           [game.game-object :as game-object]
           [game.pixi :as pixi]
           [game.controls :as controls]
           [game.camera :as camera]
           [game.editor]))

(defonce context (atom {}))

(defonce background (let [sprite (js/PIXI.Sprite.
                                  (js/PIXI.Texture.fromImage
                                   "textures/TitleScreen.png"))]
                      (set! (.. sprite -width) 800)
                      (set! (.. sprite -height) 600)
                      sprite))
(defonce root (let [container (js/PIXI.Container.)]
                (set! (.. container -width) 800)
                (set! (.. container -height) 600)
                container))

(defonce docs-text (let [text (js/PIXI.Text. (str "Documents Remaining: " 0)
                                             #js{:fontFamily "Arial"
                                                 :fontSize 16
                                                 :fill "white"})]
                     (.. text -position (set 20 580))
                     (set! (.. text -visible) false)
                     text))

(defonce lives-text (let [text (js/PIXI.Text. (str "Lives Remaining " 0)
                                              #js{:fontFamily "Arial"
                                                  :fontSize 16
                                                  :fill "white"})]
                      (.. text -position (set 600 580))
                      (set! (.. text -visible) false)
                      text))

(defonce game-over-text (let [text (js/PIXI.Text. "G A M E  O V E R !"
                                                  #js{:fontFamily "Arial"
                                                      :fontSize 48
                                                      :fill "white"})]
                          (.. text -position (set 400 300))
                          (.. text -anchor (set 0.5))
                          (set! (.. text -visible) false)
                          text))

(defn start-new-game []
  (level-manager/init)
  (level-manager/load-level 0))

(defn update* [delta]
  (let [{:keys [state]} @context
        elapsed (* delta 0.001)]
    (case state
      :title-screen
      (do
        ;; tmp
        (swap! context update :tmp-time + elapsed)
        (when (> (:tmp-time @context) 0.5)
          (start-new-game)
          (swap! context assoc :state :playing)
          (set! (.. background -visible) false)
          (set! (.. camera/container -visible) true)
          (set! (.. docs-text -visible) true)
          (set! (.. lives-text -visible) true))

        #_(when (or (controls/key-pressed? :Space) (controls/get-touch-state))
          (start-new-game)
          (swap! context assoc :state :playing)
          (set! (.. background -visible) false)
          (set! (.. camera/container -visible) true)
          (set! (.. docs-text -visible) true)
          (set! (.. lives-text -visible) true)))

      :playing
      (do
        (level-manager/update* elapsed)
        (let [patient (:patient @level-manager/context)]
          (let [s (str "Documents Remaining: " (:docs-remaining patient))]
            (when-not (= s (.. docs-text -text))
              (set! (.. docs-text -text) s)))
          (let [s (str "Lives Remaining: " (:lives-remaining patient))]
            (when-not (= s (.. lives-text -text))
              (set! (.. lives-text -text) s)))
          (when (:dead? patient)
            (if (> (:lives-remaining patient) 0)
              (do
                (swap! context assoc :state :patient-dead)
                (swap! context assoc :death-timer 0))
              (do
                (set! (.. game-over-text -visible) true)
                (swap! context assoc :state :game-over)
                (swap! context assoc :death-timer 0))))))

      :patient-dead
      (do
        (level-manager/update* elapsed)
        (swap! context update :death-timer + elapsed)
        (when (> (:death-timer @context) 5)
          (swap! context assoc :state :playing)
          (level-manager/revive-patient)
          (level-manager/reload-level)))

      :game-over
      (do
        (swap! context update :death-timer + elapsed)
        (when (> (:death-timer @context) 5)
          (set! (.. game-over-text -visible) false)
          (set! (.. docs-text -visible) false)
          (set! (.. lives-text -visible) false)
          (set! (.. camera/container -visible) false)
          (set! (.. background -visible) true)
          (swap! context assoc :state :title-screen)))

      nil)))

(defn run [app update* root]
  (.. app -stage (addChild root))
  (controls/register-events (.. app -view))
  (.. app -ticker (add (fn [_]
                         (update* (.. app -ticker -elapsedMS))))))

(defn ^:export init []
  (swap! context assoc :state :title-screen)
  (swap! context assoc :death-timer 0)

  (camera/initialize {:view-port-width 800
                      :view-port-height 600
                      :world-rectangle {:x 0 :y 0
                                        :width (* tile-map/tile-width tile-map/map-width)
                                        :height (* tile-map/tile-height tile-map/map-height)}})
  (camera/set-position {:x 0 :y (- (* tile-map/tile-height tile-map/map-height) (camera/view-port-height))})
  (set! (.. camera/container -visible) false)
  (when-not (:initialized? @context)
    (.. root (addChild camera/container))
    (.. root (addChild background))
    (.. root (addChild docs-text))
    (.. root (addChild lives-text))
    (.. root (addChild game-over-text))
    (run (pixi/init
          ["textures/PlatformTiles.png"

           "textures/Spike.png"
           "textures/Pill.png"
           "textures/Doc.png"

           "textures/Sprites/Patient/Idle.png"
           "textures/Sprites/Patient/Die.png"
           "textures/Sprites/Patient/Jump.png"
           "textures/Sprites/Patient/Run.png"
           
           "textures/Sprites/Beldam/Idle.png"
           "textures/Sprites/Beldam/Die.png"
           "textures/Sprites/Beldam/Run.png"

           "textures/Sprites/Nurse/Run.png"

           "textures/Sprites/Practitioner/Attack.png"
           "textures/Sprites/Practitioner/Surrender.png"]
          #(do
             (tile-map/load-tiles "textures/PlatformTiles.png")
             (tile-map/initialize false))) update* root)
    (swap! context assoc :initialized? true)))

(ns game.patient
  (:require [clojure.string :as str]
            [game.controls :as controls]
            [game.utils :as u]
            [game.camera :as camera]
            [game.animation-strip :as anim]
            [game.game-object :as game-object]
            [game.world :as world]
            [game.tile-map :as tile-map]))

(defn texture-path [name]
  (str "textures/Sprites/Patient/" name))

(defn new-patient [load-level context]
  (let [ob (game-object/new-game-object)
        animations {"idle" (-> (anim/new-animation-strip (texture-path "Idle.png") 48 "idle")
                               (assoc :loop-animation? true)
                               (anim/update-animation-strip))
                    "run" (-> (anim/new-animation-strip (texture-path "Run.png") 48 "run")
                              (assoc :loop-animation? true)
                              (anim/update-animation-strip))
                    "jump" (-> (anim/new-animation-strip (texture-path "Jump.png") 48 "jump")
                               (assoc :loop-animation? false
                                      :frame-delay 0.02
                                      :next-animation "idle")
                               #_(assoc :loop-animation? false
                                      :frame-delay 0.2
                                      :next-animation "idle")
                               (anim/update-animation-strip))
                    "die" (-> (anim/new-animation-strip (texture-path "Die.png") 48 "die")
                              (assoc :loop-animation? false)
                              (anim/update-animation-strip))}]
    (-> ob
        (assoc :animations animations
               :world-location {:x -500 :y -500}
               :fall-speed {:x 0 :y 20}
               :move-scale 180
               :teleport-delay 0
               :dead? false
               :score 0
               :lives-remaining 3
               :frame-width 48
               :frame-height 120
               :collision-rectangle {:x 1 :y 1 :width 48 :height 119}
               :enabled? true
               :load-level load-level
               :context context
               :code-based-blocks? false))))

(defn play-animation [patient animation]
  (if (= (:current-animation patient) animation)
    patient
    (game-object/play-animation patient animation)))

(defn check-level-transition [patient]
  (if (controls/key-pressed? :KeyW)
    (let [center-cell (tile-map/get-cell-by-pixel (game-object/world-center patient))
          code (tile-map/cell-code-value center-cell)]
      (if (and code (str/starts-with? code "T_"))
        (let [code (str/split code #"_")]
          (if (= (count code) 4)
            (let [loc {:x (js/parseInt (* (nth code 2) tile-map/tile-width))
                       :y (js/parseInt (* (nth code 3) tile-map/tile-height))}]
              ((:load-level patient) (js/parseInt (nth code 1)))
              (swap! (:context patient) assoc :respawn-location loc)
              (assoc patient
                     :world-location loc
                     :velocity {:x 0 :y 0}))
            patient))
        patient))
    patient))

(defn world-bottom [patient]
  {:x (+ (-> patient :world-location :x) (/ (:frame-width patient) 2))
   :y (+ (-> patient :world-location :y) (:frame-height patient) -24)})

(defn check-teleport [patient]
  (if (> (:teleport-delay patient) 0.3)
    (if (controls/key-pressed? :KeyW)
      (let [bottom-cell (tile-map/get-cell-by-pixel (world-bottom patient))
            code (tile-map/cell-code-value bottom-cell)]
        (println (:teleport-delay patient))
        (if (and code (str/starts-with? code "P"))
          (let [other-end (first
                           (filter
                            #(not= bottom-cell %)
                            (get (:teleports @(:context patient)) code)))]
            (if other-end
              (assoc patient
                     :world-location {:x (* (:x other-end) tile-map/tile-width)
                                      :y (- (* (inc (:y other-end)) tile-map/tile-height)
                                            (:frame-height patient))}
                     :teleport-delay 0)
              (assoc patient :teleport-delay 0)))
          patient))
      patient)
    patient))

(defn touch-right [patient]
  (when-let [touch (controls/get-touch-state)]
    (> 0 (- (:x (camera/world-to-screen-v (:world-location patient)))
            (:x (first touch))))))

(defn touch-left [patient]
  (when-let [touch (controls/get-touch-state)]
    (< 0 (- (:x (camera/world-to-screen-v (:world-location patient)))
            (:x (first touch))))))

(defn touch-top [patient]
  (when-let [touch (controls/get-touch-state)]
    (< 0 (- (:y (camera/world-to-screen-v (:world-location patient)))
            (:y (first touch))))))

(defn not-dead-update [patient elapsed]
  (if (:dead? patient)
    patient
    (let [new-animation (cond
                          (or
                           (controls/key-pressed? :KeyA)
                           (touch-left patient))
                          "run"

                          (or
                           (controls/key-pressed? :KeyD)
                           (touch-right patient))
                          "run"
                          
                          :else
                          "idle")
          velocity (cond
                     (or
                      (controls/key-pressed? :KeyA)
                      (touch-left patient))
                     {:x (- (:move-scale patient)) :y (-> patient :velocity :y)}

                     (or (controls/key-pressed? :KeyD)
                         (touch-right patient))
                     {:x (:move-scale patient) :y (-> patient :velocity :y)}

                     :else
                     {:x 0 :y (-> patient :velocity :y)})

          flipped? (cond
                     (or
                      (controls/key-pressed? :KeyA)
                      (touch-left patient))
                     false

                     (or
                      (controls/key-pressed? :KeyD)
                      (touch-right patient))
                     true

                     :else
                     (:flipped? patient))
          velocity (if (and (or (controls/key-pressed? :Space)
                                (touch-top patient))
                            (:on-ground? patient))
                     (update velocity :y - 700)
                     velocity)
          new-animation (if (and (or (controls/key-pressed? :Space)
                                     (touch-top patient))
                                 (:on-ground? patient))
                          "jump"
                          new-animation)
          new-animation (if (= (:current-animation patient) "jump") "jump" new-animation)]
      (-> patient
          (assoc :flipped? flipped?
                 :velocity velocity)
          (check-level-transition)
          (check-teleport)
          (play-animation new-animation)))))

(defn jump [patient]
  (update-in patient [:velocity :y] - 500))

(defn reposition-camera [patient]
  (let [v (camera/world-to-screen-v (:world-location patient))
        x (:x v)
        y (:y v)
        x (cond
            (> x 500) (- x 500)
            (< x 200) (- x 200)
            :else     0)
        y (cond
            (> y 200) (- y 200)
            (< y 200) (- y 200)
            :else     0)]
    (when (or (not= x 0) (not= y 0))
      (camera/move {:x x :y y}))
    patient))

(defn kill [patient]
  (if (:dead? patient)
    patient
    (-> patient
        (play-animation "die")
        (update :lives-remaining dec)
        (assoc-in [:velocity :x] 0)
        (assoc :dead? true))))

(defn update* [patient elapsed]
  (-> patient
      (update :teleport-delay + elapsed)
      (not-dead-update elapsed)
      (update :velocity u/vector-add (:fall-speed patient))
      (reposition-camera)
      (game-object/update* elapsed)))

(defn revive [patient]
  (-> patient
      (game-object/play-animation "idle")
      (assoc :dead? false
             :world-location {:x -500 :y -500})))

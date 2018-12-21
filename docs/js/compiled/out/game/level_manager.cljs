(ns game.level-manager
  (:require [goog.string :as gstring]
            [goog.string.format]
            [game.utils :as u]
            [game.patient :as patient]
            [game.doc :as doc]
            [game.practitioner :as practitioner]
            [game.game-object :as game-object]
            [game.beldam :as beldam]
            [game.spike :as spike]
            [game.pill :as pill]
            [game.nurse :as nurse]
            [game.world :as world]
            [game.animation-strip :as anim]
            [game.tile-map :as tile-map]
            [clojure.string :as str]))

(def context (atom {}))

(defn remove-object [game-object]
  (doseq [[_ animation] (:animations game-object)]
    (anim/stop animation)))

(defn load-level [level-number]
  (swap! context assoc :loading? true)
  (-> (js/fetch (gstring/format "maps/MAP%03d" level-number))
      (.then (fn [response]
               (.text response)))
      (.then (fn [s]
               (swap! context assoc :loading? false)
               (world/clear)
               (tile-map/load-map s)
               (swap! context assoc :docs [])
               (swap! context assoc :practitioners [])
               (swap! context assoc :beldams [])
               (swap! context assoc :spikes [])
               (swap! context assoc :pills [])
               (swap! context assoc :nurses [])
               (swap! context assoc :telepors {})
               (dotimes [x tile-map/map-width]
                 (dotimes [y tile-map/map-height]
                   (let [code (tile-map/cell-code-value x y)]
                     (when (= code "START")
                       (swap! context update :patient
                              (fn [patient]
                                (-> patient
                                    (assoc :world-location {:x (* x tile-map/tile-width)
                                                            :y (- (* y tile-map/tile-height) 51)})
                                    (patient/play-animation "idle")))))
                     (when (and code (str/starts-with? code "P"))
                       (swap! context update-in [:teleports code] conj {:x x :y y}))
                     (when (= code "BELDAM")
                       (swap! context update :beldams conj (beldam/new-beldam x y)))
                     (when (= code "NURSE")
                       (swap! context update :nurses conj (nurse/new-nurse x y)))
                     (when (= code "DOC")
                       (swap! context update :docs conj (doc/new-doc x y)))
                     (when (= code "PRACT")
                       (swap! context update :practitioners conj (practitioner/new-practitioner x y))))))
               (swap! context assoc :current-level level-number)
               (swap! context assoc :respawn-location (-> @context :patient :world-location))))))

(defn init []
  (swap! context assoc :patient (patient/new-patient load-level context)))

(defn update-docs [patient docs elapsed]
  (let [docs (mapv (fn [doc] (game-object/update* doc elapsed)) docs)
        c (count docs)
        docs (filterv (fn [doc]
                        (let [alive? (not
                                      (u/rectangle-intersects?
                                       (game-object/collision-rectangle patient)
                                       (game-object/collision-rectangle doc)))]
                          (when-not alive?
                            (remove-object doc))
                          alive?))
                      docs)
        docs-found (- c (count docs))]
    {:docs docs
     :patient (update patient :docs-remaining - docs-found)}))

(defn throw-pill [practitioner patient]
  (when (> (:last-throw-time practitioner) 2)
    (pill/new-pill (update (:world-location practitioner)
                           :y + (rand-int (- (:frame-height practitioner) 40)))
                   {:x -1 :y 0})))

(defn practitioner-attack [practitioner]
  (if (and (> (:last-throw-time practitioner) 1.5)
           (< (:last-throw-time practitioner) 1.7)
           (not (:surrendered? practitioner)))
    (game-object/play-animation practitioner "attack")
    practitioner))

(defn check-current-cell-code [patient]
  patient
  #_(if (:dead? patient)
    patient
    (let [code (tile-map/cell-code-value (tile-map/get-cell-by-pixel
                                          (-> (:world-location patient)
                                              (update :y + 20)
                                              (update :x + 20))))]
      
      (if (= code "DEAD")
        (patient/kill patient)
        patient))))

(defn update-practitioners [patient practitioners elapsed]
  (let [practitioners (mapv (fn [practitioner]
                              (game-object/update* practitioner elapsed))
                            practitioners)]
    (reduce (fn [acc practitioner]
              (let [practitioner (update practitioner :last-throw-time + elapsed)
                    practitioner (practitioner-attack practitioner)
                    pill (throw-pill practitioner patient)
                    practitioner (if pill (assoc practitioner :last-throw-time 0) practitioner)]
                (if (:surrendered? practitioner)
                  (update acc :practitioners conj practitioner)
                  (if (u/rectangle-intersects?
                       (game-object/collision-rectangle patient)
                       (game-object/collision-rectangle practitioner))
                    (if (< (:y (game-object/world-center (:patient acc)))
                           (-> practitioner :world-location :y))
                      (let [patient (update (:patient acc) :docs-remaining dec)
                            practitioner (-> practitioner
                                             (game-object/play-animation "idle")
                                             (assoc :surrendered? true))]
                        (-> acc
                            (assoc :patient patient)
                            (update :practitioners conj practitioner)))
                      (-> acc
                          (assoc :patient (patient/kill patient))
                          (update :practitioners conj practitioner)))
                    (cond-> acc
                      true (update :practitioners conj practitioner)
                      pill (update :new-pills conj pill))))))
            {:patient patient :practitioners [] :new-pills []} practitioners)))

(defn update-spikes [patient spikes elapsed]
  (let [spikes (mapv (fn [spike]
                       (spike/update* spike elapsed))
                     spikes)]
    (reduce (fn [acc spike]
              (if (:enabled? spike)
                (if (and
                     (not (:dead? patient))
                     (u/rectangle-intersects? (game-object/collision-rectangle spike)
                                              (game-object/collision-rectangle patient)))
                  (do
                    (remove-object spike)
                    (assoc acc :patient (patient/kill patient)))
                  (update acc :spikes conj spike))
                (do
                  (remove-object spike)
                  acc)))
            {:patient patient :spikes []} spikes)))

(defn throw-spike [beldam patient]
  (when (> (:last-throw-time beldam) 2)
    (let [distance (- (-> patient :world-location :x) (-> beldam :world-location :x))]
      (when (< (Math/abs distance) 200)
        (spike/new-spike (update (:world-location beldam)
                                 :y + (rand-int (:frame-height beldam)))
                         {:x (if (< distance 0) -1 1) :y 0})))))

(defn update-beldams [patient beldams elapsed]
  (let [beldams (mapv (fn [beldam]
                        (beldam/update* beldam elapsed))
                      beldams)]
    (reduce (fn [acc beldam]
              (let [beldam (update beldam :last-throw-time + elapsed)
                    spike (throw-spike beldam patient)
                    beldam (if spike (assoc beldam :last-throw-time 0) beldam)]
                (if (:dead? beldam)
                  (if (:enabled? beldam)
                    (update acc :beldams conj beldam)
                    (do
                      (remove-object beldam)
                      acc))
                  (if (u/rectangle-intersects?
                       (game-object/collision-rectangle patient)
                       (game-object/collision-rectangle beldam))
                    (if (< (:y (game-object/world-center (:patient acc)))
                           (-> beldam :world-location :y))
                      (let [patient (-> (:patient acc)
                                        (patient/jump)
                                        (update :score + 5))
                            beldam (-> beldam
                                       (game-object/play-animation "die")
                                       (assoc :dead? true
                                              :velocity {:x 0 :y 0}))]
                        (-> acc
                            (assoc :patient patient)
                            (update :beldams conj beldam)))
                      (-> acc
                          (assoc :patient (patient/kill patient))
                          (update :beldams conj beldam)))
                    (cond-> acc
                      true (update :beldams conj beldam)
                      spike (update :new-spikes conj spike))))))
            {:patient patient :beldams [] :new-spikes []} beldams)))

(defn update-nurses [patient nurses elapsed]
  (let [nurses (mapv (fn [nurse]
                       (nurse/update* nurse elapsed))
                     nurses)]
    (reduce (fn [acc nurse]
              (if (nurse/intersects nurse patient)
                (-> acc
                    (assoc :patient (patient/kill patient))
                    (update :nurses conj nurse))
                (update acc :nurses conj nurse)))
            {:patient patient :nurses []} nurses)))

(defn update-pills [patient pills elapsed]
  (let [pills (mapv (fn [pill]
                      (pill/update* pill elapsed))
                    pills)]
    (reduce (fn [acc pill]
              (if (:enabled? pill)
                (if (and
                     (not (:dead? patient))
                     (u/rectangle-intersects? (game-object/collision-rectangle pill)
                                              (game-object/collision-rectangle patient)))
                  (do
                    (remove-object pill)
                    (assoc acc :patient (patient/kill patient)))
                  (update acc :pills conj pill))
                (do
                  (remove-object pill)
                  acc)))
            {:patient patient :pills []} pills)))

(defn update* [elapsed]
  (when-not (:loading? @context)
    (let [{:keys [patient docs practitioners beldams nurses spikes pills]} @context
          patient (-> (patient/update* patient elapsed)
                      (check-current-cell-code))
          {:keys [patient docs]}                    (update-docs          patient docs elapsed)
          {:keys [patient practitioners new-pills]} (update-practitioners patient practitioners elapsed)
          {:keys [patient spikes]}                  (update-spikes        patient spikes elapsed)
          {:keys [patient beldams new-spikes]}      (update-beldams       patient beldams elapsed)
          {:keys [patient nurses]}                  (update-nurses        patient nurses elapsed)
          {:keys [patient pills]}                   (update-pills         patient pills elapsed)]
      (swap! context assoc :patient patient)
      (swap! context assoc :docs    docs)
      (swap! context assoc :beldams beldams)
      (swap! context assoc :nurses  nurses)
      (swap! context assoc :practitioners practitioners)
      (swap! context assoc :spikes  (into spikes new-spikes))
      (swap! context assoc :pills   (into pills  new-pills)))))

(defn reload-level []
  (let [save-respawn (:respawn-location @context)]
    (load-level (:current-level @context))
    (swap! context assoc :respawn-location save-respawn)
    (swap! context update-in [:patient :world-location] save-respawn)
    (swap! context assoc-in [:patient :docs-remaining] 7)))

(defn revive-patient []
  (swap! context update :patient patient/revive))

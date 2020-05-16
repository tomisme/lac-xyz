#!/bin/bb

;; requires imagemagick
;; usage `./resize.clj pics 777600`
;; takes a folder, resizes all pictures to a pixel area count (@ flag)

(require '[clojure.java.shell :refer [sh]]
         '[clojure.string]
         '[clojure.java.io])

(defn resize-img! [path total-pixels]
  (let [[name type] (clojure.string/split path #"\.")
        resize-to (str total-pixels "@")
        new-path (str name "-" total-pixels "." type)]
    (:out (sh "convert" path "-resize" resize-to new-path))))

(println
 (let [[folder-path total-pixels] *command-line-args*]
  (for [path (->> folder-path
                  (clojure.java.io/file)
                  (file-seq)
                  (map str)
                  ; don't include the folder itself
                  rest)]
    (let [_ (resize-img! path total-pixels)]
      {:path path}))))

(shutdown-agents)

(println "Done!")

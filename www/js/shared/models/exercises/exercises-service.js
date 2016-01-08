"use strict";

var bugjModels = angular.module('bugj.models', [])
  .service('exercises', ['Backand', '$http', function(Backand, $http) {

    var self = this;
    var modelName = '/1/query/data/exercises';

    /**
     * Array containing exercise models
     * @type {*[]}
     */
    var exercises = null;

    /**
     * Exercise model
     * @type {null,ExerciseModel}
     */
    var activeExercise = null;

    /**
     * @returns {boolean}
     */
    this.hasExercises = function() {
      return !Helpers.empty(exercises);
    };

    /**
     * @returns {*[]} Array containing exercise models
     */
    this.getExercises = function() {
      return exercises;
    };

    /**
     * @returns {boolean}
     */
    this.hasActiveExercise = function() {
      return (activeExercise != null);
    };

    /**
     *
     * @param exercise
     * @returns {boolean}
     */
    this.isActiveExercise = function(exercise) {
      return (activeExercise == exercise);
    };

    /**
     *
     * @returns {*}
     */
    this.getActiveExerciseIndex = function() {
      var exerciseList = this.getExercises();
      var activeExerciseIndex = null;

      for (var i = 0; i < exerciseList.length; i++) {
        if (this.isActiveExercise(exerciseList[i])) {
          return i;
        }
      }

      return null;
    };

    /**
     * @param exercise Exercise model
     */
    this.setActiveExercise = function(exercise) {
      activeExercise = exercise;
    };

    this.setNextExerciseActive = function() {
      var exerciseList = this.getExercises();

      if (!this.hasActiveExercise() && this.hasExercises()) {
        this.setActiveExercise(exerciseList[0]);
      } else if (this.hasExercises()) {
        var activeExerciseIndex = this.getActiveExerciseIndex();

        if (!Helpers.empty(exerciseList[activeExerciseIndex + 1])) {
          activeExercise = exerciseList[activeExerciseIndex + 1];
        } else {
          activeExercise = exerciseList[0];
        }
      }
    };

    /**
     * @returns {Object} Exercise model
     */
    this.getActiveExercise = function() {
      return activeExercise;
    };

    this.loadExercises = function() {
      $http({
        method: 'GET',
        url: Backand.getApiUrl() + modelName,
        relatedObjects: true
      }).then(function(response) {
        exercises = response.data;

        if (!self.hasActiveExercise() && self.hasExercises()) {
          self.setNextExerciseActive();
        }
      });
    };

    this.updateSingleExerciseCache = function(id, data) {
      var exerciseList = this.getExercises();

      for (var i = 0; i < exerciseList.length; i++) {
        if (exerciseList[i].id == id) {
          exerciseList[i].weight = data.weight;
          exerciseList[i].repetitions = data.repetitions;
          exerciseList[i].sets = data.sets;
          return true;
        }
      }
      return false;
    };

  }]);

"use strict";

var bugjModels = angular.module('bugj.models', [])
  .service('exercises', ['Backand', '$http', function (Backand, $http) {

    var modelName = '/1/objects/exercises';

    /**
     * Array containing exercise models
     * @type {*[]}
     */
    var exercises = [
      {name: "Bench press - Barbell", image: "img/bench-press-barbell.gif"},
      {name: "Seated leg curl", image: "img/seated-leg-curl.gif", weight: 60, reps: 10, sets: 3},
      {name: "Crunches", image: "img/bench-press-barbell.gif", weight: 35, reps: 4, sets: 4},
      {name: "Biceps curl standing, alternated", image: "img/bench-press-barbell.gif"},
      {name: "Triceps extension seated", image: "img/bench-press-barbell.gif"}
    ];

    /**
     * Exercise model
     * @type {null,ExerciseModel}
     */
    var activeExercise = null;


    /**
     * @returns {*[]} Array containing exercise models
     */
    this.getExercises = function () {
      return exercises;
    };

    /**
     * @returns {boolean}
     */
    this.hasActiveExercise = function () {
      return (activeExercise != null);
    };

    /**
     * @param exercise Exercise model
     */
    this.setActiveExercise = function (exercise) {
      activeExercise = exercise;
    };

    /**
     * @returns {Object} Exercise model
     */
    this.getActiveExercise = function () {
      return activeExercise;
    };

    this.loadExercises = function () {
      $http({
        method: 'GET',
        url: Backand.getApiUrl() + modelName
      }).then(function(response) {
        exercises = response.data.data;
      });
    };

  }]);

"use strict";

var bugjCore = angular.module('bugj.core', ['ionic'])

  .controller('BaseController', ['$scope', 'exercises', function ($scope, exercises) {

    function __construct() {
      exercises.loadExercises();

      if (!exercises.hasActiveExercise()) {
        exercises.setActiveExercise(exercises.getExercises()[0])
      }
    }

    __construct();
  }]);

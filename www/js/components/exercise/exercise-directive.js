"use strict";

var bugjExerciseList = angular.module('bugj.exercise', ['ionic', 'ionic-material'])

  .directive('bugjExercise', [function () {

    return {
      restrict: 'E',
      templateUrl: 'js/components/exercise/exercise.html',
      controller: 'ExerciseController'
    };
  }]);

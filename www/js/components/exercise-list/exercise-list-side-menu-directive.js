"use strict";

var bugjExerciseList = angular.module('bugj.exercise-list', ['ionic', 'ionic-material'])

  .directive('bugjExerciseListSideMenu', [function () {

    return {
      restrict: 'E',
      templateUrl: 'js/components/exercise-list/exercise-list.html',
      controller: 'ExerciseListController'
    };
  }]);

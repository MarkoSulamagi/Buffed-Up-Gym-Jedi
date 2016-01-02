"use strict";

bugjExerciseList.controller('ExerciseListController', ['$scope', 'ionicMaterialInk', 'exercises', function ($scope, ionicMaterialInk, exercises) {

  function __construct() {
    ionicMaterialInk.displayEffect();
  }

  $scope.getExercises = exercises.getExercises;
  $scope.getActiveExercise = exercises.getActiveExercise;

  $scope.selectExercise = function(exercise) {
    exercises.setActiveExercise(exercise);
  };

  $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    ionicMaterialInk.displayEffect();
  });

  __construct();

}]);

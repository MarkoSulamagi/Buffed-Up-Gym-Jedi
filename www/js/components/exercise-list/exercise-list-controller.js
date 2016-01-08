"use strict";

bugjExerciseList.controller('ExerciseListController', ['$scope', 'ionicMaterialInk', 'exercises', 'loading', function ($scope, ionicMaterialInk, exercises, loading) {

  function __construct() {
    ionicMaterialInk.displayEffect();
  }

  $scope.getExercises = exercises.getExercises;
  $scope.getActiveExercise = exercises.getActiveExercise;

  $scope.selectExercise = function(exercise) {
    if (!exercises.isActiveExercise(exercise)) {
      loading.start(500);
      exercises.setActiveExercise(exercise);
    }
  };

  $scope.newExercise = function(exercise) {
    return (Helpers.empty(exercise.weight));
  };

  $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    ionicMaterialInk.displayEffect();
  });

  __construct();

}]);

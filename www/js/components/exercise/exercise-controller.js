"use strict";

bugjExerciseList.controller('ExerciseController', ['$scope', 'ionicMaterialInk', 'ionicMaterialMotion', '$timeout',
  function ($scope, ionicMaterialInk, ionicMaterialMotion, $timeout) {

    $scope.workout = {
      sets: 3,
      weightRange: 30,
      weight: 30,
      repRange: 10,
      reps: 10
    };

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.weightInputChanged = function() {
      $scope.workout.weightRange = $scope.workout.weight;
    };
    $scope.weightRangeChanged = function() {
      $scope.workout.weight = $scope.workout.weightRange;
    };

    $scope.repInputChanged = function() {
      $scope.workout.repRange = $scope.workout.reps;
    };
    $scope.repRangeChanged = function() {
      $scope.workout.reps = $scope.workout.repRange;
    };

    $scope.increaseWeight = function() {
      $scope.workout.weight = parseFloat($scope.workout.weight) + 2.5;
      $scope.workout.weightRange = parseFloat($scope.workout.weightRange) + 2.5;
    };
    $scope.decreaseWeight = function() {
      $scope.workout.weight = parseFloat($scope.workout.weight) - 2.5;
      $scope.workout.weightRange = parseFloat($scope.workout.weightRange) - 2.5;
    };
    $scope.increaseReps = function() {
      $scope.workout.reps = parseInt($scope.workout.reps) + 1;
      $scope.workout.repRange = parseInt($scope.workout.repRange) + 1;
    };
    $scope.decreaseReps = function() {
      $scope.workout.reps = parseInt($scope.workout.reps) - 1;
      $scope.workout.repRange = parseInt($scope.workout.repRange) - 1;
    };

    $scope.toggleSets = function(number) {
      if ($scope.workout.sets == number) {
        $scope.workout.sets = null;
      } else {
        $scope.workout.sets = number;
      }
    };

    $scope.isActiveSet = function(number) {
      return ($scope.workout.sets == number);
    };

    // Set Motion
    $timeout(function () {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function () {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();

  }]);


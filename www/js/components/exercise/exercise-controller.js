"use strict";

bugjExerciseList.controller('ExerciseController', ['$scope', 'ionicMaterialInk', 'ionicMaterialMotion', 'loading', '$timeout', 'exercises', 'exerciseEntries',
  function ($scope, ionicMaterialInk, ionicMaterialMotion, loading, $timeout, exercises, exerciseEntries) {

    $scope.defaultWorkoutParams = {
      sets: 3,
      weightRange: 30,
      weight: 30,
      repRange: 10,
      reps: 10
    };

    $scope.workout = {
      sets: 3,
      weightRange: 30,
      weight: 30,
      repRange: 10,
      reps: 10
    };

    function __construct() {
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
    }

    $scope.getActiveExercise = exercises.getActiveExercise;
    $scope.hasActiveExercise = exercises.hasActiveExercise;

    $scope.weightInputChanged = function() {
      $scope.workout.weightRange = $scope.workout.weight;
    };
    $scope.weightRangeChanged = function() {
      $scope.workout.weight = $scope.workout.weightRange;
    };
    $scope.increaseWeight = function() {
      $scope.workout.weight = parseFloat($scope.workout.weight) + 2.5;
      $scope.workout.weightRange = parseFloat($scope.workout.weightRange) + 2.5;
    };
    $scope.decreaseWeight = function() {
      $scope.workout.weight = parseFloat($scope.workout.weight) - 2.5;
      $scope.workout.weightRange = parseFloat($scope.workout.weightRange) - 2.5;
    };

    $scope.repInputChanged = function() {
      $scope.workout.repRange = $scope.workout.reps;
    };
    $scope.repRangeChanged = function() {
      $scope.workout.reps = $scope.workout.repRange;
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

    $scope.save = function() {
      loading.start();
      exerciseEntries.save($scope.getActiveExercise(), $scope.workout.weight, $scope.workout.reps, $scope.workout.sets);
      $scope.nextExercise();
    };

    $scope.nextExercise = function() {
      exercises.setNextExerciseActive();
    };

    $scope.$watch('getActiveExercise()', function() {
      var activeExercise = $scope.getActiveExercise();

      $scope.workout = angular.copy($scope.defaultWorkoutParams);

      if (!Helpers.empty(activeExercise)) {
        if (Helpers.notEmpty(activeExercise.weight)) {
          $scope.workout.weight = activeExercise.weight;
          $scope.workout.weightRange = activeExercise.weight;
          $scope.workout.reps = activeExercise.repetitions;
          $scope.workout.repRange = activeExercise.repetitions;
          $scope.workout.sets = activeExercise.sets;
        } else {
          $scope.workout = $scope.defaultWorkoutParams;
        }
        loading.stop();
      }
    });

    __construct();

  }]);


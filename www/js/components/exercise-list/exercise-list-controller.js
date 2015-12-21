"use strict";

bugjExerciseList.controller('ExerciseListController', ['$scope', 'ionicMaterialInk', function($scope, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.exercises = [
      { name: "Bench press - Barbell", image: "img/bench-press-barbell.gif" },
      { name: "Seated leg curl", image: "img/bench-press-barbell.gif" },
      { name: "Crunches", image: "img/bench-press-barbell.gif" },
      { name: "Biceps curl standing, alternated", image: "img/bench-press-barbell.gif" },
      { name: "Triceps extension seated", image: "img/bench-press-barbell.gif" }
    ];

    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      ionicMaterialInk.displayEffect();
    });

}]);

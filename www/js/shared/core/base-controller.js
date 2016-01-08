"use strict";

var bugjCore = angular.module('bugj.core', ['ionic'])

  .controller('BaseController', ['$scope', 'exercises', function ($scope, exercises) {

    function __construct() {
      exercises.loadExercises();
    }

    __construct();
  }]);

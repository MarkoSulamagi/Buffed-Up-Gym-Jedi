"use strict";

var bugjMenu = angular.module('bugj.menu', [])

  .directive('bugjMenu', [function () {

    return {
      restrict: 'E',
      templateUrl: 'js/components/menu/menu.html',
      controller: 'MenuController'
    };
  }]);


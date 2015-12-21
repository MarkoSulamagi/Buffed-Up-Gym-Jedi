"use strict";

var bugjHelpers = angular.module('bugj.helpers', [])

  .directive('bugjRepeatFinishedEvent', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    };
  }]);

"use strict";

bugjCore.service('loading', ['$ionicLoading', '$timeout', function ($ionicLoading, $timeout) {

  var self = this;
  var delayTimer = null;
  var stopInitiated = null;

  this.start = function (delay) {
    delay = delay || 1000;
    $ionicLoading.show({templateUrl: 'js/shared/loading/loading.html'});

    stopInitiated = false;
    delayTimer = $timeout(function() {
      delayTimer = null;
      if (stopInitiated) {
        forceStop();
      }
    }, delay);
  };

  this.stop = function () {
    stopInitiated = true;
    if (Helpers.empty(delayTimer)) {
      forceStop();
    }
  };

  function forceStop() {
    $ionicLoading.hide();
  }

}]);

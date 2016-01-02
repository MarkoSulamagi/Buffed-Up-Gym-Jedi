// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var bugj = angular.module('bugj', ['ionic', 'backand', 'bugj.menu', 'bugj.core', 'bugj.exercise', 'bugj.exercise-list', 'bugj.helpers', 'bugj.models'])

  .run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }])
  // Back& interceptor for query authorization
  .config(['$httpProvider', 'BackandProvider', function($httpProvider, BackandProvider) {
    BackandProvider.setAppName('bugj'); // change here to your app name
    BackandProvider.setAnonymousToken('4d637ce0-5fc7-4428-8995-b268ab292fb1'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

    //$httpProvider.interceptors.push(APIInterceptor);
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
    function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

      $stateProvider
        .state('exercise', {
          url: '/exercise',
          templateUrl: 'js/partials/exercise.html'
        });

      $urlRouterProvider.otherwise('/exercise');
  }]);

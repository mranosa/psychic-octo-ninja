'use strict';

var psychicOctoNinjaApp = angular.module('psychicOctoNinjaApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/activity/new', {
        templateUrl: 'views/activity/new.html',
        controller: 'Activity/NewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

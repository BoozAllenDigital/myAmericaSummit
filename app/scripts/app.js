'use strict';

/**
 * @ngdoc overview
 * @name myAmericaApp
 * @description
 * # myAmericaApp
 *
 * Main module of the application.
 */
angular
  .module('myAmericaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('RIDB_API_KEY', '718A093253714004B839308AE31E7AD8')
  .constant('RIDB_API_URL', 'https://ridb.recreation.gov/api/v1')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

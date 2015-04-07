'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

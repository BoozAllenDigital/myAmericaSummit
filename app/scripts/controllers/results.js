'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('ResultsCtrl', function ($scope, RidbSearch, RIDB_API_KEY) {

    var kids = false;
    var state = 'VA';
    var activities = 14;

    RidbSearch.get({"apikey": RIDB_API_KEY, "state": state, "activity" : activities}, function(result) {
      console.log(result);
      $scope.result = result;
    });



  });

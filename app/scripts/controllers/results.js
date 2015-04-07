'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('ResultsCtrl', function ($scope, RidbSearch, RidbActivities, RIDB_API_KEY) {

    var kids = false;
    var state = 'VA';
    var activities = 14;

    RidbSearch.get({"apikey": RIDB_API_KEY, "state": state, "activity" : activities}, function(results) {
      console.log(results);
      $scope.results = results;
    });

    RidbActivities.get({"apikey": RIDB_API_KEY}, function(activities) {
      console.log(activities);
      $scope.activities = activities;
    });



  });

'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, RidbSearch, RidbActivities, RIDB_API_KEY) {

    $scope.firstOptions = ['young','young at heart'];
    $scope.secondOptions = ['weekend-er', 'long-er'];
    $scope.lat = 37.431573;
    $scope.lng = -78.656894;

    $scope.firstAnswered = function(answer) {
      $scope.showSecond = true;
      $scope.answer1 = answer;
      var firstAnswer = {"questionId": "1", "selectedOption": answer, "email": $('#email').val()};
      // totalQuery["answer1"] = answer;
    };

    $scope.secondAnswered = function(answer) {
      $scope.showThird = true;
      $scope.answer2 = answer;
      var firstAnswer = {"questionId": "1", "selectedOption": answer, "email": $('#email').val()};

      $rootScope.$broadcast('questionsAnswered', { "answer1":$scope.answer1, "answer2":$scope.answer2, "lat":$scope.lat, "lng":$scope.lng });
      $location.path('/results');

      // totalQuery["answer2"] = answer;
    };

    RidbActivities.get({"apikey": RIDB_API_KEY}, function(activities) {
      console.log(activities);
      $scope.activities = activities;
    });

  });

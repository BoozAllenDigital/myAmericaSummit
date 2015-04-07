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
    $scope.interests = {
      "water" : false,
      "riding": false,
      "vistas": false,
      "snow": false,
      "overnight": false,
      "education": false,
      "cliches": false
    }

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
    };

    $scope.goToResults = function goToResults(){
      $rootScope.$broadcast('questionsAnswered', { "answer1":$scope.answer1, "answer2":$scope.answer2, "lat":$scope.lat, "lng":$scope.lng, "interests":$scope.interests });
      $location.path('/results');
    }

    $scope.checkChange = function checkChange(status, interest){

      $scope.interests[interest] = status;
      console.log($scope.interests);
    }

    RidbActivities.get({"apikey": RIDB_API_KEY}, function(activities) {
      console.log(activities);
      $scope.activities = activities;
    });

  });

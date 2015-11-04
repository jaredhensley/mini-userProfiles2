var app = angular.module('userProfiles');

app.controller('MainController', function ($scope, mainService) {

  $scope.getUsers = function () {
    mainService.getUsers().then(function (results) {
      $scope.users = results.data.data;
    })
  }


  $scope.getUsers();

});
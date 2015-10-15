'use strict';

var myApp = angular.module(
  'myApp', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngRoute',
    'ngResource']);

myApp.config(function($routeProvider) {
  $routeProvider
  // ROUTE FOR THE READ PAGE
  .when('/person', {
    templateUrl : 'views/person.html',
    controller  : 'PersonCtrl'
  })
  // ROUTE FOR THE EDIT PAGE
  .when('/person/edit', {
    templateUrl : 'views/personEdit.html',
    controller  : 'PersonCtrl'
  })
  // DEFAULT
  .otherwise({
    redirectTo: '/person'
  });
});

myApp.controller('AlertCtrl', function($scope) {
  $scope.alerts = [ ];
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});


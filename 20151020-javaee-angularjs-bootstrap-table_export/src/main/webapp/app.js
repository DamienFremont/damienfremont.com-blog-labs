'use strict';

var app = angular.module(
  'app', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource' ]);

app.factory('Person', function($resource) {
  return $resource('api/person');
});

app.controller('TableCtrl', function ($scope, Person) {

  Person.query(function(data) {
	  $scope.items = data;
  });
});

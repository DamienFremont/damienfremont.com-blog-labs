'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/page');
});

app.controller('PersonSearchCtrl', function ($scope, Person) {

  Person.get({
        page : 0,
        size : 10,
      }, function(page) {
	  $scope.items = page.content;
  });
  
});

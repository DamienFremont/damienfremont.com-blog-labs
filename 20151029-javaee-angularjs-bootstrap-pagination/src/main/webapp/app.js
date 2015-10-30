'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/all');
});

app.controller('PersonSearchCtrl', function ($scope, Person) {

  Person.query({
        like : 'doe'
      }, function(datas) {
	  $scope.items = datas;
  });
  
});

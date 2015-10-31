'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/all');
});

app.controller('PersonSearchCtrl', function ($scope, Person) {
  
  $scope.like = '';

  $scope.doFilter = function(like) {
	  $scope.like = like;
	  Person.query({
	        like : $scope.like
	      }, function(datas) {
		  $scope.items = datas;
	  });
  }

  $scope.doClear = function() {
	  $scope.like = '';
	  $scope.doFilter($scope.like);
  }

  $scope.doClear();
});

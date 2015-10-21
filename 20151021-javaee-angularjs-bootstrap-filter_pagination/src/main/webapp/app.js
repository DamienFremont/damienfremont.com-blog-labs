'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/all');
});

//TABLE

app.factory('PersonCSV', function($resource) {
	  return 'api/person/all/csv';
});

app.controller('PersonSearchCtrl', function ($scope, Person, PersonCSV, $window) {

  Person.query(function(datas) {
	  $scope.items = datas;
  });
  
  $scope.downloadCSV = function() {
	  var url = PersonCSV;
      $window.open(url);
  }
});

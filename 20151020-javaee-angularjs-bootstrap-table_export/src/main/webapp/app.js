'use strict';

var app = angular.module(
  'app', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person');
});
app.factory('PersonCSV', function($resource) {
	  return 'api/person/csv';
});

app.controller('TableCtrl', function ($scope, Person, PersonCSV, $window) {

  Person.query(function(datas) {
	  $scope.items = datas;
  });
  
  $scope.downloadCSV = function() {
	  var url = PersonCSV;
      $window.open(url);
  }
});

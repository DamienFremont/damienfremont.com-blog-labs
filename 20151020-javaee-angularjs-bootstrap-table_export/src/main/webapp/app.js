'use strict';

var app = angular.module(
  'app', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource' ]);

app.factory('Model', function($resource) {
  return $resource('api/upload');
});

app.controller('TableCtrl', function ($scope) {
	$scope.items = [
	                { id: 1, firstName:'Albert', lastName:'Einsten', birthYear:'1909'}
	                ];

});

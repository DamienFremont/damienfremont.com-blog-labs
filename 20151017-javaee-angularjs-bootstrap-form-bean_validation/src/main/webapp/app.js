'use strict';

var myApp = angular.module(
  'myApp', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngRoute',
    'ngResource']);

myApp.controller('AlertCtrl', function($scope) {
  $scope.alerts = [ ];
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

myApp.factory('Person', function($resource) {
	return $resource('api/person');
});

myApp.controller('PersonCtrl', function($scope, Person, $location) {
	  Person.get(function(obj) {
	     $scope.person = obj;
	  });
		  
	  // READ FORM
	  $scope.edit = function() {
	    $location.path( "/person/edit" );    
	  }
	  
	  // EDIT FORM
	  $scope.update = function() {
	    Person.save($scope.person ,function(obj) {
	      // this callback will be called asynchronously
	      // when the response is available
	      $scope.person = obj;
	      $location.path( "/person" );
		  $scope.$parent.alerts.push({type: 'success', msg: 'Updated!'});
	    }, function(error) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
		  $scope.$parent.alerts.push({type: 'danger', msg: 'Update Error! '+error.statusText});
	    });
	  }
	  $scope.cancel = function() {
	      $location.path( "/person" );    
	  }
	});
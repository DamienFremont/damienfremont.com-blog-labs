'use strict';

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
	    $location.path( "/person" );    
	}
	$scope.cancel = function() {
	    $location.path( "/person" );    
	}
});
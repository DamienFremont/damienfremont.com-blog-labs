'use strict';

myApp.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.goToPerson = function() {
		$location.path( "/person" );		
	}
	$scope.goToPersonEdit = function() {
		$location.path( "/person/edit" );		
	}	
}]);
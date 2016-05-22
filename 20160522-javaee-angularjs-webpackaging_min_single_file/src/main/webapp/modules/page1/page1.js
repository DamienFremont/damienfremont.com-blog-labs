'use strict';

angular.module('myapp')

.controller('Page1Ctrl', function($scope, $location) {
	$scope.goToPage2 = function() {
		$location.path('/page2');
	}
});
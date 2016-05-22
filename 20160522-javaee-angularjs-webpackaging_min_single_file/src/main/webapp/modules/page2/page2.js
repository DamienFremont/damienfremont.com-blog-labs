'use strict';

angular.module('myapp')

.controller('Page2Ctrl', function($scope, $location) {
	$scope.goToPage1 = function() {
		$location.path('/page1');
	}
});

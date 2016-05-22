angular.module('myapp')

.controller('Page1Ctrl', [ "$scope", "$location", function($scope, $location) {
	$scope.goToPage2 = function() {
		$location.path('/page2');
	}
} ]);
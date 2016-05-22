angular.module('myapp')

.controller('Page2Ctrl', [ "$scope", "$location", function($scope, $location) {
	$scope.goToPage1 = function() {
		$location.path('/page1');
	}
} ]);

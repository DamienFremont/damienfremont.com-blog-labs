'use strict';

myApp.controller('StatusCtrl', ['$scope', 'Status', 'StatusDetails', function($scope, Status, StatusDetails) {
	Status.get(function(s) {
		 $scope.status = s;
	});
	StatusDetails.get(function(d) {
		 $scope.details = d;
	});
}]);
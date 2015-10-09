'use strict';

myApp.controller('StatusCtrl', ['$scope', 'Status', function($scope, Status) {
	$scope.status = Status.get();
}]);
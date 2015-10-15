'use strict';

myApp.controller('PersonEditCtrl', ['$scope', 'Person', function($scope, Person) {
	Person.get(function(obj) {
		 $scope.person = obj;
	});
}]);
'use strict';

myApp.controller('PersonCtrl', ['$scope', 'Person', function($scope, Person) {
	Person.get(function(obj) {
		 $scope.person = obj;
	});
}]);
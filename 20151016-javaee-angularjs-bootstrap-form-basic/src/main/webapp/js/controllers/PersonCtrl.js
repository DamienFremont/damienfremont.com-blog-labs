'use strict';

myApp.controller('personCtrl', function($scope, Person) {
	Person.get(function(obj) {
		 $scope.person = obj;
	});
});
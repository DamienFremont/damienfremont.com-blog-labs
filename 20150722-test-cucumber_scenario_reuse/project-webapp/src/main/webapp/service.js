var personServices = angular.module('personServices', [ 'ngResource' ]);

personServices.factory('Persons', [ '$resource', function($resource) {
	return $resource('api/person/all', {}, {
		query : {
			method : 'GET',
			params : {},
			isArray : true
		}
	});
} ]);

personServices.factory('Person', [ '$resource', function($resource) {
	return $resource('api/person/:name', {}, {
		  readAll: {method:'GET', isArray:true},
		  create: {method:'POST'},
		});
} ]);
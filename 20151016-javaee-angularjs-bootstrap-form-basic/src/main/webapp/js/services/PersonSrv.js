'use strict';

myApp.factory('Person', function($resource) {
	return $resource('api/person');
});

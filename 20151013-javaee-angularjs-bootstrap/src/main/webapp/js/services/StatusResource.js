'use strict';

myApp.factory('Status', function($resource) {
	return $resource('api/status', {}, {});
});
myApp.factory('StatusDetails', function($resource) {
	return $resource('api/status/details', {}, {});
});
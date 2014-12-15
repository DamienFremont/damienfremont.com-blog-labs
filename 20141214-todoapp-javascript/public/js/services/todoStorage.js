/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function($resource) {
	var storage = $resource('./api/todos', {}, {
		read : {
			method : 'GET',
			isArray : true
		},
		update : {
			method : 'PUT',
			isArray : true
		}
	});

	return {
		get : function() {
			return storage.read();
		},

		put : function(todos) {
			storage.update(todos);
		}
	};
});

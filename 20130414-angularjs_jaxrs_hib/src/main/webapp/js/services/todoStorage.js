/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function($resource) {
	// var STORAGE_ID = 'todos-angularjs';
	var storage = $resource('./rest/todos', {}, {
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
			// return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			return storage.read();
		},

		put : function(todos) {
			// localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			storage.update(todos);
		}
	};
});

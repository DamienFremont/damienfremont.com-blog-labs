'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource',
    'smart-table'
    ]);

app.factory('Service', function($resource) {
    return $resource('api/person/page');
});

app.controller('TableCtrl', function ($scope, Service) {
	
  $scope.callServer = function(tableState) {
	var sort = tableState.sort;
	var predicate = sort.predicate || 'id';
	var reverse = sort.reverse || false;
	Service.get({
        sort : predicate,
        reverse : reverse
	  },
      function(pageable) {
        $scope.items = pageable.content;
    });
  };
});

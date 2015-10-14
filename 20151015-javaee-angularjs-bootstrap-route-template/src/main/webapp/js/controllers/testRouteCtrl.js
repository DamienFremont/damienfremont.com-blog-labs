'use strict';

myApp.controller('testRouteCtrl', function($scope, $location) {
	
  $scope.goBack = function() {
    $location.path( "/" );    
  }
});
'use strict';

myApp.controller('testParamsCtrl', function($scope, $route, $routeParams, $location) {
	
  $scope.goBack = function() {
    $location.path( "/" );    
  }
  
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
});
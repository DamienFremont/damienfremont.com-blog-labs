'use strict';

myApp.controller('homeCtrl', function($scope, $location) {
	
  $scope.goToTestRoute = function() {
    $location.path( "/testroute" );    
  }
  
  $scope.goToPageB = function() {
    $location.path( "/pageb" );    
  }
  
  $scope.goToTestParams= function(id) {
    $location.path( "/testparams/"+id );    
  }
});
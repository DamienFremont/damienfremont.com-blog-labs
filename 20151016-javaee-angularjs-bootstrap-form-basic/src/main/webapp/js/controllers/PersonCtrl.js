'use strict';

myApp.controller('PersonCtrl', function($scope, Person, $location) {
  Person.get(function(obj) {
     $scope.person = obj;
  });
	  
  // READ FORM
  $scope.edit = function() {
    $location.path( "/person/edit" );    
  }
  
  // EDIT FORM
  $scope.update = function() {
    Person.save($scope.person ,function(obj) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.person = obj;
      $location.path( "/person" );
	  $scope.$parent.alerts.push({type: 'success', msg: 'Updated!'});
    }, function() {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
	  $scope.$parent.alerts.push({type: 'danger', msg: 'Update Error!'});
    });
  }
  $scope.cancel = function() {
      $location.path( "/person" );    
  }
});
'use strict';

var myApp = angular.module(
  'myApp', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource']);

myApp.controller('AlertCtrl', function($scope) {
  $scope.alerts = [ ];
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

myApp.factory('Model', function($resource) {
	return $resource('api');
});

myApp.controller('DatepickerCtrl', function($scope, Model, $location) {
	
  // READ
  Model.get(function(obj) {
    $scope.model = {
      testDateInput: new Date(obj.testDateInput),
      testDatePicker: new Date(obj.testDatePicker)
    };
  });
  
  // UPDATE
  $scope.update = function() {
    Model.save($scope.model ,function(obj) {
	  $scope.$parent.alerts.push({type: 'success', msg: 'Updated!'});
    }, function(error) {
	  $scope.$parent.alerts.push({type: 'danger', msg: 'Server: '+error.statusText});
    });
  }
  
  $scope.open = function($event) {
	    $scope.status.opened = true;
	  };
	  
	  $scope.status = {
			    opened: false
			  };
	  
	  var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 2);
	  
	  $scope.events =
		    [
		      {
		        date: tomorrow,
		        status: 'full'
		      },
		      {
		        date: afterTomorrow,
		        status: 'partially'
		      }
		    ];
});
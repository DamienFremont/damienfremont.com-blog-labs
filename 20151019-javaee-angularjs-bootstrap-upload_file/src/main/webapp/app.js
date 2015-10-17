'use strict';

var myApp = angular.module(
  'myApp', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource',
    'ngFileUpload' ]);

myApp.controller('AlertCtrl', function($scope) {
  $scope.alerts = [ ];
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

myApp.factory('Model', function($resource) {
  return $resource('api/upload');
});

myApp.controller('MyCtrl', function($scope, Model, Upload) {

	$scope.uploadPic = function (file) {
	    $scope.formUpload = true;
	    if (file != null) {
	      $scope.upload(file)
	    }
	  };
    
});
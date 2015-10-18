'use strict';

var app = angular.module(
  'app', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource',
    'ngFileUpload' ]);

app.factory('Model', function($resource) {
  return $resource('api/upload');
});

app.controller('MyCtrl', function ($scope, Upload, $timeout, Model) {
    $scope.uploadFiles = function (files) {
        $scope.files = files;
        if (files && files.length) {
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    files: files
                }
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress = 
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };
    $scope.removeFile = function (file) {
    	var array = $scope.files;
    	for(var i = array.length - 1; i >= 0; i--) {
    	    if(array[i].name === file.name) {
    	    	array[i] = {
    	    			name: array[i].name,
        	    		removed: true
    	    	};
    	    }
    	}
    	$scope.files = array;
    	
    }
});
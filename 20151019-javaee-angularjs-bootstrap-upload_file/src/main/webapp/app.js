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

app.controller('SubmitFileCtrl', function ($scope, Upload, $timeout) {
    $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
    	url: 'api/upload/file',
      data: {file: file, username: $scope.username},
    });
    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = "Server Error! ("+response.data+")";
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }
});

app.controller('MyCtrl', function ($scope, Upload, $timeout, Model) {

	$scope.uploadFiles = function (files) {
        $scope.files = files;
        if (files && files.length) {
            Upload.upload({
                url: 'api/upload/files',
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
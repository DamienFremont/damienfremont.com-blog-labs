'use strict';

var app = angular.module('app', [ 'ngResource', 'nvd3ChartDirectives' ]);

// BAR *************

app.factory('Service', function($resource) {
  return $resource('api/datas/values');
});

app.controller('BarCtrl', function($scope, Service) {

  // FORMATTING FUNCTION (OPTIONNAL)
  $scope.xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%b')(new Date(d));
    }
  }
  
  // INIT
  Service.query(function(datas) {
    $scope.exampleData = [ {
      "key" : "Series 1",
      "values" : datas
    } ];
  });
});

// LINE IN REAL TIME ******

app.factory('ServiceReal', function($resource) {
  return $resource('api/datas/values-big');
});

app.controller('RealTimeCtrl', function($scope, Service, ServiceReal) {
	
  // REFRESH VALUE:  0.1 SEC
  var refreshInterval = 1 * 1000;
  
  // UPDATE
  $scope.fetchData = function() {
	  ServiceReal
    .query(function(datas) {
    	$scope.exampleData = [ {
          key : 'Series 1',
          values : datas,
          color : '#ff7f0e'
        } ];
      });
  }
  $scope.fetchData2 = function() {
	  ServiceReal
	    .query(function(datas) {
	    	$scope.exampleData2 = [ {
	          key : 'Series 1',
	          values : datas,
	          color : '#ff7f0e'
	        } ];
	      });
	  }
    
  // EVERY X TIME
  setInterval(function() {
    $scope.$apply(function() {
        $scope.fetchData2();
    })
  }, refreshInterval);
  
  // INIT
  $scope.fetchData();
  $scope.fetchData2();
});
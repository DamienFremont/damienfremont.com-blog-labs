'use strict';

var app = angular.module('app', [ 'ngResource', 'nvd3ChartDirectives' ]);

app.factory('Service', function($resource) {
  return $resource('api/datas/values');
});
app.factory('ServiceReal', function($resource) {
	  return $resource('api/datas/values-big');
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

app.controller('RealTimeCtrl', function($scope, Service, ServiceReal) {
	
  // REFRESH VALUE:  1 SEC
  var refreshInterval = 1 * 1;
  
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

  $scope.exampleData = $scope.fetchData();
  $scope.exampleData2 = $scope.fetchData2();
  // REFRESH EVERY X TIME
  setInterval(function() {
    $scope.$apply(function() {
        $scope.fetchData2();
    })
  }, refreshInterval);

});
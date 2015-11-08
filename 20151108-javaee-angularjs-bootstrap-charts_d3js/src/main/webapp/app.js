'use strict';

var app = angular.module('app', [ 'ngResource', 'nvd3ChartDirectives' ]);

app.factory('Service', function($resource) {
	return $resource('api/datas/page');
});

app.controller('BarCtrl', function($scope) {
	
	// FORMATTING FUNCTION (OPTIONNAL)
	$scope.xAxisTickFormatFunction = function(){
	    return function(d){
	        return d3.time.format('%b')(new Date(d));
	    }
	}
	$scope.exampleData = [
	                                       {
	                                           "key": "Series 1",
	                                           "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
	                                       },
	                                       {
	                                           "key": "Series 2",
	                                           "values": [ [ 1025409600000 , 0] , [ 1028088000000 , 0] , [ 1030766400000 , 0] , [ 1033358400000 , 0] , [ 1036040400000 , 0] , [ 1038632400000 , 0] , [ 1041310800000 , 0] , [ 1043989200000 , 0] , [ 1046408400000 , 0] , [ 1049086800000 , 0] , [ 1051675200000 , 0] , [ 1054353600000 , 0] , [ 1056945600000 , 0] , [ 1059624000000 , 0] , [ 1062302400000 , 0] , [ 1064894400000 , 0] , [ 1067576400000 , 0] , [ 1070168400000 , 0] , [ 1072846800000 , 0] , [ 1075525200000 , -0.049184266875945] ]
	                                      },
	                                      {
	                                          "key": "Series 3",
	                                          "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
	                                      },
	                                      {
	                                          "key": "Series 4",
	                                          "values": [ [ 1025409600000 , -7.0674410638835] , [ 1028088000000 , -14.663359292964] , [ 1030766400000 , -14.104393060540] , [ 1033358400000 , -23.114477037218] , [ 1036040400000 , -16.774256687841] , [ 1038632400000 , -11.902028464000] , [ 1041310800000 , -16.883038668422] , [ 1043989200000 , -19.104223676831] , [ 1046408400000 , -20.420523282736] , [ 1049086800000 , -19.660555051587] , [ 1051675200000 , -13.106911231646] , [ 1054353600000 , -8.2448460302143] , [ 1056945600000 , -7.0313058730976] ]
	                                      }
	                                  ];
});
                  
app.controller('RealTimeCtrl', function($scope) {

	   $scope.fetchData = function() {
           var sin = [], cos = [];
           for (var i = 0; i < 100; i++) {
               sin.push({x: i, y: Math.sin(i/Math.random())});
               cos.push({x: i, y: .5 * Math.cos(i/Math.random())});
           }
           return [
               {
                   values: sin,
                   key: 'Sine Wave',
                   color: '#ff7f0e'
               }
           ];
       }
       $scope.xFunction = function(){
           return function(d){
               return d.x;
           }
       }
       $scope.yFunction = function(){
           return function(d){
               return d.y;
           }
       }
       
       var refreshInterval = 1*1000;

       $scope.exampleData = $scope.fetchData();
       setInterval(function(){
           $scope.$apply(function(){
               var data = $scope.exampleData;
               var i = (data[1].values[data[1].values.length -1].x + 1);
               data[0].values.shift();
               data[1].values.shift();
               data[0].values.push({x: i , y: Math.sin(i/Math.random())});
               data[1].values.push({x: i, y: .5 * Math.cos(i/Math.random())});
               //var data = $scope.fetchData();
               $scope.exampleData = data;
           })
       }, refreshInterval);
	
});
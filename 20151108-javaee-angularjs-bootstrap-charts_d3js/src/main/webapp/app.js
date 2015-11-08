'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource',
    'nvd3ChartDirectives'
    ]);

app.factory('Service', function($resource) {
    return $resource('api/datas/page');
});

app.controller('MainCtrl', function ($scope) {
  
  // INIT
});

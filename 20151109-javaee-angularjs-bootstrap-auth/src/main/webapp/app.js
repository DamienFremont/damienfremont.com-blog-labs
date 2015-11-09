'use strict';

var app = angular.module('app', [ 'ngResource', 'satellizer' ]);

// BAR *************
app.config(function($authProvider) {

});

app.factory('Service', function($resource) {
  return $resource('api/datas/values');
});

app.controller('LoginCtrl', function($scope) {

});
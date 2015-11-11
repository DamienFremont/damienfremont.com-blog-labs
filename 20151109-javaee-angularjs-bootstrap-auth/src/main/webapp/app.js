'use strict';

var app = angular.module('app', [ 'ngResource', 'ngRoute',  'ui.router', 'satellizer' ]);

// CONFIG
app.config(function($routeProvider, $authProvider) {
	
  // ROUTE
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise('/');

  // SECURITY
  $authProvider.withCredentials = true;
  $authProvider.tokenRoot = null;
  $authProvider.cordova = false;
  $authProvider.baseUrl = './api/';
  $authProvider.loginUrl = '/auth/login';
  $authProvider.signupUrl = '/auth/signup';
  $authProvider.unlinkUrl = '/auth/unlink/';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'satellizer';
  $authProvider.authHeader = 'Authorization';
  $authProvider.authToken = 'Bearer';
  $authProvider.storageType = 'localStorage';
  
});

app.factory('Service', function($resource) {
  return $resource('api/data');
});

// COMMON CTRL

app.controller('ParentCtrl', function($scope, $auth) {
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
});

app.controller('NavbarCtrl', function($scope, $auth) {
  
});


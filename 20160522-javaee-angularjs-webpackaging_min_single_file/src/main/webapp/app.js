'use strict';

angular.module('app', [ 
'ngResource', 
'ngRoute'
]);

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
    .when('/logout', {
      templateUrl: 'views/home.html',
      controller: 'LogoutCtrl'
    })
    .when('/datas', {
      templateUrl: 'views/datas.html',
      controller: 'DatasCtrl',
      resolve: {
          loginRequired: loginRequired
        }
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

function skipIfLoggedIn($q, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.reject();
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  }

  function loginRequired($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.resolve();
    } else {
      $location.path('/login');
    }
    return deferred.promise;
  }

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

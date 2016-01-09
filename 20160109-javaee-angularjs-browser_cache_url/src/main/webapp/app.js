'use strict';

angular.module('app', [ 'ngResource', 'ngRoute', 'ngAnimate', 'ngCookies' ])

// CONFIG

.config(function($routeProvider) {
  
  var versionUrl = '?nocache=${project.version}';
  
  // ROUTE: URLs
  $routeProvider
  // HOME
  .when('/home', {
    templateUrl : 'modules/home/home.html'+versionUrl
  })
  // DEFAULT
  .otherwise('/home');
});

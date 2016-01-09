'use strict';

angular.module('app', [ 'ngRoute' ])

// CONFIG

.config(function($routeProvider) {
  
  var version = '?nocache=${project.version}';
  
  // ROUTE: URLs
  $routeProvider
  // HOME
  .when('/home', {
    templateUrl : 'modules/home/home.html'+version
  })
  // DEFAULT
  .otherwise('/home');
});

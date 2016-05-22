'use strict';

angular.module('myapp', [ //
'ngResource', //
'ngRoute', //
'templates-main' //
])

// CONFIG
.config([ "$routeProvider", function($routeProvider) {

  // ROUTE
  $routeProvider

  // PAGE1
  .when('/page1', {
    templateUrl : '/js/page1/page1.html',
    controller : 'Page1Ctrl'
  })
  // PAGE 2
  .when('/page2', {
    templateUrl : '/js/page2/page2.html',
    controller : 'Page2Ctrl'
  })
  // DEFAULT
  .otherwise('/page1');
} ]);

'use strict';

var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider) {
  $routeProvider //
  .when('/page1', {
    controller : 'MainCtrl',
    templateUrl : 'views/page1.html',
    breadcrumbs : [ home, page1 ]
  }).when('/page2', {
    controller : 'MainCtrl',
    templateUrl : 'views/page2.html',
    breadcrumbs : [ home, page2 ]
  }).when('/page2/subpage', {
    controller : 'MainCtrl',
    templateUrl : 'views/page2subpage.html',
    breadcrumbs : [ home, page2, page2subpage ]
  }).otherwise({
    templateUrl : 'views/home.html',
    breadcrumbs : [ home ]
  });
});

const home = { href : '#/', label : 'Home' };
const page1 = { href : '#/page1', label : 'Page 1' };
const page2 = { href : '#/page2', label : 'Page 2' };
const page2subpage = { href : '#/page2/subpage', label : 'SubPage' };

app.controller('BreadcrumbsController', function($scope, $route) {
  $scope.route = $route;
});

app.controller('MainCtrl', function($scope) {

});

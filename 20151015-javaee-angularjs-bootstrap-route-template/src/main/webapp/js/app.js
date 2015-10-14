'use strict';

var myApp = angular.module(
		'myApp', 
		[ 
		  'ngAnimate',
		  'ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'homeCtrl'
        })

        // route for the testRoute page
        .when('/testroute', {
            templateUrl : 'views/testRoute.html',
            controller  : 'testRouteCtrl'
        })

        // route for the testParams page        
        .when('/testparams/:id', {
            templateUrl : 'views/testParams.html',
            controller  : 'testParamsCtrl'
        })
        
        
        // default redirection
        .otherwise({
            redirectTo: '/'
        });
});

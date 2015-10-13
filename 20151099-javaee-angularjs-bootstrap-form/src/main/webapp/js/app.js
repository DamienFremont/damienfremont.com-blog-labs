'use strict';

var myApp = angular.module(
		'myApp', 
		[ 
		  'ngAnimate', 
		  'ui.bootstrap', 
		  'ngResource',
		  'ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html'
        })

        // route for the about page
        .when('/person', {
            templateUrl : 'views/person.html',
            controller  : 'PersonCtrl'
        })

        // route for the contact page
        .when('/person/edit', {
            templateUrl : 'pages/personEdit.html',
            controller  : 'PersonEditCtrl'
        });
});

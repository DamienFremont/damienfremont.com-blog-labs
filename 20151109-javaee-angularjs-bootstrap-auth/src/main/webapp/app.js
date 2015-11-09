'use strict';

var app = angular.module('app', [ 'ngResource', 'satellizer' ]);

// BAR *************
app.config(function($urlRouterProvider, $authProvider) {
//    $stateProvider
//    .state('home', {
//      url: '/',
//      controller: 'HomeCtrl',
//      templateUrl: 'partials/home.html'
//    })
//    .state('login', {
//      url: '/login',
//      templateUrl: 'partials/login.html',
//      controller: 'LoginCtrl',
//      resolve: {
//        skipIfLoggedIn: skipIfLoggedIn
//      }
//    })
//    .state('signup', {
//      url: '/signup',
//      templateUrl: 'partials/signup.html',
//      controller: 'SignupCtrl',
//      resolve: {
//        skipIfLoggedIn: skipIfLoggedIn
//      }
//    })
//    .state('logout', {
//      url: '/logout',
//      template: null,
//      controller: 'LogoutCtrl'
//    })
//    .state('profile', {
//      url: '/profile',
//      templateUrl: 'partials/profile.html',
//      controller: 'ProfileCtrl',
//      resolve: {
//        loginRequired: loginRequired
//      }
//    });
    
    $urlRouterProvider.otherwise('/caca');
});

app.factory('Service', function($resource) {
	return $resource('api/datas/values');
});

app.controller('LoginCtrl', function($scope, $auth) {

	var user = {
		email : $scope.email,
		password : $scope.password
	};

	$auth.login(user).then(function(response) {
		// Redirect user here after a successful log in.
	}).catch(function(response) {
		// Handle errors here, such as displaying a notification
		// for invalid email and/or password.
	});
});
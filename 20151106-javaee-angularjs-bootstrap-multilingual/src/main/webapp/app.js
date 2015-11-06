'use strict';

var app = angular.module('app', 
  [ 'ngResource', 
    'ngRoute',
    'ngCookies',
    'pascalprecht.translate' ]);

app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Hello',
	    'FOO': 'This is a paragraph'
	  });
	 
	  $translateProvider.translations('fr', {
	    'TITLE': 'Bonjour',
	    'FOO': 'C\'est un paragraph'
	  });
	 
	  $translateProvider.preferredLanguage('en');
	}]);

app.controller('MainCtrl', function($window, $scope, $cookies, $route, $translate) {
	// INIT
	var lang = $window.navigator.language || $window.navigator.userLanguage;
	
	$scope.periodStart = 2001;
	$scope.lang = lang;
	$cookies.put('lang', lang);
	$translate.use(lang);

	// CHANGE LANG
	$scope.doChangeLang = function(lang) {
		$scope.lang = $cookies.lang = lang;
		$translate.use(lang);
		$translate.refresh();
	}
});


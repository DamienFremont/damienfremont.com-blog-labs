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
	function useLang(lang) {
		$scope.lang = lang;
		$cookies.put('lang', lang);
		$translate.use(lang);
	}

	// CHANGE LANG
	$scope.doChangeLang = function(lang) {
		useLang(lang);
		$translate.refresh();
	}
	
	// INIT
	$scope.lang = $window.navigator.language || $window.navigator.userLanguage;
    useLang($scope.lang);
    $scope.periodStart = 2001;
});


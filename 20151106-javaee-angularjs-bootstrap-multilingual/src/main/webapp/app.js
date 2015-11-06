'use strict';

var app = angular.module('app', 
  [ 'ngCookies',
    'pascalprecht.translate' ]);

var translationsEN = {
  'FOO': 'This is a paragraph'
}
var translationsFR = {
  'FOO': 'C\'est un paragraph'
}
app.config( function ($translateProvider) {
  // ADD LANG
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('fr', translationsFR);
  $translateProvider.preferredLanguage('en');
  // REMEMBER
//  $translateProvider.useLocalStorage();
  });

app.controller('MainCtrl', function($scope, $translate) {

  // CHANGE LANG
  $scope.changeLanguage = function(langKey, localKey) {
    $translate.use(langKey);
    $scope.lang  = langKey;
    $scope.local = localKey;
  }
  
  // INIT
  $scope.periodStart = 2001;
});


'use strict';

var app = angular.module('app', 
  [ 'ngCookies',
    'pascalprecht.translate' ]);

var translationsEN = {
  'FOO': 'This is a paragraph.'
}
var translationsFR = {
  'FOO': 'C\'est un paragraph.'
}
app.config( function ($translateProvider) {
  // ADD LANG
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
  // REMEMBER
  $translateProvider.useCookieStorage();
  });

app.controller('MainCtrl', function($scope, $translate) {

  // CHANGE LANG
  $scope.changeLanguage = function(langKey, localKey) {
    $translate.use(langKey);
  }
  
  // INIT
  $scope.periodStart = 1288323623006;
});


'use strict';

var app = angular.module('app', 
  [ 'ngCookies',
    'pascalprecht.translate',
    'tmh.dynamicLocale']);

var translationsEN = {
  'FOO': 'This is a paragraph.'
}
var translationsFR = {
  'FOO': 'C\'est un paragraph.'
}
*
// i18n: LANGUAGE
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

// l10n: LOCALE
app.config(function(tmhDynamicLocaleProvider) {
  const localeLocationPattern = 'webjars/angular-i18n/1.4.7/angular-locale_{{locale}}.js';
  tmhDynamicLocaleProvider.localeLocationPattern(localeLocationPattern);
  tmhDynamicLocaleProvider.useCookieStorage();
})

app.controller('MainCtrl', function($scope, $translate, tmhDynamicLocale, $rootScope, $locale) {
  $rootScope.availableLocales = {
    'en-us': 'English (US)',
    'en-gb': 'English (GB)',
    'fr-fr': 'French (FR)'
  };

  // CHANGE LANG
  $scope.changeLocale = function(key) {
    var keys = key.split("-");
	var langKey = keys[0];
    $translate.use(langKey);
    tmhDynamicLocale.set(key);
  }
  
  // INIT
  $rootScope.model = {selectedLocale: 'en'};
  $rootScope.$locale = $locale;
  $rootScope.changeLocale = tmhDynamicLocale.set;
  
});


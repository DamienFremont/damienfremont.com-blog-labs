'use strict';

var app = angular.module('app', 
  [ 'ngCookies',
    'pascalprecht.translate',
    'tmh.dynamicLocale']);

// i18n: LANGUAGE
app.config( function ($translateProvider) {
  // ADD LANG
  $translateProvider
  .useStaticFilesLoader({
    prefix: 'i18n/locale-',
    suffix: '.json'
  })
  // REMEMBER
  .preferredLanguage('en')
  .fallbackLanguage('en')
  .useSanitizeValueStrategy('escape')
  .useCookieStorage();
});

// l10n: LOCALE
app.config(function(tmhDynamicLocaleProvider) {
  const locales = 'webjars/angular-i18n/1.4.7/angular-locale_{{locale}}.js';
  tmhDynamicLocaleProvider
  .localeLocationPattern(locales)
  .useCookieStorage();
})

app.controller('MainCtrl', function($window, $scope, $translate, $cookieStore, tmhDynamicLocale, tmhDynamicLocaleCache, $rootScope, $locale) {
  
  $scope.availableLocales = {
    'en-us': 'English (US)',
    'en-gb': 'English (GB)',
    'fr-fr': 'French (FR)'
  };
  
  // CHANGE LANG
  $scope.changeLocale = function(key) {
    $rootScope.model = {selectedLocale: key};
	// i18n
	var langKey = key.substring(0,2);
    $translate.use(langKey);
    // l10n
    tmhDynamicLocale.set(key);
  }
  
  // INIT
  $rootScope.$locale = $locale;
  var lang = $cookieStore.get('tmhDynamicLocale.locale');;
  if(!lang) {
	  lang = $window.navigator.language || $window.navigator.userLanguage;
  }
  $scope.changeLocale(lang);
  
});


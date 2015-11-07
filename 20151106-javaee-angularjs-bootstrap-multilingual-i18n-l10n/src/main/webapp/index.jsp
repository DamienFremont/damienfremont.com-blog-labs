<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/jquery/${jquery.version}/jquery.js"></script>
<script src="webjars/bootstrap/${bootstrap.version}/js/bootstrap.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-route.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-cookies.js"></script>
<script src="webjars/angular-translate/${angular-translate.version}/angular-translate.js"></script>
<script src="webjars/angular-translate-storage-cookie/${angular-translate-storage-cookie.version}/angular-translate-storage-cookie.js"></script>
<script src="webjars/angular-translate-loader-static-files/${angular-translate-loader-static-files.version}/angular-translate-loader-static-files.js"></script>
<script src="webjars/angular-dynamic-locale/${angular-dynamic-locale.version}/dist/tmhDynamicLocale.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">
<div class="container">
<h1>Multilingual</h1>

<!-- CHANGE LANGUAGE -->
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <i class="glyphicon glyphicon-menu-hamburger"></i>
     Language ({{model.selectedLocale}})
     <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li ng-repeat="(key, value) in availableLocales">
      <a href="#" 
        ng-click="changeLocale(key)">
      <img src="img/flag_icons/{{key | limitTo:2:3}}.png" /> 
      {{value}}</a></li>
  </ul>
</div>
<br/>
<div class="alert alert-info col-md-5">
<p>Current locale id: {{$locale.id}}</p>
<br/>
  
<!-- i18n: LANGUAGE -->
<strong>i18n: LANGUAGE</strong>
<p>{{ 'PARAGRAPH' | translate }}</p>
  
<br/>

<!-- l10n: LOCALE -->
<strong>l10n: LOCALE</strong>
<p>A big number: {{1234567890 | number}}</p>
<p>The Epoch was on: {{0 | date:'longDate'}}</p>
<p>The Time was on: {{0 | date:'shortTime'}}</p>
<p>One million of the local currency: {{1000000 | currency}}</p>
</div>

</div>
</body>
</html>
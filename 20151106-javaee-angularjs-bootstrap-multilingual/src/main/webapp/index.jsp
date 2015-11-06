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
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">
<div class="container">
<h1>Multilingual</h1>

<div role="presentation" class="dropdown">
  <button class="btn btn-default dropdown-toggle" 
    data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="true">
    Language ({{lang}}-{{local}})
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#" ng-click="changeLanguage('en','us')">
      <img src="img/us.png" /> 
      English (US)</a></li>
    <li><a href="#" ng-click="changeLanguage('en','gb')">
      <img src="img/gb.png" /> 
      English (GB)</a></li>
    <li><a href="#" ng-click="changeLanguage('fr','fr')">
      <img src="img/fr.png" /> 
      Francais</a></li>
  </ul>
</div>

<br/>
<div class="alert alert-info col-md-5">
  <p>{{ 'FOO' | translate }}</p>
  {{periodStart | date:'mediumDate'}} 
</div>

</div>
</body>
</html>
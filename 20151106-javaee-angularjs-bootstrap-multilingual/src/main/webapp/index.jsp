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
    Select Language ({{lang}})
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#" ng-click="doChangeLang('en')">
      English</a></li>
    <li><a href="#" ng-click="doChangeLang('fr')">
      Francais</a></li>
  </ul>
</div>


<h2>Locale:</h2>
{{periodStart | date:'mediumDate'}} 

<h2>Language:</h2>
<p>{{ 'TITLE' | translate }}</p>
<p>{{ 'FOO' | translate }}</p>

</div>
</body>
</html>
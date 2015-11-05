<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-route.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">
<div class="container">
<h1>Breadcrumb</h1>

<!-- MENU -->

<!-- BREADCRUMB -->
<div ng-controller="BreadcrumbsController">
  <ol class="breadcrumb" 
    ng-show="route.current.breadcrumbs">
    <li ng-class="{active: $last}" 
      ng-repeat="breadcrumb in route.current.breadcrumbs">
      <a href="{{breadcrumb.href}}">
        {{breadcrumb.label}}
      </a>
    </li>
  </ul>
</div>

<!-- VIEW/PAGE -->
<div ng-view></div>

</div>
</body>
</html>
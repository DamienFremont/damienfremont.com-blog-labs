<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angular-ui-router/${angular-ui-router.version}/release/angular-ui-router.js"></script>
<script src="webjars/angular-breadcrumb/${angular-breadcrumb.version}/dist/angular-breadcrumb.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">
<div class="container">
<h1>Breadcrumb</h1>

<div ui-view></div>
<!-- We'll also add some navigation: -->
<a ui-sref="state1">State 1</a>
<a ui-sref="state2">State 2</a>

</div>
</body>
</html>
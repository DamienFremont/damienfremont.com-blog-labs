<html ng-app="myApp">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet"
	href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-route.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
<script
	src="webjars/angular-ui-bootstrap/${angular-ui-bootstrap.version}/ui-bootstrap-tpls.js"></script>
<!-- YOUR JS -->
<script src="js/app.js"></script>
<script src="js/controllers/HomeCtrl.js"></script>
<script src="js/controllers/PersonCtrl.js"></script>
<script src="js/controllers/PersonEditCtrl.js"></script>
<script src="js/services/PersonResource.js"></script>
</head>
<body>
	<div class="container">
		<!-- MAIN CONTENT AND INJECTED VIEWS -->
		<div id="main">
			<!-- angular templating -->
			<!-- this is where content will be injected -->
			<div ng-view></div>
		</div>
</body>
</html>
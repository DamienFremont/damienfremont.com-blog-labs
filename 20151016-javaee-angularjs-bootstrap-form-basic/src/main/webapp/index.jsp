<html ng-app="myApp">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<link rel="stylesheet" href="styles/animation.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
<script src="webjars/angular-ui-bootstrap/${angular-ui-bootstrap.version}/ui-bootstrap-tpls.js"></script>
<!-- YOUR JS -->
<script src="js/app.js"></script>
<script src="js/controllers/PersonCtrl.js"></script>
<script src="js/services/PersonSrv.js"></script>
</head>
<body>
  <div class="container" ng-controller="personCtrl">
    <h1>Person</h1>
    <div class="slide-animate-container">
      <div class="slide-animate" ng-include="'views/person.html'">
    </div>    	
  </div>
</body>
</html>
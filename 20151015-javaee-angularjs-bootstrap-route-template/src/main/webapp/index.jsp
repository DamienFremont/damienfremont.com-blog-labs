<html ng-app="myApp">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<link rel="stylesheet" href="styles/main.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-route.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
<!-- YOUR JS -->
<script src="js/app.js"></script>
<script src="js/controllers/homeCtrl.js"></script>
<script src="js/controllers/testRouteCtrl.js"></script>
<script src="js/controllers/testParamsCtrl.js"></script>
</head>
<body>
  <div class="container">
    <!-- MAIN CONTENT AND INJECTED VIEWS -->
    <div id="main">
      <!-- angular templating -->
      <!-- this is where content will be injected -->
      <div ng-view class="view-animate"></div>
    </div>
  </div>
</body>
</html>
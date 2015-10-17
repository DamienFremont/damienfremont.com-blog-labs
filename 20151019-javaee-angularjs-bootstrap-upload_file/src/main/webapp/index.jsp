<!DOCTYPE html> <!-- DON'T FORGET DOCTYPE OR THERE WILL BE .btn CLASS HEIGHT BUGS! https://github.com/twbs/bootstrap/issues/10482 -->
<html ng-app="myApp">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
<script src="webjars/angular-ui-bootstrap/${angular-ui-bootstrap.version}/ui-bootstrap-tpls.js"></script>
<script src="webjars/ng-file-upload/${ng-file-upload.version}/ng-file-upload.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
  <div class="container" ng-controller="AlertCtrl">
    <!-- ALERT -->
    <uib-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>

    <h1>Upload</h1>

	<!-- FORM -->
    <form class="form-horizontal" ng-controller="DatepickerCtrl">


    </form>
  </div>
</body>
</html>
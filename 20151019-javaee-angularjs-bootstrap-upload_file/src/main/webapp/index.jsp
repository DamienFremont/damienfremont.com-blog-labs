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
    <form class="form-horizontal" ng-controller="MyCtrl">

Upload on form submit or button click
<input type="file" ngf-select="" ng-model="picFile" name="file" accept="image/*" required="" class="ng-valid-pattern ng-valid-min-size ng-valid-max-size ng-valid-validate-fn ng-dirty ng-valid ng-valid-required">
<i ng-show="myForm.file.$error.required" class="ng-hide">*required</i>
<br>
<button ng-disabled="!myForm.$valid" ng-click="uploadPic(picFile)">Submit</button>
<img ngf-src="picFile" class="thumb" src="blob:https%3A//angular-file-upload.appspot.com/6be43742-c2ed-4a09-8692-4529d607c422">
<span class="progress" ng-show="picFile.progress >= 0">
                  <div style="width:100%" ng-bind="picFile.progress + '%'" class="ng-binding">100%</div>
              </span>
<span ng-show="picFile.result" class="">Upload Successful</span>

    </form>
  </div>
</body>
</html>
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
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
  <div class="container" ng-controller="AlertCtrl">
    <h1>Date</h1>

    <!-- ALERT -->
    <uib-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>

	<!-- FORM -->
    <form class="form-horizontal" ng-controller="DatepickerCtrl">
      <div class="form-group">
        <label class="col-sm-3 control-label">Input to Java String</label>
        <div class="col-sm-6">
          <input class="form-control" ng-model="model.testDateInput" 
            type="date">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">Widget to Java String</label>
        <div class="col-sm-6">
            <p class="input-group">
              <input class="form-control" ng-model="model.testDatePicker"
                type="date" 
                uib-datepicker-popup
                is-open="status.opened" 
                datepicker-options="dateOptions" 
                date-disabled="disabled(date, mode)" 
                close-text="Close" />
              <span class="input-group-btn">
                <button type="button" class="btn btn-default" 
                  ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i>
                </button>
              </span>
            </p>
        </div>
      </div>
      <!-- BUTTON -->
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-primary" ng-click="update()">Update</button>
        </div>
      </div>
    </div>
  </form>
</body>
</html>
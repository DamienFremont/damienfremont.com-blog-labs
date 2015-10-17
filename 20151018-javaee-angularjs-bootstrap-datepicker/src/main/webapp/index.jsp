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
    <h1>Person</h1>

    <!-- ALERT -->
    <uib-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>

	<!-- FORM -->
    <form class="form-horizontal" ng-controller="DatepickerCtrl">
    {{person.testDateInput}}
      <div class="form-group">
        <label class="col-sm-2 control-label">Date-Input to Java-String</label>
        <div class="col-sm-10">
          <input class="form-control" ng-model="model.testDateInput" type="date" placeholder="yyyy-MM-dd">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">Date-Picker to Java-String</label>
        <div class="col-sm-10">
            <div class="input-group">
              <input type="date" class="form-control" 
                uib-datepicker-popup 
                ng-model="model.testDatePicker" 
                is-open="status.opened" 
                datepicker-options="dateOptions" 
                date-disabled="disabled(date, mode)" 
                close-text="Close" />
                <a class="input-group-addon" ng-click="open($event)" href="#"><i class="glyphicon glyphicon-calendar"></i></a>
            </div>
        </div>
      </div>
      <!-- BUTTON -->
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary" ng-click="update()">Update</button>
        </div>
      </div>
    </div>
  </form>
</body>
</html>
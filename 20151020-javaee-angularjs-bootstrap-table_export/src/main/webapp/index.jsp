<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<link rel="stylesheet" href="styles.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
<script src="webjars/angular-ui-bootstrap/${angular-ui-bootstrap.version}/ui-bootstrap-tpls.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
<div class="container">
<h1>Table</h1>
	
<!-- SIMPLE TABLE -->
<form name="readForm" ng-controller="TableCtrl">
  <h2>Read/Export</h2>
  <!-- TABLE -->
  <table class="table table-bordered table-striped table-hover ">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    <tr ng-repeat="i in items">
      <td>{{i.id}}</td>
      <td>{{i.firstName}}</td>
      <td>{{i.lastName}}</td>
    </tr>
  </table>
  <!-- EXPORT -->
  <button class="btn btn-default" 
    ng-click="downloadCSV()">
    <i class="glyphicon glyphicon-export"></i> Export to Excel
  </button>
</form>

<!-- EDITABLE TABLE -->
	
<form name="editForm" ng-controller="EditCtrl">
  <h2>Editable (Excel-like)</h2>
  <!-- TABLE -->
  <table class="table table-bordered table-striped table-hover ">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
    <tr ng-repeat="i in items">
      <td>{{i.id}}</td>
      <td>{{i.firstName}}</td>
      <td>{{i.lastName}}</td>
      <td>
        <!-- ADD -->
        <button class="btn btn-default">
          <i class="glyphicon glyphicon-minus"></i> Remove
         </button>
      
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <!-- ADD -->
        <button class="btn btn-default">
          <i class="glyphicon glyphicon-plus"></i> Add row
         </button>
      </td>
    </tr>
  </table>
  <!-- UPDATE -->
  <button class="btn btn-primary">
    <i class="glyphicon glyphicon-save"></i> Update
  </button>
  <button class="btn btn-default"
    ng-click="undo()">
    <i class="glyphicon glyphicon-remove"></i> Undo Changes
  </button>
</form>

    
</div>
</body>
</html>
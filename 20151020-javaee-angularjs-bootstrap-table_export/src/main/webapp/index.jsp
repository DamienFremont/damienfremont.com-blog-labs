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
<h1>DataTable</h1>
	
<!-- SIMPLE TABLE -->
<form name="readForm" ng-controller="TableCtrl">
  <h2>Read-Only, Export</h2>
  <!-- TABLE -->
  <table id="table"  class="table table-bordered table-striped">
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
  <button class="btn btn-success" 
    ng-click="downloadCSV()">
    <i class="glyphicon glyphicon-export"></i> Export to Excel
  </button>
</form>

<!-- DATATABLE -->
	
<form name="editForm" ng-controller="DataTableCtrl">
  <h2>Editable, Excel-like</h2>
  <!-- TABLE -->
  <table id="datatable" class="table table-bordered table-hover">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
    <tr ng-repeat="i in items">
      <td>{{i.id}}</td>
      <td contentEditable='true' 
        focus="true"
        ng-model="i.firstName">{{i.firstName}}</td>
      <td contentEditable='true' 
        ng-model="i.lastName">{{i.lastName}}</td>
      <td>
        <!-- REMOVE -->
        <button class="btn btn-danger btn-xs" 
          ng-click="remove(i)">
          <i class="glyphicon glyphicon-minus"></i> 
         </button>
      </td>
    </tr>
    <!-- ADD -->
    <tr>
      <td colspan="4">
        <button class="btn btn-primary btn-xs" 
          ng-click="add()">
          <i class="glyphicon glyphicon-plus"></i> Add row
         </button>
      </td>
    </tr>
  </table>
  <!-- UPDATE -->
  <button class="btn btn-success" 
    ng-click="update()" ng>
    <i class="glyphicon glyphicon-save"></i> Update
  </button>
  <!-- UNDO -->
  <button class="btn btn-warning"
    ng-click="undo()">
    <i class="glyphicon glyphicon-remove"></i> Undo Changes
  </button>
</form>
    
</div>
</body>
</html>
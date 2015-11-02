<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angular-smart-table/${angular-smart-table.version}/dist/smart-table.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
<div class="container">
<h1>Pagination</h1>
<form ng-controller="TableCtrl">
<table class="table" 
  st-table="items"
  st-pipe="callServer">
<thead>

<!-- PAGE SIZE -->
<tr>
  <td colspan="3">
    <div class="btn-group pull-right ng-scope">
      <button type="button" 
        ng-class="{'active':itemsByPage==10}" 
        ng-click="itemsByPage=10" 
        class="btn btn-default">10</button>
      <button type="button" 
        ng-class="{'active':itemsByPage==25}" 
        ng-click="itemsByPage=25" 
        class="btn btn-default">25</button>
      <button type="button" 
        ng-class="{'active':itemsByPage==50}" 
        ng-click="itemsByPage=59" 
        class="btn btn-default">50</button>
    </div>
  </td>
</tr>
    
<!-- HEADERS -->
<tr>
  <th>#</th>
  <th>First Name</th>
  <th>Last Name</th>
</tr>
</thead>

<!-- CONTENT -->
<tbody>
<tr ng-repeat="i in items">
  <td>{{i.id}}</td>
  <td>{{i.firstName}}</td>
  <td>{{i.lastName}}</td>
</tr>
</tbody>

<!-- PAGINATION -->
<tfoot>
<tr>
  <td colspan="3" class="text-center">
    <div 
      st-template="pagination.html" 
      st-pagination="" 
      st-items-by-page="itemsByPage"></div>
  </td>
</tr>
</tfoot>
</table>
</form>    
</div>
</body>
</html>
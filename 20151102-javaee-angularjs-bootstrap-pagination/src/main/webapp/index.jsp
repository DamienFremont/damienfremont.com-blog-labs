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
<table class="table" st-table="items" st-pipe="callServer">
<thead>

<!-- PAGINATION -->
<tr>
  <td class="text-center" st-pagination="" st-items-by-page="10" colspan="3"></td>
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
</table>
</form>    
</div>
</body>
</html>
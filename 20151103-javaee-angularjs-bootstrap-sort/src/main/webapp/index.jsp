<!DOCTYPE html>
<html 
  ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<link rel="stylesheet" href="style.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angular-smart-table/${angular-smart-table.version}/dist/smart-table.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
<div class="container">

<h1>Sort</h1>
<form 
  ng-controller="TableCtrl">
<table class="table" 
  st-table="items"
  st-pipe="callServer">
<thead>
    
<!-- HEADERS -->
<tr>
  <th st-sort="id">
    <a href="#">#</a></th>
  <th st-sort="firstName">
    <a href="#">First Name</a></th>
  <th st-sort="lastName">
    <a href="#">Last Name</a></th>
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
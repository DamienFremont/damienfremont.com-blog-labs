<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
<div class="container">

<h1>List Filter</h1>
<form name="searchForm" ng-controller="PersonSearchCtrl">
<div class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Filter</label>
    <div class="col-sm-10">
      <input class="form-control" placeholder="type anything here..." ng-model="like" ng-change="doFilter(like)">
    </div>
  </div>
</div>
  <p ng-show="!items.length">Not found! Maybe change your criteria filter.</p>
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
</form>
    
</div>
</body>
</html>
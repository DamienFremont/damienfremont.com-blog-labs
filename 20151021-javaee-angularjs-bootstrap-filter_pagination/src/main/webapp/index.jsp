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
<form ng-controller="PersonSearchCtrl">
<div class="row">
  <div class="col-lg-6 col-lg-offset-3">
    <div class="input-group">
      <span class="input-group-addon"> <span class="glyphicon glyphicon-search"></span> </span>
      <input class="form-control" placeholder="type anything here to filter the table..." ng-model="like" ng-change="doFilter(like)">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" ng-click="doClear()">
          <span class="glyphicon glyphicon-remove"></span> Clear
        </button>
      </span>
    </div>
  </div>
</div>
<br/>
  <p ng-show="!items.length" class="text-center alert alert-info">
    <strong>Not found!</strong> Maybe change your criteria filter.</p>
  <table ng-show="items.length" id="table"  class="table table-striped">
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
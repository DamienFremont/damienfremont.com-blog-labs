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

<h1>Sort</h1>
<form ng-controller="PersonSearchCtrl">

<!-- SORT -->
<nav class="text-center">

</nav>
<!-- SORT -->
<!-- CLEAR SORT -->
<!-- CONTENT -->
  <table id="table"  class="table">
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
<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="vendors/paging.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
<div class="container">

<h1>Page</h1>
<form ng-controller="PersonSearchCtrl">

<!-- PAGINATION -->
<nav class="text-center">
<div paging
  page="pageable.number + 1" 
  page-size="pageable.size" 
  total="pageable.totalPages"
  show-prev-next="true"
  hide-if-empty="true"
  paging-action="doChangePage('bar', page)">
</div>
</nav>

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
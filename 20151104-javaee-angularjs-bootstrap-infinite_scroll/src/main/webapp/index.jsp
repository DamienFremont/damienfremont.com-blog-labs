<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
<script src="webjars/angular-smart-table/${angular-smart-table.version}/dist/smart-table.js"></script>
<script src="webjars/ngInfiniteScroll/${ngInfiniteScroll.version}/build/ng-infinite-scroll.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">
<div class="container">
<h1>Infinite-Scroll</h1>

<!-- SCROLL -->
<div infinite-scroll="addMoreItems()">
    
<!-- CONTENT -->
<div class="list-group">
<div class="list-group-item" href="#" ng-repeat='i in items'>
  <h4 class="list-group-item-heading">
	{{i.title}}
  </h4>
  <p class="list-group-item-text">
    by {{i.author}} - Comments <span class="badge">{{i.num_comments}}</span>
  </p>
  <br>
    <a class="btn btn-default btn-xs" href="#">
      <span class="glyphicon glyphicon-share-alt"></span> Reply</a>
    <a class="btn btn-default btn-xs" href="#">
      <span class="glyphicon glyphicon-retweet"></span> Forward</a>     
    <a class="btn btn-default btn-xs" href="#">
      <span class="glyphicon glyphicon-star"></span> Like</a>
</div>
</div>
</div>

<!-- LOADING -->
<div ng-show='busy'>Loading data...</div>
</div>
</body>
</html>
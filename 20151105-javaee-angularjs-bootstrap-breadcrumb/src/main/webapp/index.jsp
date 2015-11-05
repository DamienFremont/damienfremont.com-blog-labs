<!DOCTYPE html>
<html ng-app="app">
<head>
<!-- LIBS CSS -->
<link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
<!-- LIBS JS -->
<script src="webjars/jquery/${jquery.version}/jquery.js"></script>
<script src="webjars/bootstrap/${bootstrap.version}/js/bootstrap.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
<script src="webjars/angularjs/${angularjs.version}/angular-route.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body ng-controller="MainCtrl">

<!-- MENU -->
<nav class="navbar navbar-default">
<div class="container-fluid">

  <!-- HEADER AND MOBILE BUTTON -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" 
      data-toggle="collapse" 
      data-target="#bs-example-navbar-collapse-1" 
      aria-expanded="true">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>
    
    <!-- LOGO -->
    <a class="navbar-brand" href="#">
      Breadcrumb</a>
  </div>
  
  <!-- MENU ITEMS -->
  <div class="navbar-collapse collapse" 
    id="bs-example-navbar-collapse-1" 
    aria-expanded="true">
    <ul class="nav navbar-nav">
    
    <!-- PAGE 1 -->
    <li class="active">
	  <a href="#/page1">
	   Page 1 <span class="sr-only">
	     (current)</span></a></li>
	   
     <!-- PAGE 2 -->
    <li class="dropdown">
      <a href="#/page2" class="dropdown-toggle" 
        data-toggle="dropdown" 
        role="button" 
        aria-haspopup="true" 
        aria-expanded="false">
       Page 2 <span class="caret"></span></a>

      <!-- PAGE 2 SUBMENU -->
      <ul class="dropdown-menu">
        <li><a href="#/page2/subpage">SubPage</a></li>
      </ul>
   </li>
   </ul>
  </div>
</div>
</nav>

<div class="container">

<!-- BREADCRUMB -->
<div ng-controller="BreadcrumbsController">
<ol class="breadcrumb" 
    ng-show="route.current.breadcrumbs">
  <li 
    ng-class="{active: $last}" 
    ng-repeat="breadcrumb in route.current.breadcrumbs">
    <a href="{{breadcrumb.href}}">
      {{breadcrumb.label}}
    </a>
  </li>
</ol>
</div>

<!-- VIEW/PAGE -->
<div ng-view></div>

</div>
</body>
</html>
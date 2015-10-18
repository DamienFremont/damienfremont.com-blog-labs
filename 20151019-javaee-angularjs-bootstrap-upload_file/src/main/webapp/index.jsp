<!DOCTYPE html> <!-- DON'T FORGET DOCTYPE OR THERE WILL BE .btn CLASS HEIGHT BUGS! https://github.com/twbs/bootstrap/issues/10482 -->
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
<script src="webjars/ng-file-upload/${ng-file-upload.version}/ng-file-upload.js"></script>
<!-- YOUR JS -->
<script src="app.js"></script>
</head>
<body>
  <div class="container">
	
	<h1>Upload Files</h1>
	
	<!-- FILES -->
	
	<form ng-controller="MyCtrl">
	    <h4>Multiples Files, one request</h4>
	    <button class="btn btn-primary" 
	    	ngf-select="uploadFiles($files)" 
	    	multiple 
	        accept="*">
	        <i class="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;Browse Files
	    </button>
	    <br>
	    <br>Files:
	    <ul>
	        <li class="uploadedfile" ng-repeat="f in files" style="font:smaller">
	            <i class="glyphicon glyphicon-file"></i> <span ng-class="{removed: f.removed}">{{f.name}}</span>
	            <!-- REMOVE -->
	            <button class="btn btn-danger btn-xs" ng-click="removeFile(f)" ng-hide="f.removed">
	              <i class="glyphicon glyphicon-remove"></i> Remove
	            </button>
	        </li>
	    </ul>
	    <div class="progress" ng-show="progress >= 0">
	      <div class="progress-bar" role="progressbar"
	        aria-valuenow="{{progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}}%">
            <span class="sr-only">{{progress}}% Complete</span>
            {{progress}}%
          </div>
	    </div>	    
	    {{errorMsg}}
    </form>
    
	<!-- PICTURE -->

    
  </div>
</body>
</html>
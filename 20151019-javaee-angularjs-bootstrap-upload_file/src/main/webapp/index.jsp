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
	
	<!-- FILE -->
	
   <form name="myForm" ng-controller="SubmitFileCtrl">
   <fieldset>
      <legend>Upload on form submit</legend>
      <br>Photo:
      <input type="file" 
        ngf-select 
        ng-model="picFile" name="file"    
        accept="image/*" 
        ngf-max-size="2MB"
        required>
      <i ng-show="myForm.file.$error.maxSize">File too large 
          {{picFile.size / 1000000|number:1}}MB: max 2M</i>
      <div class="panel panel-default">
        <div class="panel-body">
		  <img ng-show="myForm.file.$valid" ngf-thumbnail="picFile" class="thumb">
		  <button class="btn btn-danger btn-xs" 
	        ng-click="picFile = null" 
	        ng-show="picFile">
	        <i class="glyphicon glyphicon-remove"></i> Remove
	      </button>
          <button class="btn btn-success" 
            ng-disabled="!myForm.$valid" 
            ng-click="uploadPic(picFile)">
            <i class="glyphicon glyphicon-ok"></i> Submit
          </button>
	    </div>
      </div>
      <div class="alert alert-danger" ng-show="errorMsg">Upload Error!</div>
      <div class="alert alert-success" ng-show="picFile.result">Upload Successful.</div>
    </fieldset>
    </form>
	
	<!-- FILES -->
	
	<form ng-controller="MyCtrl">
    <fieldset>
      <legend>Multiples Files, one request</legend>
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
	            <button class="btn btn-danger btn-xs" 
	              ng-click="removeFile(f)" 
	              ng-hide="f.removed">
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
    </fieldset>
    </form>
    
	<!-- PICTURE -->

    
  </div>
</body>
</html>
<!DOCTYPE html>
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
	
	<!-- PICTURE FILE -->
	
   <form name="myForm" ng-controller="SubmitFileCtrl">
     <h1>Picture</h1>
     <p>Upload Picture on form submit, Alerts</p>
     <!-- BROWSE -->
	 <div class="form-group">
       <input type="file" 
         ngf-select 
         ng-model="picFile" name="file"    
         accept="image/*" 
         ngf-max-size="2MB"
         required>
         <i ng-show="myForm.file.$error.maxSize">File too large {{picFile.size / 1000000|number:1}}MB: max 2M</i>
     </div>
     <!-- PREVIEW -->
	 <div class="form-group">
	   <img class="thumb"
	     ng-show="myForm.file.$valid" 
	     ngf-thumbnail="picFile">
	   <button class="btn btn-danger btn-xs" 
         ng-click="picFile = null" 
         ng-show="picFile">
         <i class="glyphicon glyphicon-remove"></i> Remove
       </button>
     </div>
     <!-- SUBMIT -->
     <button class="btn btn-success" 
       ng-disabled="!myForm.$valid" 
       ng-click="uploadPic(picFile)">
       <i class="glyphicon glyphicon-ok"></i> Submit
     </button>
     <!-- ALERT -->
	 <p>
       <div class="alert alert-danger" ng-show="errorMsg">Upload Error!</div>
       <div class="alert alert-success" ng-show="picFile.result">Upload Successful.</div>
     </p>
   </form>
	
	<!-- FILES -->
	
    <form ng-controller="FilesCtrl">
      <h1>Files</h1>
      <p>Multiples Files, Progress Bars</p>
     <!-- BROWSE -->
	  <div class="form-group">
	    <button class="btn btn-primary" 
          ngf-select="uploadFiles($files)" 
          multiple 
	      accept="*">
	      <i class="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;Browse Files
	    </button>
	  </div>
	  Files:
	  <div class="uploadedfile" ng-repeat="f in files" style="font:smaller">
	    <!-- FILE -->
	    <i class="glyphicon glyphicon-file"></i><span ng-class="{removed: f.removed}">{{f.name}} {{f.$errorParam}}</span>
	    <!-- PROGRESS -->
	    <div class="progress" ng-show="f.progress >= 0">
	      <div class="progress-bar progress-bar-success" role="progressbar"
	        aria-valuenow="{{f.progress}}" aria-valuemin="0" aria-valuemax="100" 
	        style="width: {{f.progress}}%">
            <span class="sr-only">{{f.progress}}% Complete</span> {{f.progress}}%
          </div>
        </div>
	  </div>
	  {{errorMsg}}
    </form>
    
  </div>
</body>
</html>
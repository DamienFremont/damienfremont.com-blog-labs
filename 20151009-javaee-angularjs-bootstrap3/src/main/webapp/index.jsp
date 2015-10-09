<!DOCTYPE html >
<head>

  <!-- LIBS CSS -->
  <link rel="stylesheet" href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
  <link rel="stylesheet" href="styles/main.css">
  <!-- LIBS JS -->
  <script src="webjars/angularjs/${angularjs.version}/angular.js"></script>
  <script src="webjars/angularjs/${angularjs.version}/angular-resource.js"></script>
  <script src="webjars/angularjs/${angularjs.version}/angular-animate.js"></script>
  <script src="webjars/angular-ui-bootstrap/${angular-ui-bootstrap.version}/ui-bootstrap-tpls.js"></script>
  <!-- YOUR JS -->
  <script src="js/app.js"></script>
  <script src="js/controllers/ModalCtrl.js"></script>
  <script src="js/controllers/StatusCtrl.js"></script>
  <script src="js/services/StatusResource.js"></script>
</head>
<body>
  <div class="container" ng-app="ui.bootstrap.demo">
  
    <div>
      <div>
        <h1>Bootstrap Test</h1>
        <p>CSS button here...</p>
      <div class="bs-example" data-example-id="btn-variants">
          <button type="button" class="btn btn-default">Default</button>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-link">Link</button>
        </div>
      </div>
    </div>
    
    <div>
        <h1>AngularJs Test</h1>
        <p>Basic MVC here...</p>
        <p>Name : <input type="text" ng-model="name" placeholder="type your name here..."></p>
        <h3>Hello {{name}}</h3>
    </div>
    
    <div ng-controller="ModalDemoCtrl">
      <h1>AngularUI + Bootstrap JS Test</h1>
      <p>Bootstrap JS integration here...</p>
      <script type="text/ng-template" id="myModalContent.html">
        <div class="modal-header">
            <h3 class="modal-title">I'm a modal!</h3>
        </div>
        <div class="modal-body">
            <ul>
                <li ng-repeat="item in items">
                    <a href="#" ng-click="$event.preventDefault(); selected.item = item">{{ item }}</a>
                </li>
            </ul>
            Selected: <b>{{ selected.item }}</b>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="button" ng-click="ok()">OK</button>
            <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
        </div>
      </script>
      <button type="button" class="btn btn-default" ng-click="open()">Open me!</button>
      <button type="button" class="btn btn-default" ng-click="open('lg')">Large modal</button>
      <button type="button" class="btn btn-default" ng-click="open('sm')">Small modal</button>
      <button type="button" class="btn btn-default" ng-click="toggleAnimation()">Toggle Animation ({{ animationsEnabled }})</button>
      <div ng-show="selected">Selection from a modal: {{ selected }}</div>
    </div>

    <div ng-controller="StatusCtrl">
        <h1>JavaEE + AngularJs Rest client Test</h1>
        <p>REST call here...</p>
    </div>
  
</body>
</html>
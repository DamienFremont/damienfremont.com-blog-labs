'use strict';

app.controller('DatasCtrl', function($scope, $auth, Service) {

	// GET DATAS IF AUTH OK
  if ($auth.isAuthenticated()) {
    Service.get(function(obj) {
      $scope.content = obj.content;
    });
  }
});
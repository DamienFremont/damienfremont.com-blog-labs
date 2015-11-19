'use strict';

app.controller('HomeCtrl', function($scope, $auth, Service) {

	// GET DATAS IF AUTH OK
  if ($auth.isAuthenticated()) {
    $scope.message = "You are logged in!";
  } else {
	$scope.message = "You must login to access Datas.";	  
  }
});
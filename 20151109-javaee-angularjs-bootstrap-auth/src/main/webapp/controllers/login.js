'use strict';

app.controller('LoginCtrl', function($scope, $auth, $location, $route) {

	  $scope.emailLogin = function() {
		  $auth.login({email: $scope.email, password: $scope.password})
	      .then(function() {
//	        toastr.success('You have successfully signed in!');
	        $location.path('/');
	        $route.reload();
	      })
	      .catch(function(error) {
//	        toastr.error(error.data.message, error.status);
	      });
	  };
});
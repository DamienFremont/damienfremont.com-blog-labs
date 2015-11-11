'use strict';

app.controller('LoginCtrl', function($scope, $auth) {

  $scope.email = 'm';
  $scope.password = 'p';
  
  var user = {
    email : $scope.email,
    password : $scope.password
  };

  $auth.login(user).then(function(response) {
    // Redirect user here after a successful log in.
  }).catch(function(response) {
    // Handle errors here, such as displaying a notification
    // for invalid email and/or password.
  });
});
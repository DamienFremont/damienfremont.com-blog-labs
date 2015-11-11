'use strict';

app.controller('LoginCtrl', function($scope, $auth) {

  $scope.emailLogin = function() {
        $auth.login({ email: $scope.email, password: $scope.password })
          .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
          })
          .catch(function(response) {
            $scope.errorMessage = {};
            angular.forEach(response.data.message, function(message, field) {
              $scope.loginForm[field].$setValidity('server', false);
              $scope.errorMessage[field] = response.data.message[field];
            });
          });
      };
});
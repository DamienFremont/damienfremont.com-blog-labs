'use strict';

mySpeedyFleet.controller('NavbarController', function($scope, $location, LoggedUserService) {
  $scope.routeIs = function(routeName) {
    return $location.path().indexOf(routeName) !== -1;
  };
  $scope.openCp = function() {
    $location.url('/administration/profils');
  };
  $scope.openImmat = function() {
    $location.url('/' + LoggedUserService.loggedUser.utilisateur.contrat + '/immatriculations');
  };
  $scope.openDotat = function() {
    $location.url('/' + LoggedUserService.loggedUser.utilisateur.contrat + '/dotation');
  };
  $scope.openDashboard = function() {
    $location.url('/' + LoggedUserService.loggedUser.utilisateur.contrat + '/tableau-de-bord/' + new Date().getFullYear());
  };
});
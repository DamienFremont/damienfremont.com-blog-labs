'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
    return $resource('api/person/page');
});

app.controller('PersonSearchCtrl', function ($scope, Person) {

  // TODO url

  $scope.findAll = function(pageRequest) {
    Person.get(
      pageRequest,
      function(pageable) {
        $scope.pageable = pageable;
        $scope.items = pageable.content;
    });
  }
    
  $scope.doSort = function(sort) {
    $scope.findAll({
      sort : sort
    });
  }

  // INIT
  $scope.findAll({
      sort : 'id ASC'
  });

});

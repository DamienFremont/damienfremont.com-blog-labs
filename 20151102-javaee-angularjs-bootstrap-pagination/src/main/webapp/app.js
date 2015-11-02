'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource',
    'smart-table'
    ]);

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
    
  $scope.doChangePage = function(foo, page) {
    $scope.findAll({
      page : page,
      size : 10
    });
  }

  // INIT
  $scope.findAll({
    number : 0,
    size : 10
  });

});

'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource',
    'infinite-scroll'
    ]);

app.factory('Service', function($resource) {
    return $resource('api/message/page');
});

app.controller('MainCtrl', function ($scope, Service) {
  const itemsByPage = 20;
  var lastStart = 0;
  $scope.items = [];
  $scope.busy = false;

  // GET PAGE
  function getAPage(start, number) {
    $scope.busy = true;
  Service.get({
    page : 1+(start/number),
    size : number
    },
    function(pageable) {
      $scope.items = $scope.items.concat(pageable.content);
        lastStart = start+number;
        $scope.busy = false;
      });
  }

  
  // SCROLL
  
  $scope.addMoreItems = function() {
    getAPage(lastStart, itemsByPage);
  };
  
});

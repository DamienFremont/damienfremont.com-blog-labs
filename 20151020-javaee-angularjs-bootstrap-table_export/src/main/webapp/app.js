'use strict';

var app = angular.module(
  'app', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person');
});
app.factory('PersonCSV', function($resource) {
	  return 'api/person/csv';
});

app.controller('TableCtrl', function ($scope, Person, PersonCSV, $window) {

  Person.query(function(datas) {
	  $scope.items = datas;
  });
  
  $scope.downloadCSV = function() {
	  var url = PersonCSV;
      $window.open(url);
  }
});

app.controller('DataTableCtrl', function ($scope, Person) {

  Person.query(function(datas) {
    $scope.items = datas;
  });
	  
  $scope.add = function() {
	var nextId = $scope.items[$scope.items.length - 1].id + 1;
    $scope.items.push({
    	id: nextId
    })
  };
	  
  $scope.remove = function(data) {
    var i = $scope.items.indexOf(data);
    $scope.items.splice(i, 1);
  }
  
  $scope.update = function(data) {
	Person.save($scope.items ,function() {
  	  alert('updated!');
    }, function() {
      alert('error!');
    });
  };
  
  $scope.undo = function() {
    Person.query(function(datas) {
      $scope.items = datas;
    });
  }
  
});

app.directive('focus', function($timeout) {
  return {
  scope : {
   trigger : '@focus'
   },
   link : function(scope, element) {
   scope.$watch('trigger', function(value) {
    if (value === "true") {
     $timeout(function() {
     element[0].focus();
     });
    }
   });
     }
    };
   }
  ); 
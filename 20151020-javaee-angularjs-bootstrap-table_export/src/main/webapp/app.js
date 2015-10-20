'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource' ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/all');
});

//TABLE

app.factory('PersonCSV', function($resource) {
	  return 'api/person/all/csv';
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

// DATATABLE

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
  
  $scope.update = function() {
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
});

app.directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // view -> model
       elm.bind('blur', function() {
         scope.$apply(function() {
           ctrl.$setViewValue(elm.html());
         });
       });
       // model -> view
       ctrl.render = function(value) {
         elm.html(value);
       };
       elm.bind('keydown', function(event) {
         var esc = event.which == 27,
         el = event.target;
         if (esc) {
           ctrl.$setViewValue(elm.html());
           el.blur();
           event.preventDefault();
         }
       });
    }
  };
});

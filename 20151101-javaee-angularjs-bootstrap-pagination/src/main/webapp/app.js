'use strict';

var app = angular.module(
  'app', 
  [ 'ngResource',
    'bw.paging'
    ]);

app.factory('Person', function($resource) {
	  return $resource('api/person/page');
});

app.controller('PersonSearchCtrl', function ($scope, Person) {

  // TODO url
	
  Person.get({
        page : 0,
        size : 10,
      }, function(page) {
    		var size = page.totalPages;
//    	  var pages = [];
//    	  var isBig = size > 5;
//    	  var pageFirst = isBig ? () : 0;
//			for (var i = pFirst; i < pMax; i++) {
//				pages.push({
//					id : i,
//					url : 'xxx/'+i
//				});
//			  }
//		}
//    	  $scope.pages = pages;
	   	  $scope.pageable = page;
    	  $scope.items = page.content;
  });
  
});

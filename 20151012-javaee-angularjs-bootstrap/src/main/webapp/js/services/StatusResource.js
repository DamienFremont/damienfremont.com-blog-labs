'use strict';

myApp.factory('Status', function($resource) {
  return $resource('api/status', {
    userId : '@id'
  }, {});
});
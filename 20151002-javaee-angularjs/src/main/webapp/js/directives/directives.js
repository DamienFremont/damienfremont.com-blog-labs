'use strict';

mySpeedyFleet.directive("passwordVerify", function() {
  return {
    require : "ngModel",
    link : function(scope, element, attrs, ctrl) {
      var firstPassword = '#' + attrs.passwordVerify;
      element.add(firstPassword).on('keyup', function() {
        scope.$apply(function() {
          ctrl.$setValidity('passwordmatch', element.val() === $(firstPassword).val());
        });
      });
    }
  };
});

mySpeedyFleet.directive("complexityCheck", function() {
  return {
    require : "ngModel",
    link : function(scope, element, attrs, ctrl) {
      var valid = function(value) {
        var atLeast8Chars = (value.length >= 8);
        var atLeast1UpperChar = (value.replace(/[^A-Z]/g, "").length >= 1);
        var atLeast1LowerChar = (value.replace(/[^a-z]/g, "").length >= 1);
        var atLeast2Digits = (value.replace(/[^0-9]/g, "").length >= 2);
        return atLeast8Chars && atLeast1UpperChar && atLeast1LowerChar && atLeast2Digits;
      };
      element.on('keyup', function() {
        scope.$apply(function() {
          ctrl.$setValidity('complexity', valid(element.val()));
        });
      });
    }
  };
});

mySpeedyFleet.directive('secured', function($location) {
  return {
    restrict : 'C',
    link : function(scope, elem, attrs) {
      scope.$on('event:auth-loginRequired', function() {
        $('#loginModal').foundation('reveal', 'open');
      });
      scope.$on('event:auth-loginConfirmed', function() {
        $('#loginModal').foundation('reveal', 'close');
      });
    }
  };
});

mySpeedyFleet.directive('butterbar', [ '$rootScope', function($rootScope) {
  return {
    link : function(scope, element, attrs) {
      element.addClass('hide');
      $rootScope.$on('$routeChangeStart', function() {
        element.removeClass('hide');
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        element.addClass('hide');
      });
    }
  };
} ]);

'use strict';

mySpeedyFleet.factory('LoggedUserService', function() {
  return {
    loggedUser : {
      utilisateur : null
    },
    set : function(user) {
      this.loggedUser.utilisateur = user;
    },
    setGroupeCode : function(newValue) {
      this.loggedUser.utilisateur.contrat = newValue;
    }
  };
});

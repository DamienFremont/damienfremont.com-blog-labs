'use strict';

mySpeedyFleet.factory('UtilisateursResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/utilisateurs/:userId', {
    userId : '@id'
  }, {});
});

mySpeedyFleet.factory('CompteGroupesResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:id', {
    id : '@id'
  }, {});
});

mySpeedyFleet.factory('CompteGroupeStatsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/stats');
});

mySpeedyFleet.factory('CompteGroupeDotationsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:groupeCode/dotation-pneus');
});
mySpeedyFleet.factory('CompteGroupeDotationResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:groupeCode/dotation-pneu', {
    groupeCode : '@groupeCode'
  }, {});
});
mySpeedyFleet.factory('CompteGroupeDotationContactsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:groupeCode/dotation-pneu/contacts',
      {
        groupeCode : '@codeCompteGroupe'
      }, {});
});
mySpeedyFleet.factory('CompteGroupeDotationsContactsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:groupeCode/dotation-pneu-contacts',
      {}, {});
});
mySpeedyFleet.factory('CompteGroupeImmatsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:compteGroupeCode/immats');
});
mySpeedyFleet.factory('CompteGroupeAgencesResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/comptes-groupe/:compteGroupeCode/agences', {
    compteGroupeCode : '@codeCompteGroupe'
  }, {});
});
mySpeedyFleet.factory('CompteGroupeAgenceResource', function($resource, ConfigurationService) {
  return $resource(
      ConfigurationService.serverPrefix + '/resources/comptes-groupe/:compteGroupeCode/agence/:agenceCode', {
        compteGroupeCode : '@codeCompteGroupe',
        agenceCode : '@agenceCode'
      }, {});
});
mySpeedyFleet.factory('AgenceImmatsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:compteGroupeCode/agence/:agenceCode/immats');
});
mySpeedyFleet.factory('ImmatriculationResource',
    function($resource, ConfigurationService) {
      return $resource(ConfigurationService.serverPrefix
          + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat');
    });
mySpeedyFleet.factory('CompteDotationResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupeCode/agence/:compteCode/dotation-pneu', {
    groupeCode : '@groupeCode',
    compteCode : '@compteCode'
  }, {});
});
mySpeedyFleet.factory('CompteDotationContactsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:compteGroupeCode/agence/:agenceCode/dotation-pneu/contacts', {
    compteGroupeCode : '@codeCompteGroupe',
    agenceCode : '@agenceCode'
  }, {});
});

mySpeedyFleet.factory('CompteImmatDotationResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:compteGroupeCode/agence/:agenceCode/immat/:immat/dotation-pneu', {
    compteGroupeCode : '@compteGroupeCode',
    agenceCode : '@agenceCode',
    immat : '@immat'
  }, {});
});

mySpeedyFleet.factory('CompteImmatPrestationsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:compteGroupeCode/agence/:agenceCode/immat/:immat/prestations', {
    compteGroupeCode : '@compteGroupeCode',
    agenceCode : '@agenceCode',
    immat : '@immat'
  }, {});
});
mySpeedyFleet.factory('ImmatGardienResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat/gardiennage', {
    groupe : '@groupe',
    compte : '@compte',
    immat : '@immat'
  }, {});
});
mySpeedyFleet.factory('ImmatStockageResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat/gardiennage/centreDeStockage', {
    groupe : '@groupe',
    compte : '@compte',
    immat : '@immat'
  }, {});
});

mySpeedyFleet.factory('CurrentUserResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/compte');
});

mySpeedyFleet.factory('DotationsResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/dotation-pneus');
});
mySpeedyFleet.factory('DotationDemandeResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/dotation-pneus/demandes');
});
mySpeedyFleet.factory('DotationConsoResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/dotation-pneus/conso');
});

mySpeedyFleet.factory('DonneesComplementairesLibellesResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix + '/resources/donnees-complementaires-libelles');
});
mySpeedyFleet.factory('ImmatDonneesResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat/donnee-complementaires', {
    groupe : '@codeCompteGroupe',
    compte : '@agenceCode',
    immat : '@immat'
  }, {});
});
mySpeedyFleet.factory('DonneesComplementaireResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat/donnee-complementaire/:id', {
    groupe : '@codeCompteGroupe',
    compte : '@agenceCode',
    immat : '@immat',
    id : '@id'
  }, {});
});
mySpeedyFleet.factory('ImmatVehiculeResource', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/comptes-groupe/:groupe/agence/:compte/immat/:immat/vehicule', {
    groupe : '@codeCompteGroupe',
    compte : '@agenceCode',
    immat : '@immat'
  }, {});
});

mySpeedyFleet.factory('ImmatriculationResourceHelper', function($resource, ImmatriculationResource,
    ImmatVehiculeResource, CompteImmatPrestationsResource, ImmatDonneesResource) {
  var groupeCode = null;
  var compteCode = null;
  var immatImmat = null;
  var immat = null;
  var vehicule = null;
  return {
    construct : function(newGroupeCode, newCompteCode, newImmatImmat) {
      groupeCode = newGroupeCode;
      compteCode = newCompteCode;
      immatImmat = newImmatImmat;
      immat = null;
      vehicule = null;
      return this;
    },

    getImmat : function(success, error) {
      if (immat == null)
        immat = ImmatriculationResource.get({
          groupe : groupeCode,
          compte : compteCode,
          immat : immatImmat
        }, success, error);
      return immat;
    },
    setImmat : function(newValue, success) {
      if (newValue != null) {
        immat = new ImmatriculationResource({
          'immat' : newValue.immat
        });
        immatImmat = newValue.immat;
        immat.$save({
          groupe : groupeCode,
          compte : compteCode
        }, success);
      }
    },

    getVehicule : function() {
      if (vehicule == null)
        vehicule = ImmatVehiculeResource.get({
          groupe : groupeCode,
          compte : compteCode,
          immat : immatImmat
        });
      return vehicule;
    },
    setVehicule : function(newValue, success) {
      if (newValue != null) {
        vehicule = new ImmatVehiculeResource(newValue);
        vehicule.$save({
          groupe : groupeCode,
          compte : compteCode,
          immat : immatImmat
        }, success);
      }
    },
    getDonneesArray : function(sucess) {
      return ImmatDonneesResource.query({
        groupe : groupeCode,
        compte : compteCode,
        immat : immatImmat
      }, function(datas) {
        sucess(datas);
      });
    },
    getPrestationArray : function() {
      return CompteImmatPrestationsResource.query({
        compteGroupeCode : groupeCode,
        agenceCode : compteCode,
        immat : immatImmat
      });
    }
  };
});

mySpeedyFleet.factory('AllComptesResource', function($resource, ConfigurationService) {
  return {
    ajax : {
      url : ConfigurationService.serverPrefix + "/resources/comptes-groupe",
      data : function(term, page) {
        return {
          'like' : term
        };
      },
      results : function(data, page) {
        var comptesSelect = [];
        for ( var int = 0; int < data.length; int++) {
          var compte = data[int];
          compte.id = int;
          compte.text = compte.code + ", " + compte.raisonSociale + ", " + compte.dateDeCreation;
          comptesSelect.push(compte);
        }
        return {
          results : comptesSelect
        };
      }
    }
  };
});

mySpeedyFleet.factory('GroupeCompteFleetSize', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/groupes/:groupe/comptes/:compte/vehicules/count', {
    groupe : '@groupe',
    compte : '@compte'
  }, {});
});

mySpeedyFleet.factory('GroupeFleetSize', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/groupes/:groupe/vehicules/count', {
    groupe : '@groupe'
  }, {});
});

mySpeedyFleet.factory('GroupeFamilleCA', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/:year/groupes/:groupe/familles/:famille/ca', {
    year : '@year',
    groupe : '@groupe',
    famille : '@famille'
  }, {});
});

mySpeedyFleet.factory('GroupeCompteFamilleCA', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/:year/groupes/:groupe/comptes/:compte/familles/:famille/ca', {
    year : '@year',
    groupe : '@groupe',
    compte : '@compte',
    famille : '@famille'
  }, {});
});

mySpeedyFleet.factory('GroupePneumatiquesGardiennage', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/groupes/:groupe/familles/pneumatiques/gardiennage', {
    groupe : '@groupe'
  }, {});
});

mySpeedyFleet.factory('GroupeComptePneumatiquesGardiennage', function($resource, ConfigurationService) {
  return $resource(ConfigurationService.serverPrefix
      + '/resources/dashboard/groupes/:groupe/comptes/:compte/familles/pneumatiques/gardiennage', {
    groupe : '@groupe',
    compte : '@compte'
  }, {});
});

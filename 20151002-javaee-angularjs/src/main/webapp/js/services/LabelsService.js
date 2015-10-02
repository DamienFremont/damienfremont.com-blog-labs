'use strict';

mySpeedyFleet.service('LabelsService', function($resource, ConfigurationService) {
  function _getLabelFromResourceForCode(labelResource, code) {
    var result = code;
    angular.forEach(labelResource, function(entry, key) {
      if (code === entry.code) {
        result = entry.libelle;
        return;
      }
    });
    return result;
  };
  var fonctions = $resource(ConfigurationService.serverPrefix + '/resources/fonctions').query();
  this.getFonctionLabelForCode = function(codeFonction) {
    return _getLabelFromResourceForCode(fonctions, codeFonction);
  };
  var saisons = $resource(ConfigurationService.serverPrefix + '/resources/saisons').query();
  this.getSaisonLabelForCode = function(codeSaison) {
    return _getLabelFromResourceForCode(saisons, codeSaison);
  };
  var familles = [ {
    "code" : "pieces-techniques",
    "libelle" : "Pièces Techniques"
  }, {
    "code" : "freinage",
    "libelle" : "Freinage"
  }, {
    "code" : "pneumatiques",
    "libelle" : "Pneumatiques"
  }, {
    "code" : "revisions-entretien",
    "libelle" : "Révisions / Entretien"
  }, {
    "code" : "vitrage",
    "libelle" : "Vitrage"
  } ];
  this.getFamilleLabelForCode = function(code) {
    return _getLabelFromResourceForCode(familles, code);
  };
});

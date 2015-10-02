'use strict';

var mySpeedyFleet = angular.module('mySpeedyFleet', [ 'ngResource', 'ui', 'http-auth-interceptor', 'infinite-scroll',
    'ngUpload' ]);

var accueil = {
  href : '#/',
  label : 'Accueil'
};
var administration = {
  href : '#/administration/profils',
  label : 'Administration'
};
var nouveau = {
  label : 'Nouveau'
};
var importer = {
  label : 'Import'
};
var profil = {
  label : 'Profil'
};
var monCompte = {
  href : '#/compte',
  label : 'Mon Compte'
};
var activation = {
  label : 'Activation'
};
var parc = {
  label : 'Parc'
};
var dotations = {
  label : 'Dotations pneus'
};
var groupe = {
  label : 'Compte-Groupe'
};
var compte = {
  label : 'Compte'
};
var immat = {
  label : 'Immatriculation'
};

mySpeedyFleet.config(function($routeProvider) {
  $routeProvider
  // user list
  .when('/administration/profils', {
    controller : 'AllUsersController',
    templateUrl : 'views/administration/profils.html',
    breadcrumbs : [ accueil, administration ]
  })
  // user details
  .when('/administration/profils/nouveau', {
    controller : 'CreateUserController',
    templateUrl : 'views/administration/profils-nouveau.html',
    breadcrumbs : [ accueil, administration, nouveau ]
  }).when('/administration/profils/:userId', {
    controller : 'EditUserController',
    templateUrl : 'views/administration/profils-edition.html',
    breadcrumbs : [ accueil, administration, profil ]
  // user account
  }).when('/compte', {
    controller : 'CompteController',
    templateUrl : 'views/compte-activation.html',
    breadcrumbs : [ accueil, monCompte ]
  }).when('/compte/activation', {
    controller : 'CompteActivationController',
    templateUrl : 'views/compte-activation.html',
    breadcrumbs : [ accueil, monCompte, activation ]
  }).when('/inscription', {
    controller : 'ContactController',
    templateUrl : 'views/inscription.html'
  })
  // immatriculations list
  .when('/:groupeCode/immatriculations', {
    controller : 'ImmatSearchController',
    templateUrl : 'views/immatriculations.html',
    breadcrumbs : [ accueil, parc ]
  }).when('/:groupeCode/immatriculations/all', {
    controller : 'ImmatListController',
    templateUrl : 'views/immatriculations-list.html',
  }).when('/:groupeCode/immatriculations/compte/:compteCode', {
    controller : 'ImmatListController',
    templateUrl : 'views/immatriculations-list.html',
    breadcrumbs : [ accueil, parc ]
  })
  // immatriculation details
  .when('/:groupeCode/immatriculations/compte/:compteCode/nouveau', {
    controller : 'ImmatCreateController',
    templateUrl : 'views/immatriculation-details.html',
  }).when('/:groupeCode/immatriculations/import', {
    controller : 'ImmatImportController',
    templateUrl : 'views/immatriculation-import.html',
  }).when('/:groupeCode/immatriculations/compte/:compteCode/:immatImmat', {
    controller : 'ImmatDetailsController',
    templateUrl : 'views/immatriculation-details.html',
  }).when('/:groupeCode/immatriculations/compte/:compteCode/:immatImmat/edition', {
    controller : 'ImmatUpdateController',
    templateUrl : 'views/immatriculation-details.html',
  })
  // dotation validation
  .when('/immatriculations/dotationpneu/validation', {
    controller : 'DotationValidationController',
    templateUrl : 'views/dotationpneu-validation.html',
    breadcrumbs : [ accueil, dotations ]
  })
  // dotation details
  .when('/:groupeCode/dotation', {
    controller : 'DotationEditionController',
    templateUrl : 'views/dotationpneu-edition.html',
    breadcrumbs : [ accueil, dotations, groupe ]
  }).when('/:groupeCode/dotation/compte/:compteCode', {
    controller : 'DotationEditionCompteController',
    templateUrl : 'views/dotationpneu-edition.html',
    breadcrumbs : [ accueil, dotations, compte ]
  }).when('/:groupeCode/dotation/compte/:compteCode/immat/:immatImmat', {
    controller : 'DotationEditionImmatController',
    templateUrl : 'views/dotationpneu-edition.html',
    breadcrumbs : [ accueil, dotations, immat ]
  })
  // dotation list
  .when('/:groupeCode/dotations', {
    controller : 'DotationSearchController',
    templateUrl : 'views/dotationpneu-search.html',
    breadcrumbs : [ accueil, dotations ]
  })
  //
  .when('/:groupeCode/tableau-de-bord/:year', {
    controller : 'DashboardController',
    templateUrl : 'views/myDashboard.html'
  }).when('/:groupeCode/tableau-de-bord/:year/groupe', {
    controller : 'DashboardGroupeController',
    templateUrl : 'views/dashboardGroupeCompte.html'
  }).when('/:groupeCode/tableau-de-bord/:year/groupe/famille/pneumatiques', {
    controller : 'DashboardGroupeComptePneumatiquesController',
    templateUrl : 'views/dashboardGroupeComptePneumatiques.html'
  }).when('/:groupeCode/tableau-de-bord/:year/groupe/famille/:famille', {
    controller : 'DashboardGroupeCompteFamilleController',
    templateUrl : 'views/dashboardGroupeCompteFamille.html'
  }).when('/:groupeCode/tableau-de-bord/:year/compte/:compteCode', {
    controller : 'DashboardGroupeCompteController',
    templateUrl : 'views/dashboardGroupeCompte.html'
  }).when('/:groupeCode/tableau-de-bord/:year/compte/:compteCode/famille/pneumatiques', {
    controller : 'DashboardGroupeComptePneumatiquesController',
    templateUrl : 'views/dashboardGroupeComptePneumatiques.html'
  }).when('/:groupeCode/tableau-de-bord/:year/compte/:compteCode/famille/:famille', {
    controller : 'DashboardGroupeCompteFamilleController',
    templateUrl : 'views/dashboardGroupeCompteFamille.html'
  })
  // other
  .otherwise({
    templateUrl : 'views/home.html',
    breadcrumbs : [ accueil ]
  });
});

mySpeedyFleet.filter('activationLevelValueFilter', function() {
  return function(input) {
    var label = input;
    switch (input) {
    case 'L1_VALIDA':
      label = 'A valider';
      break;
    case 'L2_ACTIVA':
      label = 'En attente';
      break;
    case 'L3_ACTIVE':
      label = 'Activé';
      break;
    case 'L4_DESACT':
      label = 'Désactivé';
      break;
    case 'L5_SUPPRI':
      label = 'Supprimé';
      break;
    }
    return label;
  };
});

mySpeedyFleet.filter('activationLevelClassFilter', function() {
  return function(input) {
    var label = input;
    switch (input) {
    case 'L1_VALIDA':
      label = 'alert';
      break;
    case 'L2_ACTIVA':
      label = '';
      break;
    case 'L3_ACTIVE':
      label = 'success';
      break;
    case 'L4_DESACT':
      label = 'alert';
      break;
    case 'L5_SUPPRI':
      label = 'secondary';
      break;
    }
    return label;
  };
});

mySpeedyFleet.filter('roleFilter', function() {
  return function(input) {
    var label = input;
    switch (input) {
    case 'CHEF_DE_PARC':
      label = 'Chef de parc';
      break;
    case 'ADV':
      label = 'Administration des ventes';
      break;
    }
    return label;
  };
});

mySpeedyFleet.filter('fonctionCodeFilter', function(LabelsService) {
  return function(input) {
    return LabelsService.getFonctionLabelForCode(input);
  };
});

mySpeedyFleet.filter('gardiennageSaisonFilter', function(LabelsService) {
  return function(input) {
    return LabelsService.getSaisonLabelForCode(input);
  };
});

mySpeedyFleet.filter('prestationFamilleFilter', function(LabelsService) {
  return function(input) {
    return LabelsService.getFamilleLabelForCode(input);
  };
});

mySpeedyFleet.filter('caCurrency', function() {
  return function(input) {
    var c = '2';
    var t = ' ';
    var n = input, //
    s = n < 0 ? "-" : "", //
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", // 
    j = (j = i.length) > 3 ? j % 3 : 0; //
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)+ ' €';
  };
});

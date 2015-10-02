'use strict';

mySpeedyFleet.factory('ConfigurationService', function() {
  return {
    // DEV
    serverPrefix : "/speedyfleet-server"
    // PREPROD
    // serverPrefix : "https://my-preprod.speedyfleet.fr/api/speedyfleet-server"
    // PROD
    // serverPrefix : "https://my.speedyfleet.fr/api/speedyfleet-server"
  };
});

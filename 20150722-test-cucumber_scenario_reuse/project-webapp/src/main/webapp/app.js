
angular.module('personApp', ['ngRoute', 'personServices'])
  .controller('PersonListController', ['$scope', 'Person', function($scope, Person) {
    var personList = this;
    personList.items = Person.readAll();
 
    personList.add = function() {
      personList.items.push({name:personList.name});
      Person.create(personList.name);
      personList.name = '';
    };
 
  }]);
const phonebook = angular.module('phonebook', ['ngRoute']);

phonebook.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .when('/editor', {
      templateUrl: 'views/editor.html',
      controller: 'editorController'
    })
    .when('/editor/:name/:number', {
      templateUrl: 'views/editor.html',
      controller: 'editorController',
    });
}]);
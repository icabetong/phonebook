
phonebook.controller('mainController', ['$scope', 'contactsService', function($scope, contactsService) {
  $scope.contacts = contactsService.contacts;
}]);

phonebook.controller('editorController', ['$scope', '$location', '$routeParams', 'contactsService', function($scope, $location, $routeParams, contactsService) {
    $scope.name = $routeParams.name || "";
    $scope.number = $routeParams.number || "";

    $scope.submit = function() {
      if ($routeParams.name && $routeParams.number) {
        console.log($scope.name);
        contactsService.update({ name: $scope.name, number: $scope.number });
      } else {
        console.log('insert');
        contactsService.add({ name: $scope.name, number: $scope.number });
      }
      $location.path('/');
    }

    $scope.remove = function() {
      contactsService.remove({ name: $scope.name, number: $scope.number });
      $location.path('/');
    }
}])
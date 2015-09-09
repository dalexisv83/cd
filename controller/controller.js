angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    $scope.portfolioArray = data;
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.checkChange = getChecked($scope.connectionArray);
}]);

angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    $scope.portfolioArray = data;
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.deviceArray = getDevices($scope.portfolioArray);
    $scope.changeDevices = getCheckedDevices($scope.deviceArray);
    $scope.changeConnections = getCheckedConnections($scope.connectionArray);
}]);

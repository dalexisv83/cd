angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    $scope.portfolioArray = data;
    $scope.receiverArray = receiverData;
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.deviceArray = getDevices($scope.portfolioArray);
    $scope.receiverConnections = getRecConnections($scope.optionSel);
}]);
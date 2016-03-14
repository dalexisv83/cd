angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    $scope.portfolioArray = data;
    $scope.receiverArray = receiverData;
    $scope.connectionArray = getItems($scope.portfolioArray, 'connection');
    $scope.deviceArray = getItems($scope.portfolioArray, 'device');
    $scope.deviceLegend = deviceLgnd;
    $scope.connectionLegend = connectionLgnd;
    $scope.instructionLegend = instructionLgnd;
    $scope.notesLegend = notesLgnd;
}]);
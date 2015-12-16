angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    'use strict';
    $scope.portfolioArray = data;
    $scope.receiverArray = receiverData;
    $scope.connectionArray = getData($scope.portfolioArray,'connection');
    $scope.deviceArray = getData($scope.portfolioArray,'device');
    $scope.deviceLegend = deviceLgnd;
    $scope.connectionLegend = connectionLgnd;
    $scope.instructionLegend = instructionLgnd;
    $scope.notesLegend = notesLgnd;
}]);
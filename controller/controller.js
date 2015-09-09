angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', function($scope) {
    $scope.portfolioArray = data;
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.checkChange = function(connections) {
        var checked = [];
        for (var t in connections) {
            if (connections[t].on === true) {
                pushUnique(connections[t].name, checked);
            }
        }
        checked.sort();
        return checked;
    };
}]);

(function(angular) {
    'use strict';
    var cablingDiagram = angular.module('cablingDiagram', []);
    cablingDiagram.filter('matchChecked', function() {
        return function(a, origArr) {
            var checkedArr = getChecked(origArr);
            if (checkedArr.length < 1)
                return a;
            var c = JSON.stringify(checkedArr);
            var matches = [];
            angular.forEach(a, function(value, key) {
                value.connection.sort();
                var b = JSON.stringify(value.connection);
                if (b == c)
                    matches.push(value);
            })
            return matches;
        };
    })
    cablingDiagram.controller('cablingDiagramController', ['$scope', function($scope) {
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
})(window.angular);

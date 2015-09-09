(function(angular) {
    'use strict';
    var cablingDiagram = angular.module('cablingDiagram', []);
    cablingDiagram.filter('matchConnections', function() {
        return function(a, origArr) {
            var checkedArr = getCheckedConnections(origArr);
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
    cablingDiagram.filter('matchDevices', function() {
        return function(a, origArr) {
            var checkedArr = getCheckedDevices(origArr);
            // if (checkedArr.length < 1)
            //     return a;
            var c = JSON.stringify(checkedArr);
            var matches = [];
            angular.forEach(a, function(value, key) {
                value.device.sort();
                var b = JSON.stringify(value.device);
                if (b == c)
                    matches.push(value);
            })
            return matches;
        };
    })
})(window.angular);

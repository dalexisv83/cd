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
})(window.angular);

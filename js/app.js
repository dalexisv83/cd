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
    cablingDiagram.filter('removeDisabled', function() {
        return function(a, origArr) {
            var disabledArr = getDisabledConnections(origArr);
            if (disabledArr.length < 1)
                return a;
            var matches = [];
            angular.forEach(a, function(value, key) {
                angular.forEach(value.connection, function(connection, key) {
                    if (jQuery.inArray(connection, disabledArr) == -1)
                        pushUnique(value, matches);
                })
            })
            return matches;
        };
    })
    cablingDiagram.filter('matchDevices', function() {
        return function(a, origArr) {
            var checkedArr = getCheckedDevices(origArr);
            // if (checkedArr.length < 1)
            //     return a;
            checkedArr.sort();
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
    cablingDiagram.filter('matchReceiverConnections', function() {
        return function(a, optSel) {
            if ((optSel == "") || (optSel == undefined)) {
                angular.forEach(a, function(value, key) {
                    value.disabled = false;
                })
                return a;
            }
            var c = getRecConnections(JSON.parse(optSel));
            angular.forEach(a, function(value, key) {
                value.disabled = false;
                if (jQuery.inArray(value.name, c) == -1) {
                    value.disabled = true;
                }
            })
            return a;
        };
    })
})(window.angular);

(function(angular) {
    'use strict';
    var cablingDiagram = angular.module('cablingDiagram', [], function($compileProvider) {
    // configure new 'compile' directive by passing a directive
    // factory function. The factory function injects the '$compile'
    $compileProvider.directive('compile', function($compile) {
        // directive factory creates a link function
        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    // watch the 'compile' expression for changes
                    return scope.$eval(attrs.compile);
                },
                function(value) {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                }
            );
        };
    });
});
    cablingDiagram.filter('matchConnections', function() {
        return function(a, origArr) {
            var checkedArr = getCheckedConnections(origArr);
            if (checkedArr.length < 1)
                return a;
            var c = JSON.stringify(checkedArr);
            var matches = [];
            angular.forEach(a, function(value, key) {
                value.connection.sort();
                var b = JSON.stringify(unique(value.connection));
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
                        if (!anyMatchInArray(value.connection, disabledArr))
                            pushUnique(value, matches);
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
            var c = optSel.compatible;
            angular.forEach(a, function(value, key) {
                value.disabled = false;
                if (c[value.name] != true) {
                    value.disabled = true;
                    value.on = false; // unchecks disabled connections. Maybe filter should ignore and keep users input?
                }
            })
            return a;
        };
    })
    cablingDiagram.filter('spcToHyphen', function() {
        return function(input) {
            if (input) {
                return input.replace(/\s+/g, '-').replace("(", '').replace(")", '');
            }
        }
    })
    cablingDiagram.filter('convert', function() {
        return function(input, obj) {
            if (input) {
                return obj[input];
            }
        }
    })
    cablingDiagram.filter('ternary', function() {
        return function(input, ifNot) {
            if (input) {
                return input;
            } else {
                return ifNot;
            }
        }
    })
    cablingDiagram.directive('magnify', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (jQuery.fn.imagezoomsl) {
                    var props = eval('({' + attrs.magnify + '})');
                    $(element).imagezoomsl(props);
                }
            }
        };
    });
})(window.angular);
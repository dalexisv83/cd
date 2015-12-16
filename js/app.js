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
    
    //filters
    cablingDiagram.filter('matchConnections', function() {
        return function(items, origArr) {
            var checkedArr = getDataStatus(origArr,'on'),
            json_str,            
            matches = [];    
            if (checkedArr.length < 1){
                return items;
            }            
            json_str = JSON.stringify(checkedArr);
             /*jslint unparam: true*/
            angular.forEach(items, function(value, key) {
                value.connection.sort();
                var json_str_conn = JSON.stringify(unique(value.connection));
                if (json_str_conn === json_str){
                    matches.push(value);
                }
            });
            
            return matches;
        };
    }).filter('removeDisabled', function() {
        return function(items, origArr) {
            var disabledArr = getDataStatus(origArr,'disabled'),
            matches = [];        
            if (disabledArr.length < 1){
                return items;
            }
            /*jslint unparam: true*/
            angular.forEach(items, function(value, key) {
                if (!anyMatchInArray(value.connection, disabledArr)){
                    pushUnique(value, matches);
                }
            });
            return matches;
        };
    }).filter('matchDevices', function() {
        return function(items, origArr) {
            var checkedArr = getDataStatus(origArr,'on'),
            json_str,
            matches = [];
            checkedArr.sort();            
            json_str = JSON.stringify(checkedArr);  
             /*jslint unparam: true*/
            angular.forEach(items, function(value, key) {
                value.device.sort();
                var json_str_device = JSON.stringify(value.device);
                if (json_str_device === json_str){
                    matches.push(value);
                }
            });
            return matches;
        };
    }).filter('matchReceiverConnections', function() {
        return function(items, optSel) {
            if ((optSel === "") || (optSel === undefined)) {
                 /*jslint unparam: true*/
                angular.forEach(items, function(value, key) {
                    value.disabled = false;
                });
                return items;
            }
            var compatibles = optSel.compatible;
            angular.forEach(items, function(value, key) {
                value.disabled = false;
                if (compatibles[value.name] !== true) {
                    value.disabled = true;
                    value.on = false; // unchecks disabled connections. Maybe filter should ignore and keep users input?
                }
            });
            return items;
        };
    }).filter('spcToHyphen', function() {
        return function(input) {
            if (input) {
                return input.replace(/\s+/g, '-').replace("(", '').replace(")", '').replace("/", '-');
            }
        };
    }).filter('convert', function() {
        return function(input, obj) {
            if (input) {
                return obj[input];
            }
        };
    }).filter('ternary', function() {
        return function(input, ifNot) {
            if (input) {
                return input;
            } 
            return ifNot;            
        };
    }).directive("ngWindowPie", ['$timeout', function($timeout) {       
        /*jslint unparam: true*/
        return function(scope, element, attrs) {
            if (window.PIE) {
                $timeout(function() {
                    window.PIE.attach(angular.element(element)[0]);
                });
            }
        };
    }]).directive('zoom', function() {
        /*jslint unparam: true*/
        return {
            restrict: 'A',            
            link: function(scope, element, attrs) {
                 /*jslint unparam: true*/
                if (jQuery.prototype.easyZoom) {
                    // Instantiate EasyZoom plugin
                    var $easyzoom = $(element).easyZoom();
                    // Get the instance API                   
                    $easyzoom.data(element);
                }
            }
        };
    });
}(window.angular));
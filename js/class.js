var pushUnique = function(item, array) {
    'use strict';
    if ((item !== "") && (jQuery.inArray(item, array) === -1)) {
        array.push(item);
        return true;
    }
    return false;
};

var unique = function (list) {
    'use strict';
    var result = [];
    /*jslint unparam: true*/
    $.each(list, function(i, e) {
        if ($.inArray(e, result) === -1){ 
            result.push(e);
        }
    });
    return result;
};

var getData = function(data,key_to_find) {
    'use strict';
    var oneEach = [],
    data_key,
    oneEach_key,
    conn_key,
    techObject,
    arr = [];
    
    for (data_key in data) {
        if (data.hasOwnProperty(data_key)) {
            for (conn_key in data[data_key][key_to_find]) {
                if (data[data_key][key_to_find].hasOwnProperty(conn_key)) {
                    pushUnique(data[data_key][key_to_find][conn_key], oneEach);
                }
            }
        }
    }
    for (oneEach_key in oneEach) {
        if (oneEach.hasOwnProperty(oneEach_key)){
            techObject = {
                name: oneEach[oneEach_key],
                disabled: false,
                on: false
            };
            arr.push(techObject);
        }
    }
    return arr;
};



var getDataStatus = function(data,status){
    'use strict';
    var matched_status = [],
    key;
    for (key in data) { 
        if (data.hasOwnProperty(key)){
            if (data[key][status]) {            
                pushUnique(data[key].name, matched_status);
            }
        }
    }
    return matched_status;
};


var anyMatchInArray = function (target, toMatch) {
    "use strict";
    var found, 
    targetMap, 
    i, 
    len, 
    cur;

    found = false;
    targetMap = {};

    // Put all values in the `target` array into a map, where
    //  the keys are the values from the array
    for (i = 0, len = target.length; i < len; i = i + 1) {
        cur = target[i];
        targetMap[cur] = true;
    }

    // Loop over all items in the `toMatch` array and see if any of
    //  their values are in the map from before
    for (i = 0, len = toMatch.length; !found && (i < len); i = i + 1) {
        cur = toMatch[i];
        found = !!targetMap[cur];
        // If found, `targetMap[cur]` will return true, otherwise it
        //  will return `undefined`...that's what the `!!` is for
    }

    return found;
};
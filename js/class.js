pushUnique = function(item, array) {
    'use strict';
    if ((item != "") && (jQuery.inArray(item, array) == -1)) {
        array.push(item);
        return true;
    }
    return false;
};

unique = function (list) {
    'use strict';
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) {
            result.push(e);
        }
    });
    return result;
};

getConnections = function(data) {
    'use strict';
    var oneEach = [];
    var arr = [];
    for (n in data) {
        for (k in data[n].connection) {
            pushUnique(data[n].connection[k], oneEach);
        }
    }
    for (u in oneEach) {
        arr[u] = {
            name: oneEach[u],
            disabled: false,
            on: false
        };
    }
    return arr;
};

getDevices = function(data) {
    'use strict';
    var oneEach = [];
    var arr = [];
    for (n in data) {
        for (k in data[n].device) {
            pushUnique(data[n].device[k], oneEach);
        }
    }
    for (u in oneEach) {
        arr[u] = {
            name: oneEach[u],
            disabled: false,
            on: false
        };
    }
    return arr;
};

getCheckedConnections = function(connections) {
    'use strict';
    var checked = [];
    for (t in connections) {
        if (connections[t].on === true) {
            pushUnique(connections[t].name, checked);
        }
    }
    return checked;
};

getDisabledConnections = function(connections) {
    'use strict';
    var disabled = [];
    for (t in connections) {
        if (connections[t].disabled === true) {
            pushUnique(connections[t].name, disabled);
        }
    }
    return disabled;
};

getCheckedDevices = function(devices) {
    'use strict';
    var checked = [];
    for (t in devices) {
        if (devices[t].on === true) {
            pushUnique(devices[t].name, checked);
        }
    }
    return checked;
};

var anyMatchInArray = function (target, toMatch) {
    "use strict";

    var found, targetMap, i, j, cur;

    found = false;
    targetMap = {};

    // Put all values in the `target` array into a map, where
    //  the keys are the values from the array
    for (i = 0, j = target.length; i < j; i++) {
        cur = target[i];
        targetMap[cur] = true;
    }

    // Loop over all items in the `toMatch` array and see if any of
    //  their values are in the map from before
    for (i = 0, j = toMatch.length; !found && (i < j); i++) {
        cur = toMatch[i];
        found = !!targetMap[cur];
        // If found, `targetMap[cur]` will return true, otherwise it
        //  will return `undefined`...that's what the `!!` is for
    }

    return found;
};
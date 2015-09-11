pushUnique = function(item, array) {
    if ((item != "") && (jQuery.inArray(item, array) == -1)) {
        array.push(item);
        return true;
    }
    return false;
}

getConnections = function(data) {
    var oneEach = [];
    var arr = [];
    for (var n in data) {
        for (var k in data[n]["connection"]) {
            pushUnique(data[n]["connection"][k], oneEach);
        }
    }
    for (var u in oneEach) {
        var techObject = {
            name: oneEach[u],
            disabled: false,
            on: false
        };
        arr.push(techObject);
    }
    return arr;
}

getDevices = function(data) {
    var oneEach = [];
    var arr = [];
    for (var n in data) {
        for (var k in data[n]["device"]) {
            pushUnique(data[n]["device"][k], oneEach);
        }
    }
    for (var u in oneEach) {
        var techObject = {
            name: oneEach[u],
            disabled: false,
            on: false
        };
        arr.push(techObject);
    }
    return arr;
}

getCheckedConnections = function(connections) {
    var checked = [];
    for (var t in connections) {
        if (connections[t].on === true) {
            pushUnique(connections[t].name, checked);
        }
    }
    return checked;
};

getDisabledConnections = function(connections) {
    var disabled = [];
    for (var t in connections) {
        if (connections[t].disabled === true) {
            pushUnique(connections[t].name, disabled);
        }
    }
    return disabled;
};

getCheckedDevices = function(devices) {
    var checked = [];
    for (var t in devices) {
        if (devices[t].on === true) {
            pushUnique(devices[t].name, checked);
        }
    }
    return checked;
};

getRecConnections = function(select) {
    if (select == undefined)
        return null;
    keys = Object.keys(select);
    var filteredKeys = keys.filter(function(key) {
        if (select[key] == "true")
            return select[key];
    });
    filteredKeys.sort();
    return filteredKeys;
}
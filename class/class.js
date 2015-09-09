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

getCheckedDevices = function(devices) {
    var checked = [];
    for (var t in devices) {
        if (devices[t].on === true) {
            pushUnique(devices[t].name, checked);
        }
    }
    return checked;
};
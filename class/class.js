pushUnique = function(item, array) {
    if ((item != "") && (jQuery.inArray(item, array) == -1)) {
        array.push(item);
        return true;
    }
    return false;
}

unique = function (list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
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
    var keys = [];
    jQuery.each(select, function(key, value) {
        keys.push(key)
    });
    var filteredKeys = jQuery.grep(keys, function(key) {
        if (select[key] == true)
            return select[key];
    });
    filteredKeys.sort();
    return filteredKeys;
}

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

// gets the current url and tokenizes all values in a returning array
// returning array structure is as follows:
// ["key":"value"] ex: key --> rec , value --> HR44
// in case of checkboxes, the key will be "empty" and only value will be saved in returning array
// ex: ["","coaxial"] 
var getUrlParameter = function() {
    var url = window.location.href;
    var urlElements = [];
    var a = url.split('?');
    var sPageURL = decodeURIComponent(a[1]), 
    sURLVariables = sPageURL.split('&'), 
    sParameterName,
    i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (!(sParameterName[0] in urlElements))
            urlElements.push(sParameterName);

    }
    return urlElements;
};

// monitors and exchanges url elements happened to be in shorts object
var getUrlFriendlyString = function (shorts,p){
    p = p.toLowerCase();
    for( var prop in shorts ){
        if( shorts[ prop ] === p )
            return prop;
    }
    return p;
};

// BUILDS OUR URL
// if a checkbox click event happens, this function will include its name in current url AND updates the browser's address bar
// checkboxes will be an array of checkbox objects
// shorts will pass shorts array from data.js containing ONLY non-url-friendly checkbox selections and their url-friendly replacement.
getCheckBoxClick = function (shorts,checkboxes) {
        var newString = "";
        var newUrl = "";        
        var oldUrl = window.location.href;
        var a = oldUrl.split('#?');
        var oldUrl = "#?" + a[1]; // oldUrl would have current url variables after ? (including "?").
        for(var i=0; i<checkboxes.length; i++) { // loop through all checkboxes in the page
            if(checkboxes[i].on === true){ // checkboxes that are checked
                if(oldUrl.indexOf(getUrlFriendlyString(shorts,checkboxes[i].name)) == -1){ // if current url did not have the chosen checkbox value...
                    var string = getUrlFriendlyString(shorts,checkboxes[i].name);
                    oldUrl += "&="+string;
                }
                //normalizes hash issue in IE8
                newString = oldUrl.replace("#",'');
            }
            else // checkboxes that are not checked
            {
                if(oldUrl.indexOf(getUrlFriendlyString(shorts,checkboxes[i].name)) != -1){ // if current url has the chosen checkbox value
                    var string = getUrlFriendlyString(shorts,checkboxes[i].name);
                    newString = oldUrl.replace("&="+string,'');
                    oldUrl = newString;
                }
            }
        }
        // adjustment for Chrome not having the hash
        // apparently urls taken from chrome (without below adjustment) to IE8 caused issues (10/29/15)
        if(newString.length > 0 && newString.substr(0,1) != '#')
            newString = "#"+newString;
        window.history.pushState("", "", newString);          
};

// BUILDS OUR URL
// if a selection is made from receiver dropdown list, this function will include its model name in current url and updates the browser's address bar
getDropDownChange = function (receiver){
    var newString = "";
    var oldUrl = window.location.href;
    if(typeof receiver != 'undefined'){
        newString = "?rec="+receiver.model;
    }
    // adjustment for Chrome not having the hash
    // apparently urls taken from chrome (without below adjustment) to IE8 caused issues (10/29/15)
    if(newString.length > 0 && newString.substr(0,1) != '#')
        newString = "#"+newString;
    window.history.pushState("", "", newString);
}
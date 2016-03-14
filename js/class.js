var uniq_fast = function(a) {
        'use strict';
        var seen = {},
            out = [],
            len = a.length,
            i,
            item,
            j = 0;
        for(i = 0; i < len; i+=1) {
             item = a[i];
             if(seen[item] !== 1) {
                   seen[item] = 1;
                   out[j++] = item;
             }
        }
        return out;
    },

    getItems = function(data, item) {
        'use strict';
        var oneEach = [],
            arr = [],
            n,
            k,
            u,
            techObject;
        for (n=0;n<data.length;n+=1) {
            for (k=0;k<data[n][item].length;k+=1) {
                oneEach.push(data[n][item][k]);
            }
        }
        for (u=0;u<oneEach.length;u+=1) {
            techObject = {
                name: oneEach[u],
                disabled: false,
                checked: false
            };
            arr.push(techObject);
        }
        return arr;
    },

    getItemsByProperty = function(items, property) {
        'use strict';
        var arr = [];
        for (var t in items) {
            if (items[t][property] === true) {
                arr.push(items[t].name);
            }
        }
        return arr;
    },

    anyMatchInArray = function (target, toMatch) {
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
exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (sum, item) {
            sum += item;
            return sum;
        }, 0);
    },

    remove: function (arr, item) {
        var index = arr.indexOf(item);
        if (index === -1) {
            return arr;
        } else {
            arr.splice(index, 1);
            return this.remove(arr, item);
        }
    },

    removeWithoutCopy: function (arr, item) {
        var index = arr.indexOf(item);
        if (index === -1) {
            return arr;
        } else {
            arr.splice(index, 1);
            return this.remove(arr, item);
        }
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.reverse().push(item);
        return arr.reverse();
    },

    curtail: function (arr) {
        arr.reverse().pop();
        return arr.reverse();
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        var part1 = arr.slice(0, index), part2 = arr.slice(index);
        part1.push(item);
        return part1.concat(part2);
    },

    count: function (arr, item) {
        return privateCount(arr, item);
    },

    duplicates: function (arr) {
        return arr.reduce(function (d, item) {
            if (d.indexOf(item) === -1) {
                d.push(item);
            }
            return d;
        }, []).map(function (item) {
            return [item, privateCount(arr, item)];
        }).filter(function (item) {
            return item[1] > 1;
        }).map(function (item) {
            return item[0];
        });
    },

    square: function (arr) {
        return arr.map(function (item) {
            return Math.pow(item, 2);
        });
    },

    findAllOccurrences: function (arr, target) {
        return arr.reduce(function(occurences, item, index) {
            if (item === target) {
                occurences.push(index);
            }
            return occurences;
        }, []);
    }
};


function privateCount(arr, item) {
    return arr.reduce(function (count, arrItem) {
        if (arrItem === item) {
            count++;
        }
        return count;
    }, 0);
}
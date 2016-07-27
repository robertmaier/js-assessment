exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        return function (str2) {
            return str + ', ' + str2
        };
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (val) {
            return function () {
                return fn(val);
            };
        })
    },

    partial: function (fn, str1, str2) {
        return function (punctuation) {
            return fn(str1, str2, punctuation);
        }
    },

    useArguments: function () {
        return [].slice.call(arguments, 0).reduce(sum, 0);
    },

    callIt: function (fn) {
        fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments: function (fn) {
        var args = [];

        if (arguments.length > 1) {
            var elements = Array.prototype.slice.call(arguments, 1)
            elements.forEach(function (el) {
                args.push(el);
            });
        }
        
        return function () {
            var elements = Array.prototype.slice.call(arguments, 0)
            elements.forEach(function (el) {
                args.push(el);
            });
            return fn(args[0], args[1], args[2]);
        }
    },

    curryIt: function (fn) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return fn(a, b, c);
                }
            }
        }
    }
};

function sum(a, b) {
    return a + b;
}
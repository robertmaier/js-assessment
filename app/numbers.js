exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        var val = num | Math.pow(2, bit - 1);
        if (val === num) {
            return 1;
        }
        return 0;
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        var str = Number(num).toString(2);
        var missingPadding = 8 - str.length;
        var pad = '';
        for (var i = 0; i< missingPadding; i++) {
            pad += '0';
        }
        return pad + str;
    },

    multiply: function (a, b) {
        
        return a * b;
    }
};

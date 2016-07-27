exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number
    
        

        var retVal = null;
        if (isNaN(parseInt(num, 10))) {
            retVal = false;
        } else {
            var divisible3 = divisible(num, 3);
            var divisible5 = divisible(num, 5);
            
            if (divisible3 && divisible5) {
                retVal = 'fizzbuzz';
            } else if (divisible5) {
                retVal = 'buzz';
            } else if (divisible3) {
                retVal = 'fizz';
            } else {
                retVal = num;
            }

        }
        
        return retVal;
    }
};

function divisible(num, divisor) {
    return num % divisor === 0;
}

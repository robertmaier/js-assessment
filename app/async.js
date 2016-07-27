exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    },

    manipulateRemoteData: function (url) {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {                
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var people = JSON.parse(xhttp.responseText).people;                   
                    resolve(people.map(function(p) { 
                            return p.name; 
                        }).sort());
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        });
    }
};

var exec = require('cordova/exec');
exports.exitAppIOS = function(askUser) {
    
    if (!askUser) {
        askUser = false;
    }

    exec(
        function callback(data) {
            console.log("callback Message");
        },
        function errorHandler(err) {
            console.log("Error");
        },
        'CDVExitApp',
        'exitAppIOS', 
        [askUser]
    );
};

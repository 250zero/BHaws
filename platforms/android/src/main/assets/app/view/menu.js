var frameModule = require("ui/frame");
exports.pageLoaded = function() { 
    setTimeout(function(){ 
        var topmost = frameModule.topmost();
         topmost.navigate("view/baloncesto");
     }, 3000);
};

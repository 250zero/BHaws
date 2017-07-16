
var orientationModule = require("@irman/nativescript-screen-orientation");
  exports.cargado=function(){ 
    orientationModule.setCurrentOrientation("landscape",function(){
                console.log("landscape orientation set");
            });
}; 
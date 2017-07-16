//cargado
var frameModule = require("ui/frame"); 
var orientationModule = require("@irman/nativescript-screen-orientation");
exports.cargado = function() { 
       orientationModule.setCurrentOrientation("portrait",function(){
                console.log("landscape orientation set");
            });
        
}; 
exports.quick_game_page = function() {  
    var quick_game = frameModule.topmost();
    quick_game.navigate("view/quick_game/main");
};
exports.start_game_page = function() { 
   
};
exports.list_player_page = function() { 
    
};
exports.configuration_page = function() { 
   
};
exports.exit_application = function() { 
   
};





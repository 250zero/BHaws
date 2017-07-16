
var orientationModule = require("@irman/nativescript-screen-orientation");

var page;
var falta_home;
var falta_visit;

exports.cargado=function( args){   
    page = args.object;
    falta_home = page.getViewById("label_faltas_home");
    falta_visit = page.getViewById("label_faltas_visit"); 
    orientationModule.setCurrentOrientation("landscape",function(){
               
    });
};   
 
exports.btn_reiniciar_game=function( args){   
    alert('reiniciar juego');
}; 
exports.btn_faltas_mas_home=function( ){ 
    console.dir(falta_home.text); 
    if(falta_home.text >= 0){
         console.dir( 1 + (falta_home.text * 1));
         falta_home.text =  (falta_home.text * 1) + 1; 
    }
};   
exports.btn_faltas_menos_home=function( ){    
   console.dir(falta_home.text); 
    if(falta_home.text > 0){
         console.dir( 1 + (falta_home.text * 1));
         falta_home.text =  (falta_home.text * 1) - 1; 
    }
}; 
exports.btn_faltas_mas_vist=function( ){ 
    console.dir(falta_visit.text); 
    if(falta_visit.text >= 0){
         console.dir( 1 + (falta_visit.text * 1));
         falta_visit.text = (falta_visit.text * 1) + 1; 
    }
};   
exports.btn_faltas_menos_visit=function( ){    
   console.dir(falta_visit.text); 
    if(falta_visit.text > 0){
         console.dir( 1 + (falta_visit.text * 1));
         falta_visit.text = (falta_visit.text * 1) - 1; 
    }
}; 

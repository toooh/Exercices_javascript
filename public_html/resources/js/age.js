"use strict";

function giveFeature(entree){
    var sortie;
    parseInt(entree);
    if(entree===0 || entree===1){
        sortie="bébé";
    }
    if(entree>=2 && entree<=6){
        sortie="jeune enfant";
    }
    if(entree>=7 && entree<=11){
        sortie="age de raison";
    }
    if(entree>=12 && entree<=17){
        sortie="adolescent";
    }
    if(entree>=18 && entree<=45){
        sortie="adulte";
    }
    if(entree>45){
        sortie="senior";
    }
    return sortie;
}

function giveGenre(select){
    
    var radiobuttons=document.getElementsByName("genre");
    
    for(var i=0; i<radiobuttons.length; i++){
        if(radiobuttons[i].checked){
            select=radiobuttons[i].value;
        }
    }
    if(select==='M'){
        document.getElementById("resultatAge").innerHTML="homme "+giveFeature();
    }
}

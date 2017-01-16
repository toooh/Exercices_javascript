"use strict";
debugger;
var sortie="";
var somme=0;
var tab=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
for(var i=0; i<=tab.length-1; i++){
    if(i===tab.length-1){
        sortie=sortie+tab[i]+"<br>"+"___";
    }else{
        sortie=sortie+tab[i]+"<br>"+"+";
    }
    somme=somme+tab[i];
    document.getElementById("afficher").innerHTML=sortie+"<br>"+somme;
}

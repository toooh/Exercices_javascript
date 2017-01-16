"use strict";

var departmentList = new Array("Ain", "Aisne", "Allier", "Alpes-de-Haute-Provence", "Alpes-Maritimes", "Ardèche", "Ardennes", "Ariège", "Aube", "Aude", "Aveyron", "Bas-Rhin", "Bouches-du-Rhône", "Calvados", "Cantal", "Charente", "Charente-Maritime", "Cher", "Corrèze", "Corse-du-Sud", "Côte-d'Or", "Côtes-d'Armor", "Creuse", "Deux-Sèvres", "Dordogne", "Doubs", "Drôme", "Essonne", "Eure", "Eure-et-Loir", "Finistère", "Gard", "Gers", "Gironde", "Guadeloupe", "Guyane", "Haut-Rhin", "Haute-Corse", "Haute-Garonne", "Haute-Loire", "Haute-Marne", "Haute-Saône", "Haute-Savoie", "Haute-Vienne", "Hautes-Alpes", "Hautes-Pyrénées", "Hauts-de-Seine", "Hérault", "Ille-et-Vilaine", "Indre", "Indre-et-Loire", "Isère", "Jura", "La Réunion", "Landes", "Loir-et-Cher", "Loire", "Loire-Atlantique", "Loiret", "Lot", "Lot-et-Garonne", "Lozère", "Maine-et-Loire", "Manche", "Marne", "Martinique", "Mayenne", "Mayotte", "Meurthe-et-Moselle", "Meuse", "Morbihan", "Moselle", "Nièvre", "Nord", "Oise", "Orne", "Paris", "Pas-de-Calais", "Puy-de-Dôme", "Pyrénées-Atlantiques", "Pyrénées-Orientales", "Rhône", "Saône-et-Loire", "Sarthe", "Savoie", "Seine-et-Marne", "Seine-Maritime", "Seine-Saint-Denis", "Somme", "Tarn", "Tarn-et-Garonne", "Territoire de Belfort", "Val-d'Oise", "Val-de-Marne", "Var", "Vaucluse", "Vendée", "Vienne", "Vosges", "Yonne", "Yvelines");
var d = document.departmentListForm.departmentList;
for (var i = 0; i < departmentList.length-1; i++){
    d.length++;
    d.options[d.length - 1].text = departmentList[i];
}

function getRegion(d){
    /*var region = new Array['Centre-Val de Loire', 'Hauts-de-France', 'Normandie', 'Nouvelle-Aquitaine', 'Bretagne', 'Auvergne-Rhône-Alpes', 'Île-de-France', 'Occitanie', 'Provence-Alpes-Côte d\'Azur', 'Pays de la Loire', 'Bourgogne-Franche-Comté', 'Outre-mer', 'Grand Est', 'Corse'];*/
    var error = null;
    var verif;
    if(d=='Ain'||d=='Allier'||d=='Ardèche'||d=='Cantal'||d=='Drôme'||d=='Isère'||d=='Loire'||d=='Haute-Loire'||d=='Puy-de-Dôme'||d=='Rhône'||d=='Métropole de Lyon'||d=='Savoie'||d=='Haute-Savoie'){
        region='Auvergne-Rhônes-Alpes'
        verif=true;
    }else{
        verif=false;
    }

    var resultOK = "Vous résidez dans la région " + region + ".";
    verif===true? document.getElementById("resultatRegion").innerHTML = resultOK: error;
}
//Compteur de clics en JS

var click = 0; //différent de organes, ne devient pas cheaté
var niveau = 0; //donne plus d'organes
var exp_ = 0; //augmente tous les 2 click
var organes = 0; //monnaie

function arme(prix, image){
 this.prix = prix;
 this.image = image;
 this.present = function() {
   if (organes >= this.prix) {
     //A FAIRE : l'arme apparait sur l'étale du viet
   };
  };
 };
 this.acheter = function() { //Va débiter les organes en l'échange de l'arme
   if (organes > this.prix) {
     organes -= this.prix;
     //A FAIRE : Ajouter l'image de l'arme en curseur
     //A FAIRE : Ajouter les dégats de l'arme à organes
   };
};

var creerCanvasContext = function (name, width, height, zindex, color) {
        "use strict";
        var canvas = window.document.createElement("canvas");
        canvas.id = name;
        canvas.style.position = "absolute";
        canvas.style.left = "18%";
        if ( color !== undefined ){
                canvas.style.background = color;
        }
        canvas.style.zIndex = zindex;
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
};

//function ArmeClick() {
//  this.acheter
//};

function OrcClick() {

    organes += (1 + niveau);
    exp_ += 1 ;

    document.getElementById("organes").innerHTML = organes;//Permet d'afficher les organes
    document.getElementById("niveau").innerHTML = niveau;//Permet d'afficher le niveau
    document.getElementById("exp_").innerHTML = exp_;//Permet d'afficher l’exp_

    if ((exp_ % 10) == 0) {niveau ++}; //augmente le niveau tous les 10 exp_
};

window.onload = initialisation;

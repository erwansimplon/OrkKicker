//Compteur de clics en JS

var click = 0; //différent de organes, ne devient pas cheaté
var niveau = 1; //donne plus d'organes
var exp_ = 0; //augmente tous les 2 click
var nivobj = 10; //Objectif pour prendre un niveau
var organes = 0; //monnaie
var modarme = 0; //modificateur d'arme, ajoute la puissance de l'arme à organes
var prairieImage = new Image();
prairieImage.src = 'prairie.png';
var posX = 0;
var guiImage = new Image();
guiImage.src = 'gui.png';

var requestAnimId;

var arme = function (prix, image, puissance){
 this.prix = prix;
 this.image = new Image();
 this.image.src = image;
 this.puissance = puissance;
 this.present = function() {
   if (organes >= this.prix) {
   };
  };
 };
 this.acheter = function() {
     if (organes >= this.prix) {
       organes -= this.prix;
       this.puissance == modarme;
       play(buy);
       return true;
   };
};

function FourchetteClick(){
  var fourchette = new arme(10, 'fourchette.png', 50);
  fourchette.acheter;
}
//function ArmeClick() {
//  this.acheter
//};

function changeImage(imagesrc, imageout) {
    if (imagesrc.match(imageout)) {
        imagesrc = "imagesrc";
    } else {
        image.src = "imageout";
    }
}

function OrcClick() {
    organes += (niveau + modarme);
    exp_ += 1 ;
    play(sproutch);

    document.getElementById("organes").innerHTML = organes;//Permet d'afficher les organes
    document.getElementById("niveau").innerHTML = niveau;//Permet d'afficher le niveau
    document.getElementById("exp_").innerHTML = exp_;//Permet d'afficher l’exp_

    if (exp_ == nivobj) { //augmente le niveau tous les 10 exp_
      niveau ++;
      nivobj *= 2;
    };
};

function play(sound){
    sound.play();
    sound.currentTime = 0;
};

function BuyClick() {
    if (organes >= 10) {
        organes -= 10;
        play(buy);
        document.getElementById("organes").innerHTML = organes;
        changeImage(viet_idle, viet_thanks);
    };
};


//////////////////CANVAS//////////////////

var effacer_canvas = function () {
        "use strict";
        prairieCanvasContext.clearRect( 0, 0 , 320, 240);
        guiCanvasContext.clearRect( 0, 0 , 320, 240);
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

var init = function () {
  prairieCanvasContext = creerCanvasContext("prairie", 320, 240, 1)
  guiCanvasContext = creerCanvasContext("gui", 320, 240, 2)
  guiCanvasContext.drawImage(guiImage, 0, 0)

  requestAnimId = window.requestAnimationFrame(principale);
};

var principale = function () {
  posX -=1;
  if (posX == -312) {
    posX = 0;
  };
  console.log(posX)
  effacer_canvas();
  guiCanvasContext.drawImage(guiImage, 0, 0);
  prairieCanvasContext.drawImage(prairieImage, posX, 0);


  requestAnimId = window.requestAnimationFrame(principale);
};

window.onload = init;

var knife, knifeImage;
var ombie, ombieImage;
var background, backgroundImage;
var player, playerImage;
var player_one, player_oneImage;

function preload(){

 backgroundImage = loadImage ("assets/background.png");
 knifeImage = loadImage("assets/knife.png");
 ombieImage = loadImage("assets/ombie.png");
 playerImage = loadImage("assets/player.png");
 player_oneImage = loadImage("assets/player_one.png");
}

function setup(){
  createCanvas(600,200)

  bg = createSprite(displayWidth/2-20, displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;
  
  //create a ombie sprite
ombie = createSprite(displayWidth-1150, displayHeight-300,50,50);
ombie.addImage(ombieImage);
ombie.scale = 0.3;
ombie.debug = true;

 //create player sprite

 player = createSprite(displayWidth- 1120, displayHeight-200,50,50);
 player.addImage(playerImage);
 player.scale = 0.2;
 player.debug = true;
}


function draw(){
  background("white");
 
  
drawSprites()
}

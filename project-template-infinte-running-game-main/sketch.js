var space,rocket,juptier,mars,neptune,uranuse,merucy;
var spaceImg,rocketImg1,juptierImg,marsImg,merucyImg,neptuneImg,uranuseImg;
var gameOverImg,juptierCG,marsCG,neptuneCG,uranuseCG,merucyCG; 

var END =0;
var PLAY =1;
var gameState = PLAY;
var gameState = END;

var distance=0;
var gameOver, restart;

function preload(){
  spaceImg = loadImage("hd-wallpaper-g0a61a66af_1920.jpg");
 rocketImg1 = loadImage("rocket.png");
  juptierImg = loadImage("juptier.png");
merucyImg= loadImage("merucy.png");
marsImg= loadImage("mars.png");
neptuneImg= loadImage("neptune.png");
uranuseImg= loadImage("uranuse.png");
gameOverImg = loadImage("gameOver.png");
}

function setup(){

  //create the canvas and adjust the window sizes to suit the device 
createCanvas(windowWidth, windowHeight);
  
space=createSprite(width/2,200);
space.addImage(spaceImg);
space.velocityX = -5;

//creating boy running
rocket  = createSprite(170,150);
rocket.addImage(rocketImg1);
rocket.scale=0.4;
  
//set collider for mainCyclist

//rocket.setCollission("rectangle",0,0,40,40);
rocket.setCollider("rectangle",0,0,40,40);
//rocket.setCollission("rectangle",0,0,40,40,50);
//mainCyclist.setCollider("rectangle",0,0,40,40,50);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  

createMars();
createJuptier();
createNeptune();
createUranuse();
createMerucy();

merucyCG=new Group();
juptierCG=new Group();
neptuneCG=new Group();
uranuseCG=new Group();
marsCG=new Group();

}

function draw() {
  background(0);

  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);

  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   space.velocityX = -(6 + 2*distance/150);

   edges= createEdgeSprites();

  //code to reset the background
  if(space.x < 400 ){
    space.x = width/2,200;
  }

  if(keyDown("space")) {

      rocket.velocityY = -10;

    }
rocket.velocityY = rocket.velocityY + 0.8;
        //creating continous opponent players

        var select_oppPlayer = Math.round(random(1,5));
      
        if (World.frameCount % 0 == 0) {
          if (select_oppPlayer == 1) {
        merucy();
        } else if (select_oppPlayer == 2) {
          juptier();
        } else if (select_oppPlayer == 3) {
          mars();
        } else if (select_oppPlayer == 4) {
        neptune();
        } else {
        uranuse();
          }
      }
          
       if(marsCG.isTouching(rocket)){
         gameState = END;
        }
        
        if(neptuneCG.isTouching(rocket)){
          gameState = END;
        }
        
        if(merucyCG.isTouching(rocket)){
          gameState = END;
        }
        
        if(uranuseCG.isTouching(rocket)){
          gameState = END;
        }
        
        if(juptierCG.isTouching(rocket)){
          gameState = END;
        }
  } else { if (gameState === END) {
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    space.velocityX = 0;
    rocket.velocityY = 0;

    marsCG.setVelocityXEach(0);
    marsCG.setLifetimeEach(-1);

    merucyCG.setVelocityXEach(0);
    merucyCG.setLifetimeEach(-1);

    neptuneCG.setVelocityXEach(0);
    neptuneCG.setLifetimeEach(-1);

    uranuseCG.setVelocityXEach(0);
    uranuseCG.setLifetimeEach(-1);

    juptierCG.setVelocityXEach(0);
    juptierCG.setLifetimeEach(-1);

    // if(keyDown("UP_ARROW")) {
    //   reset;
    // }

    // if(key("UP_ARROW")) {
    //   reset();
    // }

    // if(keyDown()) {
    //   reset();
    // }

if(keyDown("UP_ARROW")) {
  reset();
  }
}
  }
}


function createMerucy() {
  // Modify the positions of cash 
  if (World.frameCount % 200 == 0) {
   var merucy = createSprite(Math.round(random(450, 150),40, 10, 10));
 merucy.addImage(merucyImg);
   merucy.scale=0.12;
 merucy.velocityX = 5;
 merucy.lifetime = 200;
 //merucyCG.add(merucy);
  }
}

function createJuptier() {
 if (World.frameCount % 320 == 0) {
      // Modify the positions of diamonds 
    juptier =createSprite(1100,Math.round(random(50, 250)));
    juptier.scale =0.06;
    juptier.velocityX = -(6 + 2*distance/150);
    juptier.addImage(juptierImg);
 juptier.velocityx = 5;
juptier.lifetime = 200;
//juptierCG.add(juptier);
}
}

function createMars() {
  if (World.frameCount % 420 == 0) {
  mars =createSprite(1100,Math.round(random(50, 250)));
  mars.scale =0.06;
  mars.velocityX = -(6 + 2*distance/150);
  mars.addImage(marsImg);
  mars.scale=0.13;
  mars.velocityX = 5;
  mars.lifetime = 200;
  //marsCG.add(mars);
 }
}

function createUranuse(){
 if (World.frameCount % 440 == 0) {
  uranuse =createSprite(1100,Math.round(random(50, 250)));
 uranuse.scale =0.06;
uranuse.velocityX = -(6 + 2*distance/150);
uranuse.addImage(uranuseImg);
  uranuse.scale=0.1;
 uranuse.velocityX = 7;
 uranuse.lifetime = 200;
 //uranuseCG.add(uranuse);
 }
}

function createNeptune(){
  if (World.frameCount % 460 == 0) {
    //   Modify the positions of sword to make them spawn throughout the available screen size.
    neptune =createSprite(1100,Math.round(random(50, 250)));
    neptune.scale =0.06;
   neptune.velocityX = -(6 + 2*distance/150);
   neptune.addImage(neptune);
   neptune.scale=0.1;
  neptune.velocityX = 7;
  neptune.lifetime = 200;
  //neptuneCG.add(neptune);
  }
 }

function reset(){
gameState = PLAY;
gameOver.visible = false;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
rocket.x = 170;
rocket.y = 150;

neptuneCG.destroyEach();
marsCG.destroyEach();
uranuseCG.destroyEach();
juptierCG.destroyEach();
merucyCG.destroyEach();

//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
distance = 0;
}

//function reset(){
//  gameState = END;
//  gameOver.visible = true;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 50;
// }

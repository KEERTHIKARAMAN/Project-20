var backgroundImg;
var sleeping,sleepingImg;
var brushing,brushingImg;
var bathing,bathingImg;
var drinking,drinkingImg;
var eating,eatingImg;
var gyming,gymingImg;
var boy,boyImg;

function preload(){
  backgroundImg = loadImage("iss.png");
  sleepingImg = loadImage("sleep.png");
  brushingImg = loadImage("brush.png");
  bathingImg = loadAnimation("bath1.png","bath2.png");
  drinkingImg = loadAnimation("drink1.png","drink2.png");
  eatingImg = loadAnimation("eat1.png","eat2.png");
  gymingImg = loadAnimation("gym11.png","gym12.png");
  boyImg = loadAnimation("move1.png","move2.png");
}

function setup() {
  createCanvas(1600,757);

  sleeping = createSprite (800,425) 
  sleeping.addAnimation("sleeping",sleepingImg);
  sleeping.scale=0.2;

  brushing = createSprite (800,425) 
  brushing.addAnimation("brushing",brushingImg);
  brushing.scale=0.2;
  brushing.visible = false;

  bathing = createSprite (800,425) 
  bathing.addAnimation("bathing",bathingImg);
  bathing.scale=0.2;
  bathing.visible = false;

  drinking = createSprite (800,425) 
  drinking.addAnimation("drinking",drinkingImg);
  drinking.scale=0.2;
  drinking.visible = false;

  eating = createSprite (800,425) 
  eating.addAnimation("eating",eatingImg);
  eating.scale=0.2;
  eating.visible = false;

  gyming = createSprite (800,425) 
  gyming.addAnimation("gyming",gymingImg);
  gyming.scale=0.2;
  gyming.visible = false;

  boy = createSprite (800,425) 
  boy.addAnimation("running",boyImg);
  boy.scale=0.2;
  boy.visible = false;
  boy.veloicityY = 2;
  boy.veloicityX = 2;



}

function draw() {
  background(backgroundImg);

  edges = createEdgeSprites();
  boy.bounceOff(edges);
  eating.bounceOff(edges);
  bathing.bounceOff(edges);
  brushing.bounceOff(edges);
  drinking.bounceOff(edges);
  

fill("springgreen");
textSize(30);
text("Use Arrows and key m to see daily routine of astrounauts",500,110)

fill("crimson");
textSize(30);
text("Instructions:",50,40)

fill("cyan");
textSize(30);
text("Click up arrow for: brushing",50,100)

fill("white");
textSize(30);
text("Click down arrow for: gymming",50,130)

fill("cyan");
textSize(30);
text("Click right arrow for: eating",50,160)

fill("white");
textSize(30);
text("Click left arrow for: bathing",50,190)

fill("cyan");
textSize(30);
text("Click m key for: moving",50,220)


fill("white");
textSize(30);
text("Click k key for: drinking water",50,250)

if  (keyDown("UP_ARROW")) {
  sleeping.visible = false;
  gyming.visible = false;
  eating.visible = false;
  bathing.visible = false;
  brushing.visible = true;
  drinking.visible = false;
  boy.visible = false;
  brushing.velocityX = 2;
  brushing.velocityY = 2;

}

if  (keyDown("DOWN_ARROW")) {
  brushing.visible = false;
  sleeping.visible = false;
  eating.visible = false;
  bathing.visible = false;
  gyming.visible = true;
  drinking.visible = false;
  boy.visible = false;
}

if  (keyDown("RIGHT_ARROW")) {
  sleeping.visible = false;
  brushing.visible = false;
  bathing.visible = false;
  gyming.visible = false;
  eating.visible = true;
  drinking.visible = false;
  boy.visible = false;
  eating.velocityX = 2;
  eating.velocityY = 2;
}

if  (keyDown("LEFT_ARROW")) {
  sleeping.visible = false;
  gyming.visible = false;
  brushing.visible = false;
  eating.visible = false;
  bathing.visible = true;
  drinking.visible = false;  
  boy.visible = false;
  bathing.velocityX = 2;
  bathing.velocityY = 2;
}

if  (keyDown("k")) {
  sleeping.visible = false;
  gyming.visible = false;
  eating.visible = false;
  bathing.visible = false;
  brushing.visible = false;
  drinking.visible = true;
  boy.visible = false;
  drinking.velocityX = 2;
  drinking.velocityY = 2;
}

if  (keyDown("m")) {
  sleeping.visible = false;
  gyming.visible = false;
  eating.visible = false;
  bathing.visible = false;
  brushing.visible = false;
  drinking.visible = false;
  boy.visible = true;
  boy.velocityX = 2;
  boy.velocityY = 2;
}


drawSprites();
}
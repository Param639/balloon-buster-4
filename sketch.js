var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background,redB,greenB,blueB,pinkB,arrowGroup;

var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score = 0;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  background = createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //create line of red balloons using for loop
 /*for(var i=60;i<390;i=i+60){
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}
 
  

//create line of green balloons using for loop
for(var i=110;i<390;i=i+60){
  green_balloon = createSprite(100, i, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}

  
//create line of blue balloons using for loop
for(var i=130;i<350;i=i+60){  
  blue_balloon = createSprite(140, i, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}
  
  //create line of pink balloons using for loop
for(var i=180;i<250;i=i+60){
  pink_balloon = createSprite(180, i, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}*/
 
  //create balloons and arrows group
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowsGroup = new Group();
}

function draw() {
  // moving ground
    background.velocityX = -3;
  
  

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  if(World.frameCount % 80 === 0){
    if(select_balloon===1){
      redBalloon();
    }
    else if(select_balloon===2){
      greenBalloon();
    }
    else if(select_balloon===3){
      blueBalloon();
    }
    else if(select_balloon===4){
      pinkBalloon();
    }
  }
  
    if(arrowsGroup.isTouching(redB)){
    redB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowsGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+2;
  }
  
  if(arrowsGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowsGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+3;
  }

  
  
  drawSprites();
  
  //score
  textSize(20)
  text("Score : " + score,270,30);
  //if(frameCount % 4 === 0){
   // score = score+1
  //}
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 55;
  arrow.debug = false;
  arrow.setCollider("circle",0,0,70);
  arrowsGroup.add(arrow);
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(0,350)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 118;
  red.scale = 0.1;
  redB.add(red);
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(0,350)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 118;
  green.scale = 0.1;
  greenB.add(green);
}

function blueBalloon(){
  var blue = createSprite(0,Math.round(random(0,350)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 118;
  blue.scale = 0.1;
  blueB.add(blue);
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(0,350)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 118;
  pink.scale = 1.2;
  pinkB.add(pink);
}


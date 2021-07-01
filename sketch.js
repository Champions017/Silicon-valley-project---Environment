var intro = 0
var litter = 1
var medal1 = 2
var intro2 = 3
var plantation = 4;
var medal2 = 5;
var intro3 = 6
var level3 = 7;
var medal3 = 8;
var intro4 = 9
var level4 = 10
var medal4 = 11
var intro5 = 12
var level5 = 13
var medal5 = 14
var end = 15
var gameState = 0

var bg1;
var bg2;
var bg3;
var bg4;
var bg5;
var endBg
var dustbin,dustbinImg;
var banana,bananaImg

var litterScore,oilScore;

var bananaG;

var ground1,ground2,ground3,ground4,ground5,groundImg1,groundImg2;

var bot,botImg1,botImg2;
var seed,seedImg,sapImg,plantImg

var ABG

var litterB,litterBImg,plantB,plantBImg,PRB,PRBImg,Bmedal,BmedalImg,Gmedal,GmedalImg,greyImg;
var ball,ballImg

var bag,bagImg
var bin,binImg

var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12

var bag1,bag2,bag3,bag4,bag5,bag6,bag7,bag8,bagImg;

var bagG,rectG

var PScore,LScore

var oil,oilImg,oilG,water,waterImg,waterG;

var ship,shipImg1,shipImg2

var trashcan,trashcanImg
var trash,trashImg

var trashScore;

var sound,ASound

var trophy,trophyImg

function preload(){
  bg1 = loadImage("grass.jpg")
  dustbinImg = loadImage("dustbin.png")
  bananaImg = loadImage("banana.png")

  bg2 = loadImage("sky.jpg");
  groundImg1 = loadImage("ground.png")
  groundImg2 = loadImage("Sground.png");
  botImg1 = loadAnimation("bot1.png")
  botImg2 = loadAnimation("bot2.png");
  seedImg = loadAnimation("seed.png")
  sapImg = loadAnimation("sap.png")
  ABG = loadImage("Abg.png")
  litterBImg = loadAnimation("litterB.png")
  bottleImg = loadImage("bottle.png")
  fertImg = loadImage("fertiliser.png")
  SARRIMG = loadImage("arr.png")
  plantImg = loadAnimation("plant.png")
  plantBImg = loadAnimation("plantB.png")
  bg3 = loadImage("gradient.png")
  ballImg = loadImage("ball.png")
  PRBImg = loadAnimation("PRB.png")
  binImg = loadImage("bin.png")
  bagImg = loadImage("bag.png")
  oilImg = loadImage("oil.png")
  bg4 = loadImage("WUBG.jpg")
  shipImg1 = loadAnimation("Rship.png")
  shipImg2 = loadAnimation("Lship.png")
  BmedalImg = loadAnimation("Bmedal.png")
  trashcanImg = loadImage("dustbinW.png")
  bg5 = loadImage("room.jpg")
  trashImg = loadImage("trash.png")
  GmedalImg = loadAnimation("goldM.png")
  waterImg = loadImage("water.png")
  sound = loadSound("sound.mp3")
  ASound = loadSound("ASound.mp3")
  endBg = loadImage("endImg.jpg")
  trophyImg = loadImage("trophy.png")
  greyImg = loadAnimation("grey.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  //Gmedal.visible = fals
  //litterB.visible = true
  //plantB.visible = true
  //PRB.visible = true
  //Bmedal.visible = true
  //Gmedal.visible = true

  PScore = 0
  LScore = 8

  dustbin = createSprite(width/2,height-120);
  dustbin.addImage(dustbinImg)
  dustbin.scale = 0.1

  litterScore = 0;
  oilScore = 0;
  trashScore = 0

  bananaG = new Group();
  bagG = new Group();
  rectG = new Group();
  oilG = new Group();
  waterG = new Group();

  ground1 = createSprite(-100,height/2+200);
  ground1.addImage(groundImg1)

  ground2 = createSprite(110,height/3-50);
  ground2.addImage(groundImg2)

  ground3 = createSprite(width,height/2);
  ground3.addImage(groundImg1);

  ground4 = createSprite(width + 1100,height/10);
  ground4.addImage(groundImg2);
  
  ground5 = createSprite(ground1.x - 900,ground1.y + 1000);
  ground5.addImage(groundImg1);

  bot = createSprite(50,height/2 + 50);
  bot.addAnimation("right",botImg1)
  bot.addAnimation("left",botImg2)
  bot.scale = 0.3
  bot.setCollider("rectangle",0,0,250,470)
  ground1.setCollider("rectangle",0,30,1220,140)
  ground2.setCollider("rectangle",0,30,600,140)
  ground3.setCollider("rectangle",0,30,1220,140)
  ground4.setCollider("rectangle",0,30,600,140)
  ground5.setCollider("rectangle",0,30,1220,140)

  seed = createSprite(50,ground2.y - 200)
  seed.addAnimation("seed",seedImg)
  seed.addAnimation("sap",sapImg)
  seed.addAnimation("plant",plantImg)
  seed.scale = 0.2

  bottle = createSprite(ground4.x + 200,ground4.y - 200);
  bottle.addImage(bottleImg);
  bottle.scale = 0.4

  fert = createSprite(ground1.x - 1000,ground1.y + 900)
  fert.addImage(fertImg)
  fert.scale = 0.1
  
  SARR = createSprite(ground1.x - 550,ground1.y + 50)
  SARR.addImage(SARRIMG)
  SARR.scale = 0.4

  ball = createSprite(100,height/2)
  ball.addImage(ballImg)
  ball.scale = 0.07

  bin = createSprite(width/2,height/2)
  bin.addImage(binImg)
  bin.scale = 0.2

  rect1 = createSprite(width/3,height/2,10,350);
  rect1.shapeColor = "red";
  rectG.add(rect1)
  //rect1.debug = true

  rect2 = createSprite(width/2,height/4-10,436,10);
  rect2.shapeColor = "red";
  rectG.add(rect2)
  //rect2.debug = true

  rect3 = createSprite(width-width/3,height/2,10,350);
  rect3.shapeColor = "red";
  rectG.add(rect3)
  //rect3.debug = true

  rect4 = createSprite(width/2 + 28,height - height/4 + 10,380,10);
  rect4.shapeColor = "red";
  rectG.add(rect4)
  //rect4.debug = true

  rect5 = createSprite(width/3+50,height/2+27,10,300);
  rect5.shapeColor = "red";
  rectG.add(rect5)
  //rect5.debug = true

  rect6 = createSprite(width/2-3,height/4+40,330,10);
  rect6.shapeColor = "red";
  rectG.add(rect6)
  //rect6.debug = true

  rect7 = createSprite(width - width/3 - 50,height/2+1,10,255);
  rect7.shapeColor = "red";
  rectG.add(rect7)
  //rect7.debug = true

  rect8 = createSprite(width/2+28,height-height/4-38,280,10);
  rect8.shapeColor = "red";
  rectG.add(rect8)
  //rect8.debug = true

  rect9 = createSprite(width/2-107,height/2+25,10,190);
  rect9.shapeColor = "red";
  rectG.add(rect9)
  //rect9.debug = true

  rect10 = createSprite(width/2,height/3+43,220,10);
  rect10.shapeColor = "red";
  rectG.add(rect10)
  //rect10.debug = true

  rect11 = createSprite(width/2 + 105,height/2,10,130);
  rect11.shapeColor = "red";
  rectG.add(rect11)
  //rect11.debug = true

  rect12 = createSprite(width/2+30,height/2 + 60,150,10);
  rect12.shapeColor = "red";
  rectG.add(rect12)
  //rect12.debug = true

  //ball.debug = true
  ball.setCollider("circle",-15,0,180)

  trashcan = createSprite(width/7,height-200)
  trashcan.addImage(trashcanImg)

  bag1 = createSprite(rect1.x + 25,height/2)
  bag1.addImage(bagImg)
  bag1.scale = 0.1
  bagG.add(bag1)

  bag2 = createSprite(rect2.x,rect2.y + 25)
  bag2.addImage(bagImg)
  bag2.scale = 0.07
  bagG.add(bag2)

  bag3 = createSprite(rect3.x - 25,height/2)
  bag3.addImage(bagImg)
  bag3.scale = 0.1
  bagG.add(bag3)

  bag4 = createSprite(rect4.x,rect4.y - 25)
  bag4.addImage(bagImg)
  bag4.scale = 0.07
  bagG.add(bag4)

  bag5 = createSprite(rect5.x + 30,height/2)
  bag5.addImage(bagImg)
  bag5.scale = 0.1
  bagG.add(bag5)
  
  bag6 = createSprite(rect6.x,rect6.y + 25)
  bag6.addImage(bagImg)
  bag6.scale = 0.07
  bagG.add(bag6)

  bag7 = createSprite(rect7.x - 30,height/2)
  bag7.addImage(bagImg)
  bag7.scale = 0.1
  bagG.add(bag7)

  bag8 = createSprite(rect8.x,rect8.y - 25)
  bag8.addImage(bagImg)
  bag8.scale = 0.07
  bagG.add(bag8)

  ship = createSprite(width/2,height-200);
  ship.addAnimation("right",shipImg1)
  ship.addAnimation("left",shipImg2)
  ship.scale = 0.3

  trash = createSprite(width/20,height/10)
  trash.addImage(trashImg)
  trash.scale = 0.3

  trash.visible = false
  trashcan.visible = false

  //sound.play();
  sound.loop()

  trophy = createSprite(width/2,height - height/4)
  trophy.addImage(trophyImg)
  trophy.visible = false
  
  PRB = createSprite(camera.x + width/2,camera.y + 170)
  PRB.addAnimation("grey",greyImg);
  PRB.addAnimation("color",PRBImg)
  PRB.scale = 0.5
  //PRB.visible = false

  litterB = createSprite(PRB.x - 240,PRB.y)
  litterB.addAnimation("grey",greyImg);
  litterB.addAnimation("color",litterBImg)
  litterB.scale = 0.5
  //litterB.visible = false
  
  plantB = createSprite(PRB.x - 120,PRB.y)
  plantB.addAnimation("grey",greyImg);
  plantB.addAnimation("color",plantBImg)
  plantB.scale = 0.5
  //plantB.visible = false

  Bmedal = createSprite(PRB.x + 120,PRB.y)
  Bmedal.addAnimation("grey",greyImg);
  Bmedal.addAnimation("color",BmedalImg)
  Bmedal.scale = 0.5
  //Bmedal.visible = false

  Gmedal = createSprite(PRB.x + 240,PRB.y)
  Gmedal.addAnimation("grey",greyImg)
  Gmedal.addAnimation("color",GmedalImg)
  Gmedal.scale = Bmedal.scale
  
  
}

function draw() {



  if(gameState === intro){
    intro1();
    //litterB.visible = false
    //plantB.visible = false
    //PRB.visible = false
    //Bmedal.visible = false
    //Gmedal.visible = false
    ship.visible = false
    ball.visible = false
    bin.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    dustbin.visible = false;
    bot.visible = false;

    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false
    trophy.visible = false
    if(keyDown("space")){
      gameState = litter;
    }
  }

  if(gameState === litter){
    ship.visible = false
    level1();
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    dustbin.visible = true;
    bot.visible = false


    if(litterScore === 15){
      gameState = medal1
      ASound.play();
    }
  }

  if(gameState === medal1){

    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    //PRB.visible = false
    bottle.visible = false
    dustbin.visible = false
    bot.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    ground4.visible = false
    Lmedal1();
    var litterBM = createSprite(width/2,height/2)
    litterBM.addAnimation("color",litterBImg);
    litterBM.velocityX = Math.round(random(-10,10))
    litterBM.velocityY = Math.round(random(-10,10))
    litterBM.scale = 0.1
    litterBM.scale = litterB.scale + 0.3
    litterBM.scale = litterB.scale + 0.01
    litterBM.lifetime = 100

    if(keyDown("k")){
      litterB.changeAnimation("color",litterBImg)
      litterBM.velocityX = 0
      litterBM.velocityY = 0
      litterBM.scale = litterB.scale + 0.2
      gameState = intro2;
      
    }
  }
  if(gameState === intro2){
    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    ball.visible = false
    //PRB.visible = false
    introLevel2();
    dustbin.visible = false

    if(keyDown("space")){
      //litterB.velocityX = 0
      //litterB.velocityY = 0
      gameState = plantation
    }
  }
  if(gameState === plantation){

    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    ground1.visible = true;
    ground2.visible = true;
    ground3.visible = true;
    ground4.visible = true
    
    bot.collide(ground1)
    bot.collide(ground2)
    bot.collide(ground3)
    bot.collide(ground4)
    bot.collide(ground5)
    bottle.visible = true
    fert.visible = true
    seed.visible = true

    level2F();

  }

  if(gameState === medal2){
    seed.visible = false
    camera.x = width/2
    camera.y = height/2
    //litterB.visible = true

    PRB.x = camera.x + 430
    PRB.y = camera.y - 250

    litterB.x = PRB.x + 160
    litterB.y = PRB.y - 10
    litterB.changeAnimation("color")
    
    plantB.changeAnimation("color")
    plantB.x = PRB.x + 80
    plantB.y = PRB.y

    Bmedal.x = PRB.x - 80
    Bmedal.y = PRB.y

    Gmedal.x = PRB.x - 160
    Gmedal.y = PRB.y
    
    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    //PRB.visible = false
    Lmedal2();
    bottle.visible = false
    dustbin.visible = false
    bot.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    ground4.visible = false
    var plantBM = createSprite(width/2,height/2)
    plantBM.addAnimation("color",plantBImg);
    plantBM.velocityX = Math.round(random(-10,10))
    plantBM.velocityY = Math.round(random(-10,10))
    plantBM.scale = 0.1
    plantBM.scale = plantB.scale + 0.3
    plantBM.scale = plantB.scale + 0.01
    plantBM.lifetime = 100

    if(keyDown("k")){
      plantB.velocityX = 0
      plantB.velocityY = 0
      plantB.scale = plantB.scale + 0.2
      gameState = intro3;
      
    }
  }

  if(gameState === intro3){
    PRB.x = camera.x + 430
    PRB.y = camera.y - 250

    litterB.x = PRB.x + 160
    litterB.y = PRB.y - 10
    litterB.changeAnimation("color")
    
    plantB.changeAnimation("color")
    plantB.x = PRB.x + 80
    plantB.y = PRB.y
    plantB.scale = 0.5

    Bmedal.x = PRB.x - 80
    Bmedal.y = PRB.y

    Gmedal.x = PRB.x - 160
    Gmedal.y = PRB.y

    litterB.visible = true
    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    bot.visible = false
    camera.x = width/2
    camera.y = height/2
    //PRB.visible = false
    //plantB.velocityX = 6
    //plantB.velocityY = -2.5
    introLevel3();
    dustbin.visible = false

    if(keyDown("space")){
      //plantB.velocityX = 0
      //plantB.velocityY = 0
      gameState = level3
    }
  }
  if(gameState === level3){

    bin.visible = true
    ship.visible = false


    bag1.visible = true
    bag2.visible = true
    bag3.visible = true
    bag4.visible = true
    bag5.visible = true
    bag6.visible = true
    bag7.visible = true
    bag8.visible = true

    rect1.visible = true
    rect2.visible = true
    rect3.visible = true
    rect4.visible = true
    rect5.visible = true
    rect6.visible = true
    rect7.visible = true
    rect8.visible = true
    rect9.visible = true
    rect10.visible = true
    rect11.visible = true
    rect12.visible = true
    ball.visible = true
    //PRB.visible = true
    level3F();
    //litterB = createSprite(width-50,90)
    //litterB.addImage(litterBImg);
    //litterB.visible = true
    //litterB.scale = 0.5
  }
  if(gameState === medal3){
    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    Lmedal3();
    bottle.visible = false
    dustbin.visible = false
    bot.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    ground4.visible = false
    var PRBM = createSprite(width/2,height/2)
    PRBM.addAnimation("color",PRBImg);
    PRBM.velocityX = Math.round(random(-10,10))
    PRBM.velocityY = Math.round(random(-10,10))
    PRBM.scale = 0.1
    PRBM.scale = PRBM.scale + 0.3
    PRBM.scale = PRBM.scale + 0.01
    PRBM.lifetime = 100
    PRB.changeAnimation("color")
    PRB.scale = 0.5
    PRB.y = plantB.y - 13

    if(keyDown("k")){
      PRB.velocityX = 0
      PRB.velocityY = 0
      PRB.scale = PRB.scale + 0.2
      gameState = intro4
      
    }
  }

  if(gameState === intro4){
    ship.visible = false
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    PRB.visible = true
    introLevel4();

    PRB.scale = 0.5
    if(keyDown("space")){
      gameState = level4
      }
  }
  if(gameState === level4){
    ship.visible = true
    level4F();
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    bin.visible = false
    ball.visible = false
    level4F();
    plantB.scale = 0.5

    if(oilScore >= 30){
      ASound.play();
      gameState = medal4
    }
  }
if(gameState === medal4){
  ship.visible = false
  bag1.visible = false
  bag2.visible = false
  bag3.visible = false
  bag4.visible = false
  bag5.visible = false
  bag6.visible = false
  bag7.visible = false
  bag8.visible = false

  rect1.visible = false
  rect2.visible = false
  rect3.visible = false
  rect4.visible = false
  rect5.visible = false
  rect6.visible = false
  rect7.visible = false
  rect8.visible = false
  rect9.visible = false
  rect10.visible = false
  rect11.visible = false
  rect12.visible = false

  bin.visible = false
  ball.visible = false
  Lmedal4();
  bottle.visible = false
  dustbin.visible = false
  bot.visible = false
  ground1.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false
  var BmedalM = createSprite(width/2,height/2)
  BmedalM.addAnimation("color",BmedalImg);
  BmedalM.velocityX = Math.round(random(-10,10))
  BmedalM.velocityY = Math.round(random(-10,10))
  BmedalM.scale = 0.04
  BmedalM.scale = BmedalM.scale + 0.3
  BmedalM.scale = BmedalM.scale + 0.01
  BmedalM.lifetime = 100
  Bmedal.changeAnimation("color")
  Bmedal.scale = 0.34
  Bmedal.y = PRB.y + 3

  if(keyDown("k")){
    BmedalM.velocityX = 0
    BmedalM.velocityY = 0
    BmedalM.scale = Bmedal.scale + 0.2
    gameState = intro5
    
  }
}
if(gameState === intro5){
  introLevel5()
  

  if(keyDown("space")){
    //Bmedal.velocityX = 0
    //Bmedal.velocityY = 0
    gameState = level5
    }
}
if(gameState === level5){
  level5F();
  trash.visible = true
  trashcan.visible = true
  //background(bg5)

  Bmedal.scale = 0.35

  if(trashScore === 25){
    ASound.play();
    gameState = medal5;
  }
}

if(gameState === medal5){
  
  trashcan.visible = false
  trash.visible = false
  ship.visible = false
  bag1.visible = false
  bag2.visible = false
  bag3.visible = false
  bag4.visible = false
  bag5.visible = false
  bag6.visible = false
  bag7.visible = false
  bag8.visible = false

  rect1.visible = false
  rect2.visible = false
  rect3.visible = false
  rect4.visible = false
  rect5.visible = false
  rect6.visible = false
  rect7.visible = false
  rect8.visible = false
  rect9.visible = false
  rect10.visible = false
  rect11.visible = false
  rect12.visible = false

  bin.visible = false
  ball.visible = false
  Lmedal5();
  bottle.visible = false
  dustbin.visible = false
  bot.visible = false
  ground1.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false

  
  
  var GmedalM = createSprite(width/2,height/2)
  GmedalM.addAnimation("color",GmedalImg);
  GmedalM.velocityX = Math.round(random(-10,10))
  GmedalM.velocityY = Math.round(random(-10,10))
  GmedalM.scale = 0.04
  GmedalM.scale = GmedalM.scale + 0.3
  GmedalM.scale = GmedalM.scale + 0.01
  GmedalM.lifetime = 100

  Gmedal.changeAnimation("color")
  Gmedal.scale = 0.34
  //Gmedal.x = Bmedal.x
  Gmedal.y = Bmedal.y
  if(keyDown("k")){
    //Gmedal.velocityX = 0
    //Gmedal.velocityY = 0
    //Gmedal.scale = Gmedal.scale + 0.2
    gameState = end
  }
}
if(gameState === end){
  trophy.visible = true
  background(endBg)

  
  PRB.x = width/2
  PRB.y = height/4

  litterB.y = PRB.y
  plantB.y = litterB.y + 10
  Bmedal.y = PRB.y + 5
  Gmedal.y = Bmedal.y

  litterB.x = PRB.x - 240
  plantB.x = litterB.x + 120
  Bmedal.x = PRB.x + 120
  Gmedal.x = Bmedal.x + 120

  
  textAlign(CENTER)
  textFont("Castellar")
  fill("gold")
  textSize(30)
  stroke(rgb(66.67,43.35,22.35))
  text("Amazing! You have collected all the badges! \n\n\n\n\nIf you want to play again, you can press 'r' to retry!\n\nTry to do this in real life just like this game!",width/2,height/7)

  if(keyDown("r")){
    reset();
  }
}
  drawSprites();
}

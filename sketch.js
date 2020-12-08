var monkey , monkey_running
var banana ,bananaImage,obstacleImage
var ground
var bananaGroup, obstacleGroup
var survivaltime = 0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(60,300,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(300,395,1200,10);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function draw() {
  background("white");
    
    ground.velocityX = -4;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }  

    if(keyDown("space")&& monkey.y >= 150) {
      monkey.velocityY = -12;
    }

    if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
    }
    
    monkey.velocityY = monkey.velocityY+1;

    monkey.collide(ground);
    
    spawnBanana();
    spawnObstacles();    
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
}


function spawnObstacles(){
 if (frameCount % 90 === 0){
   var obstacle = createSprite(600,360,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
      
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.20;
    obstacle.lifetime = 100;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

function spawnBanana() {
  //write code here to spawn the clouds
 if (frameCount % 100 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(150,250));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 100;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
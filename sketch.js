//Game States
var PLAY=1
var END=0
var gamestate=1
var score;


var sword
var swordkatana
var alienGroup,alien1,alien2
var fruitsGroup,fruit1,fruit2,fruit3,fruit4
var gameover
var gameoverIMG
var gameoverMP3

function preload(){
  swordkatana=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
  gameoverIMG=loadImage("gameover.png")
  gameoverMP3=loadSound("gameover.mp3")
  
}
function setup(){
  createCanvas(400,400)
  //create sword
  sword=createSprite(40,200,20,20)
  sword.addImage(swordkatana)
  sword.scale=0.7
  
  
  fruitsGroup=new Group()
  alienGroup=new Group()
  score=0
}

function draw(){
  background(100)


  
  

  
  if(gamestate=== PLAY){
  fruits();
  alien();
  //move sword with mouse
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  }
  drawSprites();
  fill("blue")
  text("Score:"+ score, 350,50)
  
  if(fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
    score=score+1
  }
  if(sword.isTouching(alienGroup)){
    gamestate=END
    
    
  }
  if(gamestate===END){
    sword.addImage(gameoverIMG)
  // gameoverMP3.play();
    alienGroup.destroyEach();
  }
}
function fruits(){
  if (frameCount % 60 === 0){
  var fruit=createSprite(50,Math.round(random(50,350)),10,10)
  fruit.velocityX=2;
    
    //generate random fruits
    var rand=Math.round(random(1,4));
    switch(rand){
      case 1: fruit.addImage(fruit1)
        fruit.scale=0.2
        break;
        case 2:fruit.addImage(fruit2)
        fruit.scale=0.2
        break;
        case 3:fruit.addImage(fruit3)
        fruit.scale=0.2
        break;
        case 4:fruit.addImage(fruit4)
        fruit.scale=0.2
        break;
        default:break;
    }
        //assign scale and lifetime to fruits
        
        fruit.lifetime=300;
        //add each fruit to group
        fruitsGroup.add(fruit)
    }
}
  

function alien(){
  if(frameCount % 90===0){
    var alien=createSprite(50,Math.round(random(50,350)),10,10)
    alien.velocityX=2;
    //generate random aliens
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1:alien.addImage(alien1)
        break;
      case 2:alien.addImage(alien2)
        break;
        default:break;
    }
        //assign scale and lifetime to aliens
        alien.scale=0.5;
        alien.lifetime=300;
        //add each enemy to group
        alienGroup.add(alien)     
        
    }
  }


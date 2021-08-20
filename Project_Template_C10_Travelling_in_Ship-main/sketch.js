var ship 
var sea
function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png");
shipno = loadImage("ship-3.png")
poke = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,200,20,20)  
  ship.addAnimation("running",ship_running)
  ship.scale=0.3

  sea=createSprite(150,60,50,20)
  sea.addImage(poke);

  console.log(ship.depth)
  console.log(sea.depth)
  ship.depth=sea.depth
  ship.depth+=1
  sea.velocityX=-4
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
    
  }
}
function draw() {
  background("blue");
  drawSprites()
}


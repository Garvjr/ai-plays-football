var runner 
var path

function preload() {
run=loadAnimation("Runner-1.png","Runner-2.png")
road=loadImage("path.png") 
}

function setup(){
  createCanvas(400,400);

 //creating runner here
 runner = createSprite(200,300,10,10) 
 runner.addAnimation("stop",run)
 runner.scale=0.1
 
 //creating path here
 path = createSprite(200,25,20,20)
 path.addImage(road)
 path.velocityY = 4;
 path.scale=1.2
 
 //Right boundary
 invisibleRight = createSprite(26,200,20,400)
 invisibleRight.visible = false;

 //Left boundary
 invisibleLeft = createSprite(360,200,20,400)
 invisibleLeft.visible = false;

 console.log(runner.depth)
 console.log(path.depth)
 runner.depth=path.depth
 runner.depth+=1
}
drawSprites()
function draw(){ 
 background(0);

 //endless background
 if(path.y > 400){
  path.y =height/12
 }
 //movement
 runner.x=World.mouseX
 
 runner.collide(invisibleRight)

 runner.collide(invisibleLeft)
 drawSprites()
}
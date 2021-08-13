var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bfcb1114-f137-4a0e-86a3-5d64f0678b03","ee1bbd7e-57a1-4e77-8ca2-c38502c8b9b1","2644d7d0-b7d5-4898-8d21-d7bcc75f82b5"],"propsByKey":{"bfcb1114-f137-4a0e-86a3-5d64f0678b03":{"name":"football","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"ee1bbd7e-57a1-4e77-8ca2-c38502c8b9b1":{"name":"bot","sourceUrl":null,"frameSize":{"x":136,"y":157},"frameCount":2,"looping":true,"frameDelay":12,"version":"sDLgIHZCWe2Xd.GanEhxS8GxnrIC4NWH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":157},"rootRelativePath":"assets/ee1bbd7e-57a1-4e77-8ca2-c38502c8b9b1.png"},"2644d7d0-b7d5-4898-8d21-d7bcc75f82b5":{"name":"rahul","sourceUrl":"assets/api/v1/animation-library/gamelab/PTEahrkx0aqfljf7oUL8nxtxYlWq2V8h/category_people/red_hoodie_hands_in_hoodie.png","frameSize":{"x":137,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"PTEahrkx0aqfljf7oUL8nxtxYlWq2V8h","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PTEahrkx0aqfljf7oUL8nxtxYlWq2V8h/category_people/red_hoodie_hands_in_hoodie.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var gameState = "serve"


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";

var playerScore=0;
var compScore=0;


// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("football");
striker.scale =0.1;

var playerMallet = createSprite(200,70,50,10);
playerMallet.shapeColor = "black";
playerMallet.setAnimation("rahul");
playerMallet.scale =0.2;

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("bot");
computerMallet.scale =0.3;


function draw() {
  //clear the screen
  background("green");

    
 if(striker.isTouching(goal1)){
   compScore = compScore + 1;
   striker.y=200;
 striker.x=200;
 striker.velocityX=0
 striker.velocityY=0
 }
 
 if(striker.isTouching(goal2)){
   playerScore = playerScore + 1;
    striker.y=200;
 striker.x=200;
 striker.velocityX=0
 striker.velocityY=0
 }
 
 
  //make the player paddle move with the Arrow keys
  paddleMovement();
  
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  text(20);
fill("maroon");
text(compScore,25,225);
text(playerScore,25,185)

 
  
  //serve the striker when space is pressed
  if (keyDown("space")) { 
    serve();
  }
  
if(playerScore==5 || compScore==5){
  fill("maroon");
  textSize(20);
  text("GAME OVER",170,160);
}

if(gameState=="serve"){
  textSize(20);
  fill("maroon");
  text("Press Space to Strike",12,180);
}
if(keyDown("space")){
  gameState="play"
}
if(gameState=="play"){
  
}
  drawSprites();

}





function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function play() {
  
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
 
} 
background("play");




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

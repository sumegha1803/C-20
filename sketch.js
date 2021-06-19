
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(400,400,80,50);
  fixedRect1.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  function isTouching(movingRect, fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      
      return true;
    }
    function isTouching(movingRect, fixedRect){
      if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
        && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
        
        return true;
      }
      else {
        return false;
      } 
    }
    

    else {
      return false;
    } 
  }
  
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




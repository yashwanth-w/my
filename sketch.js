
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect2 = createSprite(300,400,80,30);
  fixedRect2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect2)){
    fixedRect2.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else {
    movingRect.shapeColor = "green";
    
    fixedRect.shapeColor = "green"
    fixedRect2.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}





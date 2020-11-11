var fixedRect, movingRect;
var o1, o2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,100,80,50);
  o1 =  createSprite(100,0,50,80)
  o2 =  createSprite(100,400,80,30)
  fixedRect.shapeColor = "crimson"
  movingRect.shapeColor = "crimson"
  o1.shapeColor = "pink"
  o2.shapeColor = "purple"
  o1.velocityY = 3;
  o2.velocityY = -3;
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //bounceOff
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2) {
      o1.velocityX = o1.velocityX * (-1);
      o2.velocityX = o2.velocityX * (-1);
}
if (o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){
  o1.velocityY = o1.velocityY * (-1);
  o2.velocityY = o2.velocityY * (-1);
}

  //isTouching and collide
if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor = "lime"
  movingRect.shapeColor = "lime"
}else{
  fixedRect.shapeColor = "crimson"
  movingRect.shapeColor = "crimson"
}

console.log(movingRect.x-fixedRect.x);
  drawSprites();
}
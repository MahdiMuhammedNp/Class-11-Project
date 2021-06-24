
function preload(){
  //pre-load images
  runnerAnimation = loadAnimation("Runner-2.png","Runner-1.png")
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200)
  path.addImage("path",pathImage)
  path.width = 400
  path.velocityY = +5
  path.y = height/2;


  runner = createSprite(200,200)
  runner.addAnimation("runner",runnerAnimation)
  runner.scale = 0.1;

  leftedge = createSprite(20,200,70,400)
  leftedge.visible = false

rightedge = createSprite(380,200,70,400)
rightedge.visible = false
}

function draw() {
  background("lightblue");
  runner.x = mouseX
  text(mouseX+","+mouseY, 10,10)
  path.velocityY = 5
  if(path.y > 400){
   path.y = height/2
  }
  runner.collide(leftedge)
  runner.collide(rightedge)
drawSprites();



}

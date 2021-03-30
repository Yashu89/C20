var mr, fr

function setup() {
  createCanvas(800,400);
  mr = createSprite(600,300,90,50);
  fr = createSprite(400,100,50,80)

  mr.shapeColor = "red"
  fr.shapeColor = "blue"

}

function draw() {
  background("black");  
 
  mr.x = World.mouseX
  mr.y = World.mouseY

  console.log(mr.x-fr.x)

  if(mr.x-fr.x < mr.width/2 + fr.width/2
    && fr.x-mr.x < mr.width/2 + fr.width/2
    && mr.y-fr.y < mr.height/2 + fr.height/2
    && fr.y-mr.y < mr.height/2 + fr.height/2 ){
    mr.shapeColor = "green"
    fr.shapeColor = "green"
  }
  else{
    mr.shapeColor = "red"
    fr.shapeColor = "blue"
  }



  drawSprites();
}
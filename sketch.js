
var myWorld,myEngine,groundBody;

var box1,box2;


function setup() {
  createCanvas(400, 400);
  //angleMode(DEGREES);
  //create the engine
  myEngine=Matter.Engine.create();
  //create the world
  myWorld=myEngine.world;
  
  var groundProp={
    isStatic:true
  }
  
  //create the body (1)
  groundBody=Matter.Bodies.rectangle(200,400,400,20,groundProp);
  
  
  //adding the body to the world(2)
  Matter.World.add(myWorld,groundBody);
  
  box1=new Box(240,200,50,50);
  box2=new Box(200,100,100,100);
  
}

function draw() {
  background(220);
  console.log(box2.boxBody.angle);
  text(mouseX+","+mouseY,mouseX,mouseY);
  //refresh the physics engine
  Matter.Engine.update(myEngine);
  console.log(groundBody.position.y);
  //how should ur ground look like
  rectMode(CENTER);
  rect(groundBody.position.x,groundBody.position.y,400,20);
  
  box1.display();
  
  box2.display();
  //circle(ballBody.position.x,ballBody.position.y,20);
}
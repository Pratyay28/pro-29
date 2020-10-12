const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1;



function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
 
  box1=new Box(330,235,30,40)
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  box1.display();
  drawSprites();
}
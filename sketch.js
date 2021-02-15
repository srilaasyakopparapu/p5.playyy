const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine, world 
var object1
var ball
var box1
var box2, ground1
var box3, box4
var pig1, pig2
var log1, log2
var bird1


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(700, 350, 70, 70)
  box2 = new box(920, 350, 70, 70)
  pig1 = new pig(810, 350, 50, 50)
  log1 = new log(810, 330, 300, 15, PI)
  box3 = new box(700, 240, 70, 70)
  box4 = new box(920, 240, 70, 70)
  pig2 = new pig(810, 220, 50, 50)
  log2 = new log(810, 220, 300, 15, PI)
  bird1 = new bird(100, 100, 50, 50)
  ground1 = new ground(600, 380, 1200, 20)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  box1.display()
  box2.display()
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  bird1.display();
  drawSprites();
}
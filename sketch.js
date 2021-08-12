const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var left;
var right;
var top_wall;
var btn1,btn2
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  btn1 = createImg("right.png")
  btn1.position(230,20)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)
  btn2 = createImg("up.png")
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce)
    ground =new Ground(200,590,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var ball_options = {
  restitution:0.10

  }
  
 ball = Bodies.circle(100,100,10,ball_options)
 World.add (world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
ellipse(ball.position.x,ball.position.y,10,10)
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0000})
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}
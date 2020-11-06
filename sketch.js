const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin  	= new Dustbin(750,700,2,200);
	dustbin2 	= new Dustbin(700,700,2,200);
	dustbin3	= new Dustbin(725,730,50,2);

	Engine.run(engine);
}

function draw() {
  	rectMode(CENTER);
  	background(0);
  
  	dustbin.display();
  	drawSprites();
 
}
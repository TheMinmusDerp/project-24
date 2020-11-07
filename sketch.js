const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin, dustbin2, dustbin3;
var ground;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground		= new Ground(400,700,800,20);

	dustbin  	= new Dustbin(750,740,2,50);
	dustbin2 	= new Dustbin(700,740,2,50);
	dustbin3	= new Dustbin(725,790,50,2);

	Engine.run(engine);
}

function draw() {
  	rectMode(CENTER);
  	background(0);

	dustbin.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	//drawSprites();
}
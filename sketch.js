const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
var bob1;
var bob2;
var bob3;
var bob4;
var ground;
var roof;
var roof1;
var roof2;
var roof3;
var roof4;
var roof5;
var roof6;
var roof7;
var roof8;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1250,550);


	engine = Engine.create();
	world = engine.world;

	bob=new Bob(800,100,50);
	bob1=new Bob(400,100,50);
	bob2=new Bob(500,100,50);
	bob3=new Bob(600,100,50);
	bob4=new Bob(700,100,50);
	ground=new Ground(625,530,1250,40);
	roof=new Roof(800,10,50,20);
	roof1=new Roof(700,10,50,20);
	roof2=new Roof(600,10,50,20);
	roof3=new Roof(500,10,50,20);
	roof4=new Roof(400,10,50,20);
	chain1 = new Chain(bob.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  ground.display();
  chain1.display();
  drawSprites();
 
}




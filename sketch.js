const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob,bob1,bob2,bob3,bob4;
var ground;
var roof,roof1,roof2,roof3,roof4,roof5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1250,550);


	engine = Engine.create();
	world = engine.world;

	bob=new Bob(600,300,50);
	bob1=new Bob(400,300,50);
	bob2=new Bob(450,300,50);
	bob3=new Bob(500,300,50);
	bob4=new Bob(550,300,50);
	ground=new Ground(625,530,1250,40);
	roof=new Roof(600,10,50,20);
	roof1=new Roof(550,10,50,20);
	roof2=new Roof(500,10,50,20);
	roof3=new Roof(450,10,50,20);
	roof4=new Roof(400,10,50,20);
	roof5=new Roof(500,10,300,20);
	chain1 = new Chain(roof.body,bob.body);
	chain2 = new Chain(roof4.body,bob1.body);
	chain3 = new Chain(roof3.body,bob2.body);
	chain4 = new Chain(roof2.body,bob3.body);
	chain5 = new Chain(roof1.body,bob4.body);


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
  roof5.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:5,y:-5});
   
  }
  if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:5,y:5});
   
  }
  if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:5,y:5});
   
  }
  if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:5,y:-5});
   
  }
 
 
}





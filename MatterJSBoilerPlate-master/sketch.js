
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stone, ground;
var hammer,rubber;
var iron,sand1,sand2,sand3,sand4,sand5,sand6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(400,500,150,150);
    ground = new Ground(400,600,1000,50);
    hammer = new Hammer(100,100);
	rubber = new Rubber(500,550,10);
	iron = new Iron (400,300,50,30);
	sand1 = new Sand (200,500,1);
	sand2 = new Sand (200,502,1);
	sand3 = new Sand (200,504,1);
	sand4 = new Sand (200,506,1);
	sand5 = new Sand (200,508,1);
	sand6 = new Sand (200,510,1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(rubber.position);
  stone.display();
  ground.display();
 hammer.display();
 rubber.display();
 iron.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
  drawSprites();


}




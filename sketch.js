const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	


function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	floor = new Ground(400,800,800,20);

	trashcan1 = new Dustbin(650,640,20,100);
	trashcan2 = new Dustbin(675,680,50,20);
	trashcan3 = new Dustbin(700,640,20,100);

  crumple = new Paper(100,620,20);
  
  catapult1 = new Catapult(crumple.body,{x:100,y:600});
	
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  

  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  keyPressed();

  crumple.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(crumple.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  catapult.fly();
}

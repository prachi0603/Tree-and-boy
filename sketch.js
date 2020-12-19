
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree;
var treeimg;
var stonediameter;
var boy,boyimg;
var stone1;
var mango1,mango2,mango3;

function preload()
{
	treeimg = loadImage("tree.png")
    boyimg = loadImage("boy.png")
}

function setup() {
  createCanvas(1000, 650);


  engine = Engine.create();
	world = engine.world;


	
	stone1 = new stone(100,400,23);
	
   mango1 = new mango(600,290,34);
   mango2 = new mango(855,325,35);
   mango3 = new mango(670,200,35);

   boy = createSprite(30,500,50,50)
   boy.addImage(boyimg);


  tree = createSprite(600,650,50,50) 
  tree.addImage(treeimg);

  ground = createSprite(500,625,1200,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();

detectcollision(stone1,mango1);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  attach.fly();
}



function detectcollision(stone,mango){
	mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
matter.Boy.setStatic(mango.body,false);
}

}



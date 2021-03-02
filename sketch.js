const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var trees;
var dground, tree,treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;
var attach;
function preload(){
	boyimg=loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;
   trees=new tre(775,500)
	dground=new Ground();
	stones=new Stone(100,460,20);

	mango1=new Mango(600,250-100,30);
	mango2=new Mango(855,265-100,30);
	mango3=new Mango(670,260-100,30);
	mango4=new Mango(730,281-100,30);
	mango5=new Mango(710,240-100,30);
	mango6=new Mango(780,255.0-100,30);
	mango7=new Mango(825,260.0-150,30);
	mango8=new Mango(880,260.9-140,30);
	mango9=new Mango(940,220-180,30);
	mango10=new Mango(980,305-205,30);
	


	attach=new Throw(stones.body,{x:100,y:465});

	

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);
  detectcollison(mango1,stones);
  detectcollison(mango2,stones);
  detectcollison(mango3,stones);
  detectcollison(mango4,stones);
  detectcollison(mango5,stones);
  detectcollison(mango6,stones);
  detectcollison(mango7,stones);
  detectcollison(mango8,stones);
  detectcollison(mango9,stones);
  detectcollison(mango10,stones);
  detectcollison(mango1,stones);
  detectcollison(mango1,stones);

 
  drawSprites();
  trees.display();
  boy.display();
  attach.display();
  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:600,y:150});
		attach.Launch(stones.body);
	

	}
}

function detectcollison(lmango,lstone){
	  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var box2
var ground





function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(10,480,50)

	ground=new Ground(width/2,700,width,20)



	box2=new Box(1200,600);


	
	
	
	

	

	

	


	


	



	

	
	


	
  
}


function draw() {
	
background("violet");

Engine.update(engine)
 

 
keyDownpressed();


  
drawSprites(); 




 


paper.display();
box2.display();

 
ground.display();






 
 
}
function keyDownpressed() {
	if(keyDown(UP_ARROW)){
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}
	



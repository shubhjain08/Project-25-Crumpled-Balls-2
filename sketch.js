//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
var dustbinImg, dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	dustbinImg= loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);
	dustbin= createSprite(580,545 ,150,20)
	dustbin.addImage(dustbinImg)
	dustbin.scale=0.6
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	ground= new Ground();
	ball= new Paper();
	binLeft= new Dustbin(500,580,20,200);
	binBottom= new Dustbin(580,650,150,20);
	binRight= new Dustbin(660,580,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  
  binBottom.display();
  ground.display();
  ball.display();
  binLeft.display();
  
  binRight.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:65, y:-65});
	}
}




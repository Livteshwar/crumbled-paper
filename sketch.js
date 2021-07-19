
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leg1,leg2;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
    ball=Bodies.circle(100,100,30,ball_options);
	World.add(world,ball);

	ground= new Ground (width/2,670,width,20);
	leg1 = new Ground (800,600,20,120);
	leg2 = new Ground (1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  push();
  fill(255,255,255);
  ellipse(ball.position.x,ball.position.y,30,30);
  pop();
  
  ground.show();
  leg1.show();
  leg2.show();
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Body.applyForce(ball, {x:0,y:0}, {x:80,y:-30});
	}
}


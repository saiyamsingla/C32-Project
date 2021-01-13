const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score=0;
function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
    world = engine.world;

    
   polygon1=new polygon(50,200,20,10) 
   
  ground1=new Ground(395,400,255,10);

  ground2=new Ground(665,250,250,10);

  ground3 = new Ground(width/2,480,1000,15)


  block1=new block(605,225,30,40);
  block2=new block(635,225,30,40);
  block3=new block(665,225,30,40);
  block4=new block(695,225,30,40);
  block5=new block(725,225,30,40);
  block6=new block(755,225,30,40);
  block7=new block(605,185,30,40);
  block8=new block(635,185,30,40);
  block9=new block(665,185,30,40);
  block10=new block(695,185,30,40);
  block11=new block(575,225,30,40);
  block12=new block(725,185,30,40);
  block13=new block(635,145,30,40);
  block14=new block(665,145,30,40);
  block15=new block(695,145,30,40);
  block16=new block(665,105,30,40);

  block17=new block(335,375,30,40);
  block18=new block(365,375,30,40);
  block19=new block(395,375,30,40);
  block20=new block(425,375,30,40);
  block21=new block(455,375,30,40);
  block22=new block(485,375,30,40);
  block23=new block(335,335,30,40);
  block24=new block(365,335,30,40);
  block25=new block(395,335,30,40);
  block26=new block(425,335,30,40);
  block27=new block(305,375,30,40);
  block28=new block(455,335,30,40);
  block29=new block(365,295,30,40);
  block30=new block(395,295,30,40);
  block31=new block(425,295,30,40);
  block32=new block(395,255,30,40);

sling1 =new SlingShot(polygon1.body,{x:100,y:200});

  
  


    Engine.run(engine);

}
function draw(){
    background(220);

    textSize(24);
    fill("white");
    text("Score "+score,width-300,50);


    
ground1.display();
ground2.display();



block1.display();
block1.score();

block2.display();
block2.score();

block3.display();
block3.score();

block4.display();
block4.score();

block5.display();
block5.score();

block6.display();
block6.score();

block7.display();
block7.score();

block8.display();
block8.score();

block9.display();
block9.score();

block10.display();
block10.score();

block11.display();
block11.score();

block12.display();
block12.score();

block13.display();
block13.score();

block14.display();
block14.score();

block15.display();
block15.score();

block16.display();
block16.score();

ground3.display();


block17.display();
block17.score();

block18.display();
block18.score();

block19.display();
block19.score();

block20.display();
block20.score();

block21.display();
block21.score();

block22.display();
block22.score();

block23.display();
block23.score();

block24.display();
block24.score();

block25.display();
block25.score();

block26.display();
block26.score();

block27.display();
block27.score();

block28.display();
block28.score();

block29.display();
block29.score();

block30.display();
block30.score();

block31.display();
block31.score();

block32.display();
block32.score();

polygon1.display();

sling1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});

    //it5's just like Matter.Body.setAngle when we used to pass angle argument in the constructor.
}

function mouseReleased(){
    //log1.display();
    sling1.fly();
}

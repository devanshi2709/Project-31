const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground;
var first,second,third,fourth,fifth,sixth;

var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=400;

function setup() {
  createCanvas(480,800);

  engine= Engine.create();
  world = engine.world;


  ground = new Ground(400,795,1200,20);


  //for creating the divisions
  for (var k = 75; k <=width; k=k+80){

    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));

  }

  //for creating plinko row 1 
  for (var j = 15; j <=width-10 ; j=j+50){

    plinkos.push(new plinko(j,175));

  }


}

function draw() {
  background(0);  
  Engine.update(engine);
  

  ground.display();

  for (var k = 0; k <division.length; k++){

    divisions[k].display()

  }
  

  drawSprites();
}


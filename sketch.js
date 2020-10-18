const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var object;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
    myWorld = myEngine.world;
var options={
  isStatic:true
}
    

    object=Bodies.rectangle(200,100,50,50,options);
    World.add(myWorld,object);

    console.log(object.type);
    console.log(object.position.x);
    console.log(object.position.y);

}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode (CENTER);
  rect(object.position.x,object.position.y,50,50);
  
}
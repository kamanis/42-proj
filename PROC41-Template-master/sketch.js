const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,drop,boy;
var arr=[];
var c,good,g;
function preload(){
   good=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
g=loadImage("picss.png");
}

function setup(){
 createCanvas(800,800);  
   engine=Engine.create();
world=engine.world; 
boy=new Drop(width/2,height-200,150,170,"walking_1.png");
Engine.run(engine);
changer=0;
c=createSprite(boy.body.position.x,boy.body.position.y,boy.width,boy.height);
c.addAnimation("t",good);
c.scale=0.3;
}

function draw(){
 background(0);

if(frameCount%100===0){
var rand=random(0,400);
 drop=new Drop(rand,0,30,30,"Jellyfish.jpg");
arr.push(drop);
}
for(var i=0;i<arr.length;i++){
arr[i].display();
if(arr[i].body.position.y>height){
Matter.Body.setPosition(arr[i].body,{x:random(0,width),y:0});
}
}

boy.body.isStatic=true;
boy.width=300;
boy.height=150;
//boy.display();
for(var i=0;i<20;i++){
if(frameCount%80===i){
image(g,width/2,0,180,240);
}
}
drawSprites()
}

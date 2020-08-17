class Drop{
constructor(x,y,w,h,img){
this.body=Bodies.rectangle(x,y,w,h);
World.add(world,this.body);
this.width=w;
this.img=loadImage(img);
this.height=h;
}
display(){

push();
 var angle=this.body.angle;
translate(this.body.position.x,this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.img,0,0,this.width,this.height);
pop();
}
}
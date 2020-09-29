class Box{
  constructor(x,y,width,height){
    var boxProp={
     restitution:0.8,
      density:1.2,
      friction:0.7
    }
        this.boxBody=Matter.Bodies.rectangle(x,y,width,height,boxProp);
    this.width=width;
    this.height=height;

    Matter.World.add(myWorld,this.boxBody);

  }
  display(){
    var angle=this.boxBody.angle;
    var pos=this.boxBody.position;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
  
  
}
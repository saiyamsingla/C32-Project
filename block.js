class  block
{
    constructor(x,y,width,height)
    {

    var options={
        
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
    };
        
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        this.Visibility=255;

        this.color=color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body);
    }

    display()
    {
    var pos = this.body.position;
    var angle=this.body.angle;// captures the angle at which the body falls. anngles is meausered in radians

  

    if(this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,this.width, this.height);
        pop();
    }
    else{
        World.remove(world, this.body);
       console.log(this.Visibility)
        push();
        this.Visibility = this.Visibility - 5;
        
    
        pop();
        }
    }
    score(){
if(this.Visibility<0 && this.Visibility>-105){
score++
}
    }
    }


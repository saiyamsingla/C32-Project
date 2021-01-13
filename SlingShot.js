class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
        };
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        //bodyA : bird
        //pointB: some point (x=200,y=100)
        //keyword --> null --> mtlb khaali
        //null means NOTHING in javascript

        this.sling.bodyA = null; //constraint (this.sling) ke bodyA ko null kr rhe ho
    }

    display(){
//error: you are trying to access the position off a null (empty) body in line 29

if(this.sling.bodyA){    //means body A mei bird hai
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}
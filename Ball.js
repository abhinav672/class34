class Ball {
    constructor(x,y,radius){
        var options={
            restitution :1,
            frictionAir :0.005,
            density : 1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius   
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(RADIUS)
        stroke("cyan");
        strokeWeight(3);
        fill("black");
        ellipse(0,0,this.radius);
        pop() 
    }
}
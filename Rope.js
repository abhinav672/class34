class Rope {
    constructor(bodyA,pointB){
        var options= {
            bodyA :bodyA,
            pointB : pointB,
            stifness : 1,
            length :250
        }
        this.rope=Matter.Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.rope)   
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;

        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}
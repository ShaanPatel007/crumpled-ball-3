class Catapult{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.cata = Constraint.create(options);
        World.add(world, this.cata);
    }

    fly(){
        this.cata.bodyA = null;
    }

    display(){
        if(this.cata.bodyA){
            var pointA = this.cata.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}
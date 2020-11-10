class SlingShot{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingIMG1 = loadImage("sprites/sling1.png");
        this.slingIMG2 = loadImage("sprites/sling2.png");
        this.slingIMG3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    image(this.slingIMG1,250,28);
    image(this.slingIMG2,222,20);
    
        if(this.sling.bodyA){
            if(this.sling.bodyA.position.x<270){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(7);
                stroke(48,22,8);
                line(240,50,pointA.x-15,pointA.y);
                line(280,50,pointA.x+20,pointA.y);
                image(this.slingIMG3,pointA.x-25,pointA.y-15,15,40);            
            }
            else{
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(3);
                stroke(48,22,8);
                line(240,50,pointA.x-15,pointA.y);
                line(280,50,pointA.x+20,pointA.y);
                image(this.slingIMG3,pointA.x+15,pointA.y-15,15,40);
            }

        }
        
    }
    
}
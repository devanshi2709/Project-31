class plinko {

    constructor(x,y,radius,options){
    
    var options ={
        isStatic : true,
        restitution: 0.3,
        density: 1.2,
        friction:0.5
    }
    
    this.body= Bodies.circle(x,y,radius/2,options); 
    this.radius= radius;
     World.add(world,this.body);
    }
    
    display(){
    
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
    
    };
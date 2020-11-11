class particle {

    constructor(x,y,options){
    
    var options ={
        isStatic : false,
        restitution: 0.3,
        density: 1.2,
        friction:0.5
    }
    
    this.body= Bodies.circle(x,y,radius/2,options); 
    this.radius= 8;
    this.color= color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body);
    }
    
    display(){
    
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
    
    };
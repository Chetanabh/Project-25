class Paper {

constructor(x,y,r){
    var options ={
        isStatic : false ,
        restitution : 0.3,
        friction : 0,
        density : 1.2

    }
    this.x=x;
    this.y=y;
    this.r=r;
    ellipseMode(RADIUS);
    this.body = Bodies.circle(x, y,this.r-20, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
}
display(){
    push();
    var angle = this.body.angle;
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    imageMode(CENTER);
    image(this.image,0,0,this.r);
    pop();
}
}
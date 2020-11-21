class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 10;
    this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      

      push();
      rectMode(CENTER);
      fill("red");
      ellipseMode(RADIUS);
      stroke("green")
      ellipse(pos.x,pos.y,20,20);
      pop();
    }
  };
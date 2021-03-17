class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y , radius, options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill("green");
      ellipse(0,0,0);
      pop();
    }
  };
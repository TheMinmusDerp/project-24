class Paper {
    constructor(x, y, diameter) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.ellipse(x, y, diameter, diameter, options);
      this.diameter = diameter;
      fill("red");
      World.add(world, this.body);
    }
    
    display(){
      var angle = this.body.angle;
      push();
      //fill("red")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
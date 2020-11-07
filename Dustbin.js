class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    fill("red");
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("red");
    rotate(angle);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
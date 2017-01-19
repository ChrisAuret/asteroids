function Laser(pos, angle) {

  this.pos = createVector(pos.x, pos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    var c = color(255, 204, 0);
    stroke(c);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);

    if(d < asteroid.r){
      console.log("hit");
    }
  }
}
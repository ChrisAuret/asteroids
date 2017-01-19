function Asteroid(){
  this.pos = createVector(random(width), random(height));
  this.r  = random(15, 50);
  this.total = floor(random(5, 15));
  this.offset = []
  for (var i=0; i<this.total; i++){
    this.offset[i] = random(-5,8);
  }
  this.vel = p5.Vector.random2D();

  this.update = function(){
    this.pos.add(this.vel)
  }

  this.render = function() {
    push();
    
    stroke(255); noFill();
    translate(this.pos.x, this.pos.y);

    beginShape();
    for(var i = 0; i < this.total; i++){
      var angle = map(i, 0, this.total, 0, TWO_PI); // 360 deg
      var r  = this.r + this.offset[i];
      var x = (r * cos(angle));
      var y = (r * sin(angle));
      vertex(x,y);
    }
    endShape(CLOSE);
    
    pop();
  }
}
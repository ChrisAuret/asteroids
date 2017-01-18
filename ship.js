function Ship() {

  this.pos = createVector(width/2, height/2);
  this.r = 10;

  this.render  = function() {

    translate(this.pos.x, this.pos.y);

    var c = color(255, 204, 0); 
    fill(c);
    noStroke();

    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }
}
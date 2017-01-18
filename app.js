
var ship;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();

}

function draw() {
  background(0);
  ship.turn();
    ship.render();
}

function keyReleased(){
  ship.setRotation(0);
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }
}


var red=0;
var green=0;
var blue=0;
var bsize=50;
function setup() {
  createCanvas(1200,800);
 background(500);
}
function draw() {
 
  noStroke();
  fill(red,green,blue);
  if(mouseIsPressed)
  {
    ellipse(mouseX,mouseY,bsize,bsize);
  }
}
function myFunction(r,g,b)
{
 red=r;
green=g;
blue=b;
}
function brush(b)
{
 bsize=b*10;
}
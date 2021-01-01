hr = hour();
mm = minute();
sc = second();



scAngle = map(0, 60, 0,360);


function setup() {
  createCanvas(450, 450);

  angleMode(DEGREES);

}

function draw() {
  background("green");

  translate(200,200)
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("yellow");
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);

  stroke("blue");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);

  stroke("red");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("white");
  strokeWeight(3)
  line(0,0,105,0);
  pop();

  push();
  rotate(end2);
  stroke("blue");
  strokeWeight(9)
  line(0,0,115,0);
  pop();

  push();
  rotate(end3);
  stroke("red");
  strokeWeight(7)
  line(0,0,75,0);
  pop();

 
   
  drawSprites();
}

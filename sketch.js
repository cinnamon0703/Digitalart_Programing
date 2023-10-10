var song; 
let cnv, d,c;
let x,y;
let K;



function setup() {
  cnv=createCanvas(1000,1000);
  cnv.mouseWheel(zoom)
  d=300;
  c=150;
  song=loadSound('gunshot.mp3');
  x=100;
  y=50;
  k=200;
  
}


function draw() {
  background(200);
  stroke(0);
  if(mouseIsPressed) {
    if(mouseButton==LEFT){
    fill(255,204,0)
   ellipse(mouseX,mouseY,d,d);}
  } else{
  fill(255)
  ellipse(mouseX, mouseY, d,d);
  }
   
  randomSeed(15);
  for(let t=0; t<10; t++) {
  x=random(10,width);
  y=random(10,height);
  stroke(200);
  fill(k);
  ellipse(x,y,c/3,c/3);
  
  stroke(0);
  rect(mouseX, mouseY,0.5,c);
  rect(mouseX, mouseY,0.5,-c);
  rect(mouseX, mouseY, c, 0.5);
  rect(mouseX, mouseY, -c, 0.5);
  
 
  
    
  }
}


function zoom() {
  if (event.deltaY > 0) {
    d = d - 40;
  } else {
    d = d + 40;
  }
  
  if (event.deltaY > 0) {
    c = c - 20;
  } else {
    c = c +20;
  }
}

function mousePressed() {
  if(mouseButton==LEFT){
  song.play();
  song.setVolume(0.4);
  }
}




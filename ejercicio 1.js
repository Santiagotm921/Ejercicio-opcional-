function setup(){
  creativeCanvas(500,500);
    posx=250;
    posy=10;
  
  
  }
  
  function draw(){
    
    background(0);
    fill(255,0,0);
    ellipse(posx,posy,30,30);
    posy+=2;
    if(posy==500){posy=0;}
    
  
  }
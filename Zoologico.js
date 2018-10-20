let leon;
let leonSin;
let mariposa;
let mariposaSin;
let mico;
let micoSin;
let oso;
let osoSin;
let pelicano;
let pelicanoSin;
let pinguino;
let pinguinoSin;
let tigre;
let tigreSin;
let zorro;
let zorroSin;
let zoologico;

let pantalla;




function setup() {

  creativeCanvas(1200,700);

  leon=loadImage("leon.png");
  leonSin=loadImage("leonSinFondo.png");
  mariposa=loadImage("mariposaSinFondo.png");
  mariposaSin=loadImage("mariposaSinFondo.png");
  mico=loadImage("mico.png");
  micoSin=loadImage("micoSinFondo.png");
  oso=loadImage("oso.png");
  osoSin=loadImage("osoSinFondo.png");
 tigre=loadImage("tigre.png");
 tigreSin=loadImage("tigreSinFondo.png");
 zorro=loadImage("zorro.png");
 zorroSin=loadImage("zorroSinFondo.")
  

}

function draw() {
  background(0);

  switch(pantalla){
    case 0:
      background(0);
    fill(255);
  
    textSize(200);
    text("Bienvenido",100,400);
    
    textSize(50);
    text("jugar",1000,500);
    textSize(20);
                  text("mouseX:" + mouseX + ", mouseY:" + mouseY, mouseX, mouseY);
              break;  
              
          case 1:
          
          background(255,255,0);
          
    image(zoologico,400,0);
    image(mico,0,0);
    image(mariposa,200,0);
    image(zorro,0,170);
    image(oso,200,170);
    image(leon,0,170+170);
    image(pinguino,200,170+170);
    image(tigre,0,170*3);
    image(pelicano,200,170*3);
    
    
    
    
    
    
    
    
                    text("mouseX:" + mouseX + ", mouseY:" + mouseY, mouseX, mouseY);
  
          }
  
  
  }
  
  void mousePressed(){
  
  if(pantalla==0 && mouseX>=990 && mouseX<=1100 && mouseY>=460 && mouseY<=513){
  pantalla++;}
  
  if(mouseX>=0 && mouseX<=193 && mouseY>=0 && mouseY<=170){image(micoSin,679,504);}
  if(mouseX>=204 && mouseX<=390 && mouseY>=0 && mouseY<=170){image(mariposaSin,555,90);}
  if(mouseX>=0 && mouseX<=175 && mouseY>=175 && mouseY<=340){image(zorroSin,533,230);}
  if(mouseX>=200 && mouseX<=391 && mouseY>=182 && mouseY<=340){image(osoSin,671,175);}
  if(mouseX>=0 && mouseX<=182 && mouseY>=340 && mouseY<=508){image(leonSin,859,124);}
  if(mouseX>=203 && mouseX<=258 && mouseY>=340 && mouseY<=508){image(pinguinoSin,1100,514);}
  if(mouseX>=0 && mouseX<=193 && mouseY>=524 && mouseY<=674){image(tigreSin,765,359);}
  if(mouseX>=203 && mouseX<=258 && mouseY>=524 && mouseY<=674){image(pelicanoSin,1090,260);}
  
  
  
  
  
  
  
  
  }
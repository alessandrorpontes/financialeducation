var tela = 1;
var maça = 5;
var limao = 3;
var laranja = 2;
var pera = 6;
var kiwi = 30;
var uva = 2;
var largura = 300;
var altura = 100;
var xMenu = 210;
var yGame = 127;
var yTuto = 237;
var yAbout = 347;
var l = 80;
var a = 45;
var ySeta = 5;
var xSeta = 9;
var x = 10;
var y = 220;
var img = [];
var cont = 0;
var cont2 = 0;
var tempo = 0;
var macaComprada = 0;
var larComprada = 0;
var limComprado = 0;
var peraComprada = 0;
var kiwiComprado = 0;
var uvaComprada = 0;
var estado = "leitura";
var nome = "oi";

function preload(){
  img[0] = loadImage('chibiwalk_000.png');
  img[1] = loadImage('chibiwalk_001.png');
  img[2] = loadImage('chibiwalk_002.png');
  img[3] = loadImage('chibiwalk_003.png');
  img[4] = loadImage('chibiwalk_004.png');
  img[5] = loadImage('chibiwalk_005.png');
  img[6] = loadImage('chibiwalk_006.png');
  img[7] = loadImage('chibiwalk_007.png');
  img[8] = loadImage('chibiwalk_008.png');
  img[9] = loadImage('chibiwalk_009.png');
  img1 = loadImage('tela1.png');
  img2 = loadImage('tela6.png');
  img3 = loadImage('images.png');
  img4 = loadImage('cidade1.jpg');
  img5 = loadImage('cidade2.jpg');
  img6 = loadImage('supermercado.jpg');
  img7 = loadImage('seta.png');
  img8 = loadImage('balao.png');
  img9 = loadImage('tela7.png');
  img10 = loadImage('tela8.png');
  img11 = loadImage('cupom.png');
  img12 = loadImage('barraca.png');
  img13 = loadImage('balao1.png');
  img14 = loadImage('seta1.png');
  img15 = loadImage('2.png');
  img16 = loadImage('5.png');
  img17 = loadImage('10.png');
  img18 = loadImage('20.png');
  img19 = loadImage('50.png');
  img20 = loadImage('100.png');
  img21 = loadImage('vitoria.png');
  img22 = loadImage('derrota.png');
}
function setup() {
  createCanvas(625, 500);
}
 
function draw() {
  
  // Tela de Menu
  if(tela == 1) {
  image(img1, 0,0);
  // Menu com 3 Opções 
  if( mouseX > xMenu - 40 && mouseX < xMenu - 40 + largura && mouseY > yGame && mouseY < yGame + altura){  
    noStroke();
    noFill(); 
    rect(xMenu - 40, yGame + 10 , largura, altura);
    if(mouseIsPressed){
      tela = 2;
      x = 10;
    }
  }
  // Tutorial do Jogo
  if( mouseX > xMenu  && mouseX < xMenu - 40 + largura && mouseY > yTuto + 35 && mouseY < yTuto + 35 + altura){
    noStroke();
    noFill();
    rect(xMenu  , yTuto + 35 , largura - 75, altura);
    if(mouseIsPressed){
      tela = 6;
    }
  }  
  // Informações do Jogo
    if( mouseX > xMenu - 45 && mouseX < xMenu - 45 + largura && mouseY > yAbout + 45 && mouseY < yAbout + 45 + altura){
    noStroke();
    noFill();
    rect(xMenu - 45 , yAbout + 45, largura, altura);
    if(mouseIsPressed){
      tela = 7;
    }
  }  
}
  // Jogo em Ação 1
  else if(tela == 2){
    background(255);
    image(img7, 5, 9);
    image(img4, 0, 120,625, 254);
    image(img8, x + 60, y - 100, 280, 120);
    textSize(15);
    textStyle(BOLD);
    fill(0);
    text("Olá!", x + 190, y - 85, 280, 120);
    text("Eu sou a Aurora. Que tal vir comigo? Preciso de sua ajuda no supermercado. Basta seguir em frete.", x + 120, y - 66, 200, 120);
    if(keyIsDown(LEFT_ARROW))
      x-=5;
    if(keyIsDown(RIGHT_ARROW))
      x+=5;
    tempo++
    image(img[cont%10],x,y,120,150);
  if(tempo>5) {
     cont++;
     tempo=0;  
  }
  if(x>180){
    image(img13,x - 280, y - 100, 335, 120);
    text("Enquanto caminhamos, você pode      me contar seu nome e eu aproveito para te explicar melhor o que nós iremos fazer lá.", x - 258, y - 80, 280, 120);
  }
  if(x>625){
    tela = 3;
    x = 5;
  }
       if( mouseX > xSeta && mouseX < xSeta + l && mouseY > ySeta && mouseY < ySeta + a){
    noStroke();
    noFill();           
    rect(xSeta - 3, ySeta + 3, l + 2, a);
    if(mouseIsPressed){
      tela = 1;
    }
  }
}  
  // Jogo em Ação 2
  else if(tela == 3){
    background(255);
    if(estado =="leitura"){
    nome = prompt("Digite o seu primeiro nome:");
    estado = "exibir";
  }
    if(estado == "exibir"){
    image(img5, 0, 120,625, 254);
     if(keyIsDown(LEFT_ARROW))
      x-=5;
    if(keyIsDown(RIGHT_ARROW))
      x+=5;
    tempo++
    image(img8, x + 65, y - 85, 310, 110);
    text("Gostei do seu nome, " + nome +".", x+119, y-55);
    text("Nós temos R$50,00 e precisamos comprar 1 kg de cada fruta que         vende no supermercado.", x+120, y-43, 300, 85);
    image(img[cont%10],x,y,120,150);
  if(tempo>5) {
     cont++;
     tempo=0;  
  }
 if(x>625){
    tela = 4;
    x = 10;
 }if(x<0){
   tela = 2
   x = 620;
  }
 }      
} 
  // Jogo em Ação 3
  else if(tela == 4){
    background(255);
    image(img6, 0, 120,625, 254);
     if(keyIsDown(LEFT_ARROW))
      x-=5;
    if(keyIsDown(RIGHT_ARROW))
      x+=5;
    tempo++
    image(img8,x + 65, y - 90, 250, 80);
    text("Chegamos! Vamos até a porta.", x + 120, y - 65, 200, 80);
    image(img[cont%10],x,y,120,150);
  if(tempo>5) {
     cont++;
     tempo=0;  
  }
 if(x>370){
    tela = 5;
 }if(x<0){
   tela = 3;
   x = 620;
 }      
} 
  // Jogo em Ação 4
  else if(tela == 5){
    background(255); 
    image(img12, 0, 0);
    image(img11, 460, 155, 195, 200);
    if( mouseX > xMenu - 174 && mouseX < xMenu + largura - 319 && mouseY > yGame + 162 && mouseY < yGame + 107 + altura){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu - 174, yGame + 162, largura - 145, altura - 55);
    if(mouseIsPressed){  
      textSize(18);
      text("R$"+maça+",00", 525, 185);
      macaComprada = 1;
  }
}  
    if( mouseX > xMenu - 12  && mouseX < xMenu - 7  + l  && mouseY > yGame + 178 && mouseY < yGame + 161 + a){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu - 12, yGame + 178, l + 5, a - 17);
    if(mouseIsPressed){   
      textSize(18);
      text("R$"+limao+",00", 525, 204);
      limComprado = 1;
  }
} 
    if( mouseX > xMenu - 12 && mouseX < xMenu - 7 + l && mouseY > yGame + 121 && mouseY < yGame + 104 + a){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu - 12 , yGame + 121, l + 5, a - 17);
    if(mouseIsPressed){     
      textSize(18);
      text("R$"+laranja+",00", 525, 223);
      larComprada = 1;
  }
}
    if( mouseX > xMenu + 80  && mouseX < xMenu + 58 + l && mouseY > yGame + 178 && mouseY < yGame + 161 + a){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu + 80 , yGame + 178, l - 22, a - 17);
    if(mouseIsPressed){     
      textSize(18);
      text("R$"+pera+",00", 525, 242);
      peraComprada = 1;
  }
}
     if( mouseX > xMenu + 142 && mouseX < xMenu + 157 + l && mouseY > yGame + 123 && mouseY < yGame + 96 + a){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu + 142 , yGame + 123, l + 15, a - 27);
    if(mouseIsPressed){    
      textSize(18);
      text("R$"+kiwi+",00", 525, 261);
      kiwiComprado = 1;
  }
}
    if( mouseX > xMenu + 141 && mouseX < xMenu + 174 + l && mouseY > yGame + 173 && mouseY < yGame + 163 + a){  
    stroke(0);
    fill(150, 150, 150, 100); 
    rect(xMenu + 141, yGame + 173, l + 33, a - 10);
    if(mouseIsPressed){     
      textSize(18);
      text("R$"+uva+",00", 525, 280);
      uvaComprada = 1;
  }
 } 
    if(macaComprada == 1 && limComprado == 1 && larComprada == 1 && peraComprada == 1 && kiwiComprado == 1 && uvaComprada == 1){
      tela = 5.1;
 }
}    
  //Fixando compras na tela
  if(macaComprada == 1){
    textSize(18);
    text("R$"+maça+",00", 525, 185);
  }
  if(limComprado == 1){
    textSize(18);
    text("R$"+limao+",00", 525, 204);
  }  
  if(larComprada == 1){     
      textSize(18);
      text("R$"+laranja+",00", 525, 223);    
  }
  if(peraComprada == 1){     
      textSize(18);
      text("R$"+pera+",00", 525, 242);
  }
  if(kiwiComprado == 1){    
      textSize(18);
      text("R$"+kiwi+",00", 525, 261);   
  }
  if(uvaComprada == 1){     
      textSize(18);
      text("R$"+uva+",00", 525, 280);   
  }
  if(tela == 1|| tela == 2){
    macaComprada = 0;
    uvaComprada = 0;
    kiwiComprado = 0;
    peraComprada = 0;
    larComprada = 0;
    limComprado = 0;
  }
  // Jogo em Ação 5
  else if(tela == 5.1){
    background(255);
    stroke(0);
    fill(0);
    image(img11, -60, 0, 480, 500);
    image(img[9], 325, 280, 100, 150);
    image(img8, 330, 150, 300, 150);
    textSize(45);
    text("R$"+maça+",00", 70, 74);
    text("R$"+limao+",00", 70, 123);
    text("R$"+laranja+",00", 70, 172);
    text("R$"+pera+",00", 70, 218);
    text("R$"+kiwi+",00", 70, 266);
    text("R$"+uva+",00", 70, 313);
    text("Total:", 70, 410);
    text("R$", 70, 460)
    text(maça+limao+laranja+pera+kiwi+uva+",00", 128, 460);
    textSize(18);
    text("Agora eu preciso que você me mostre qual vai ser o nosso troco, lembrando que temos R$50,00", 410, 170, 200, 250);
    if( mouseX > xSeta + 490 && mouseX < xSeta + 492 + l && mouseY > ySeta +440 && mouseY < ySeta + 440 + a){
    noStroke(0);
    noFill();           
    rect(xSeta + 490, ySeta + 440, l + 2, a);
    if(mouseIsPressed){
      tela = 5.2;
  }
 }
    image(img14, 497, 445);
}
  // Jogo em Ação 6
  else if(tela == 5.2){
    background(255)
    image(img15, 75, 50);
    image(img16, 75, 200);
    image(img17, 75, 350);
    image(img18, 350, 50);
    image(img19, 350, 200);
    image(img20, 350, 350);
    
    if( mouseX > xMenu - 140 && mouseX < xMenu - 230 + largura && mouseY > yGame - 80 && mouseY < yGame - 65 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu - 140, yGame - 80, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.3;
    }
  }
    if( mouseX > xMenu - 140 && mouseX < xMenu - 230 + largura && mouseY > yGame + 70 && mouseY < yGame + 85 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu - 140, yGame + 70, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.4;
    }
  }
    if( mouseX > xMenu - 140 && mouseX < xMenu - 230 + largura && mouseY > yGame + 220 && mouseY < yGame + 205 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu - 140, yGame + 220, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.4;
    }
  }
    if( mouseX > xMenu + 135 && mouseX < xMenu + 45 + largura && mouseY > yGame + 220 && mouseY < yGame + 205 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu + 135, yGame + 220, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.4;
    }
  }
    if( mouseX > xMenu + 135 && mouseX < xMenu + 45 + largura && mouseY > yGame + 70 && mouseY < yGame + 85 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu + 135, yGame + 70, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.4;
    }
  }
    if( mouseX > xMenu + 135 && mouseX < xMenu + 45 + largura && mouseY > yGame - 80 && mouseY < yGame - 65 + altura){  
    stroke(0);
    noFill(); 
    rect(xMenu + 135, yGame - 80, largura - 90, altura + 15);
    if(mouseIsPressed){
      tela = 5.4;
    }
  }
}
  // Jogo em Ação 7
  else if(tela == 5.3){
    image(img21, 0, 0);
    if( mouseX > xMenu +100 && mouseX < xMenu + 100 + largura && mouseY > yGame +200 && mouseY < yGame + 160 + altura){  
    noStroke();
    noFill(); 
    rect(xMenu + 100, yGame +200 , largura, altura - 40);
    if(mouseIsPressed){
      tela = 2;
      x = 10;
    }
  }
      if( mouseX > xMenu - 155 && mouseX < xMenu - 305 + largura && mouseY > yGame +200 && mouseY < yGame + 160 + altura){  
    noStroke();
    noFill(); 
    rect(xMenu - 155, yGame +200 , largura - 150, altura - 40);
    if(mouseIsPressed){
      tela = 1;
    }
  }
  }
  // Jogo em Ação 8
  else if(tela == 5.4){
    image(img22, 0, 0);
    if( mouseX > xMenu +135 && mouseX < xMenu + 95 + largura && mouseY > yGame +50 && mouseY < yGame + 50 + altura){  
    noStroke();
    noFill(); 
    rect(xMenu + 135, yGame +50 , largura - 40, altura );
    if(mouseIsPressed){
      tela = 5.2;
    }
  }
}
  // Tutorial
  else if(tela == 6){
   image(img2, 0, 0);
  if( mouseX > xSeta && mouseX < xSeta + l && mouseY > ySeta && mouseY < ySeta + a){
    noStroke();
    noFill();           
    rect(xSeta, ySeta, l, a);
    if(mouseIsPressed){
      tela = 1;
  }
 }
}
  // Sobre o Jogo
  else if(tela == 7){
    image(img9, 0, 0);
         if( mouseX > xSeta - 10 && mouseX < xSeta - 10 + l && mouseY > ySeta - 5 && mouseY < ySeta - 5 + a){
    noStroke();
    noFill();           
    rect(xSeta - 10, ySeta - 5, l, a);
    if(mouseIsPressed){
      tela = 1;
    }
  }
    
    if( mouseX > xSeta + 520 && mouseX < xSeta + 520 + l && mouseY > ySeta - 5 && mouseY < ySeta - 5 + a){
    noStroke();
    noFill();           
    rect(xSeta + 520, ySeta - 5, l, a);
    if(mouseIsPressed){
      tela = 8;
    }
  }   
}
  // Sobre o Jogo 2
  else if(tela == 8){
    image(img10, 0, 0);
    
    if( mouseX > xSeta -3 && mouseX < xSeta + l && mouseY > ySeta + 57 + 10 && mouseY < ySeta + 57 + 10 + a){
    noStroke(0);
    noFill();           
    rect(xSeta - 3, ySeta + 57, l, a);
    if(mouseIsPressed){
      tela = 7;
   }
  }   
 }
}
//Explicação do Código:
//https://youtu.be/8_8kgLmz03U
//Mostrando o Jogo:
//https://youtu.be/7a_RoNylEIE

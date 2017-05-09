var canvas; playermovement
var ctx ("2D");
var dx = 50;
var x = 0;
var y = 0;
var WIDTH = 216;
var HEIGHT = 96;
var tile1 = new Image ("banditmoving.png");
var posicao = 0;
var NUM_POSICOES = 3;

var canvas; playermovement
var ctx ("2D");
var dx = 50;
var x = 26;
var y = 0;
var WIDTH = 216;
var HEIGHT = 96;
var tile1 = new Image ("banditmoving.png");
var posicao = 1;
var NUM_POSICOES = 3;

var canvas; playermovement
var ctx ("2D");
var dx = 50;
var x = 53;
var y = 0;
var WIDTH = 216;
var HEIGHT = 96;
var tile1 = new Image ("banditmoving.png");
var posicao = 2;
var NUM_POSICOES = 3;

var canvas; playermovement
var ctx ("2D");
var dx = 50;
var x = 78;
var y = 0;
var WIDTH = 216;
var HEIGHT = 96;
var tile1 = new Image ("banditmoving.png");
var posicao = 3;
var NUM_POSICOES = 3;

function KeyDown(evt){
    switch (evt.keyCode) {
        case 39:  /* Arrow to the right */
            if (x + dx < WIDTH){
                x += dx;
                posicao++;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;            
    }
}
function Draw() {    
    tile1.src = posicao+".png";
    ctx.drawImage(tile1, x, y);
}
function LimparTela() {
    ctx.fillStyle = "rgb(233,233,233)";    
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();    
}
function Update() {
    LimparTela();    
    Draw();
}
	function Start() {
    canvas = document.getElementById("playermovement");
    ctx = canvas.getContext("2d");
    return setInterval(Update, 100);
}
window.addEventListener('keydown', KeyDown);
Start();

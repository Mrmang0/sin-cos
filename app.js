const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 1000;
canvas.width = 1400;
context.translate(700, 500);
document.querySelector("body").appendChild(canvas);
context.strokeStyle = "rgba(255,255,255,0.3)";
context.fillStyle = "rgba(0,0,0,0.05)";

let x = 0;
let y = Math.sin(Math.log(Math.pow(2)));
let mul = 1;
function draw() {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
  context.beginPath();
  
  context.moveTo(x, y);
  
  for (let i = 0; i < 1400; i++) {
    x++;
    // y = 250 * Math.tan( Math.log(Math.pow(x*mul, 2)));
    y=250*Math.cos(x*mul/10*Math.PI*180)
    // const tmp = x/1000
    // y =100*Math.cos(Math.acos(tmp)*x*mul);
    // context.lineTo(x,y);
    context.strokeRect(x,y,1,1);

  }

  context.stroke();
  context.closePath();
  

  mul   += 0.00001000 * mul;
  x = -700;

  requestAnimationFrame(draw);
}
draw();

var canvas = document.getElementById('game');

var ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;


//draw a circle

ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true);
ctx.closePath();
ctx.fillStyle = "#d33"
ctx.fill();

//the rectangle is half transparent
ctx.fillStyle = "#aaa"
ctx.beginPath();
ctx.rect(15, 150, 120, 30);
ctx.closePath();
ctx.fill();


var x = 150;
var y = 150;
var dx = 2;
var dy = 2;

function init() {
  return setInterval(draw, 10);
}
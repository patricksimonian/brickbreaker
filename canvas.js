
(function initialize() {
  var canvas = document.getElementById('game');
  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext("2d");
  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;
  var fill = "";
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  var r = 10;
  function init() {
    return setInterval(draw, 10);
  }

  function circle(x, y, r, fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function genColor() {
    console.log('called')
    var chars = ['a', 'c', 'b', 'd'];
    var hash = '';
    hash += chars[Math.floor(Math.random() * chars.length)].toUpperCase();
    while(hash.length < 3) {
      hash += Math.floor(Math.random() * 10);
    }
    fill = `#${hash}`;
  }
  function draw() {
    clear();
    if (x > WIDTH || x < 0){
      dx = -dx;
      genColor();
    }
    if (y  > HEIGHT || y  < 0) {
      dy = -dy;
      genColor();
    }
    circle(x, y, r, fill);
    x += dx;
    y += dy;

  }
  init();

})();
//draw a circle

//the rectangle is half transparent
// ctx.fillStyle = "#aaa"
// ctx.beginPath();
// ctx.rect(15, 150, 120, 30);
// ctx.closePath();
// ctx.fill();



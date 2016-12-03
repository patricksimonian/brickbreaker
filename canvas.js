
(function initialize() {
  var canvas = document.getElementById('game');
  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext("2d");
  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  var r = Math.random();

  function init() {
    return setInterval(draw, 10);
  }

  function circle(x, y, r) {
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

  function draw() {
    clear();
    circle(x, y, 10);

    if (x + dx > WIDTH || x + dx < 0)
      dx = -dx;
    if (y + dy > HEIGHT || y + dy < 0)
      dy = -dy;

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



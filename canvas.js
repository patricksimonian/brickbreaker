
(function initialize() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext("2d");
  canvas.height = 500;
  canvas.width = 500;
  var level1 = "===========,== == ====, == == == , === === =";


  //for ball
  var x = 150;
  var y = 150;
  var r = 10;
  var dx = 2;
  var dy = 4;

  //get current level
  var game = new LevelParser().buildLevel(level1);
  var bricks = game.getCurrentLevel();

  //rectanlge x movement
  var rx = 50;
  var move = null;
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
      move = 'left';
    }
    if (e.key === 'ArrowRight') {
      move = 'right';
    }
  })
  document.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      move = null;
    }
  });

  function init() {
    return setInterval(draw, 10);
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function moveRect() {
    if(move === 'left') {
      rx+= -5;
    } else if(move === 'right') {
      rx+= 5;
    }
    //prevent brick from moving out of bounds
    if(rx <= 0) {
      rx = 0;
    } else if(rx + 100 >= canvas.width) {
      rx = canvas.width - 100;
    }
  }

  function checkHit(genBricks) {
    var rowheight = 25 + r - 2;
    var colwidth = 50;
    row = Math.floor(y/rowheight);
    col = Math.floor(x/colwidth);
    //if so, reverse the ball and mark the brick as broken
    if (y < (bricks.length /10) * (rowheight) && row >= 0 && col >= 0) {
      var brick = bricks.find( function(elm) {
        return ((elm.posX === col) && (elm.posY === row));
      });
      //if that brick exists and is flagged as not hit
      if(brick && brick.isHit === false) {
        dy = -dy;
        brick.isHit = true;
      }
    }
  }
  function draw() {
    moveRect();
    clear();
    circle(ctx, x, y, r);
    rect(ctx, rx, 450, 100, 25);
    checkHit(genBricks);
    genBricks(ctx, game.getCurrentLevel());

    // if(bricks.every(function (elm) {
    //   if(elm.isHit === true || elm.isHit === null) {
    //     return true
    //   }})) {
    //   console.log("game over!")
    // }
    //collision against wall
    if (x + dx > (WIDTH - (r - 2)) || x + dy < (r - 2)){
      dx = -dx;
    }
    if (y + dy > (HEIGHT - (r - 2)) || y + dy < (r - 2)) {
      dy = -dy;
    }
    //collision against paddle
    if (y + dy > (450 - (r  - 2)) && (x > rx && x < rx + 100)) {

      dy = -dy;
    }
    x += dx;
    y += dy;
  }

  init();

})();

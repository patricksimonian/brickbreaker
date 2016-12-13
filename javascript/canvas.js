
(function initialize() {
  var level1 = "===========,== == ====, == == == , === === =";
  var level2 = "  ==  ==  ==  ==, == == == == ===, ====     =   ";
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext("2d");
  canvas.height = 500;
  canvas.width = 500;
  var HEIGHT = canvas.height;
  var WIDTH = canvas.width;

  //for ball
  var x = .5 * WIDTH;
  var y = .5 * HEIGHT;
  var r = 10;
  var dx = 2;
  var dy = 4;

  //paddle
  var rx = .1 * WIDTH;
  var ry = .9 * HEIGHT;
  var rWidth = .2 * WIDTH;
  var rHeight = .05 * HEIGHT;
  var move = null;

  //get current level
  var game = new LevelParser(WIDTH, HEIGHT).buildLevel(level1);
  var bricks = game.getCurrentLevel();

  //event listener for moving paddle
  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
      move = 'left';
    }
    if (e.key === 'ArrowRight') {
      move = 'right';
    }
  })
  //logic used to currently move the paddle
  function movePaddle() {
    if(move === 'left') {
      rx+= -5;
    } else if(move === 'right') {
      rx+= 5;
    }
    //prevent brick from moving out of bounds
    if(rx <= 0) {
      rx = 0;
    } else if(rx + rWidth >= canvas.width) {
      rx = canvas.width - rWidth;
    }
  }

  document.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      move = null;
    }
  });

  // set game loop
  function init() {
    return setInterval(draw, 250);
  }

  //clear canvas to emulate animation
  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
  //current logic to check for brick collisions
  //is being phased out
  function checkHit() {
    var rowheight = bricks[0].height + r;
    var colwidth = bricks[0].width;
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
    movePaddle();
    clear();
    circle(ctx, x, y, r);
    //paddle
    rect(ctx, rx, ry, rWidth, rHeight);
    checkHit();
    genBricks(ctx, game.getCurrentLevel());
    willCollideWith(
      {name: 'paddle', posY: ry, posX: rx, dimY: rHeight, dimX: rWidth},
      {name: 'ball', posY: y, posX: x, radius: r, dx: dx, dy: dy}
    );

    //collision against wall
    if (x + dx > (WIDTH - r) || x + dy < r){
      dx = -dx;
    }
    if (y + dy > (HEIGHT - r) || y + dy < r) {
      dy = -dy;
    }
    //collision against paddle  ** need to add logic here to change x component of ball
    //depending on where it hit the paddle
    if (y + dy > (ry - r) && (x > rx && x < rx + rWidth)) {
      if(x > rx && x < (rx + (.25 * rWidth))){
        dx = dx > 0 ? -3 : 2;
      } else if(x > (rx + (.75 * rWidth)) && x < (rx + rWidth)) {
        dx = dx > 0 ? 3 : 2;
      }
      dy = -dy;
    }
    x += dx;
    y += dy;
  }
  //start game
  init();

})();

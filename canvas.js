
(function initialize() {
  var canvas = document.getElementById('game');
  var level1 = "===========,== == ====, == == == , === === =";


  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext("2d");
  //for ball
  var x = 150;
  var y = 150;
  var r = 10;
  var dx = 2;
  var dy = 4;
  var game = new levelParser(level1);
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
  //brick draw
  var bricks = levelParser(level1);

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
    genBricks(ctx, game);

    // if(bricks.every(function (elm) {
    //   if(elm.isHit === true || elm.isHit === null) {
    //     return true
    //   }})) {
    //   console.log("game over!")
    // }

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
//draw a circle

//the rectangle is half transparent


  // document.addEventListener('keydown', storeDown);
  // document.addEventListener('keyup', storeUp);

  // function storeDown(event) {
  //   switch (event.key) {
  //     case 'ArrowUp':
  //       keyDown.up = true;
  //       break;
  //     case 'ArrowDown':
  //       keyDown.down = true;
  //       break;
  //     case 'ArrowLeft':
  //       keyDown.left = true;
  //       break;
  //     case 'ArrowRight':
  //       keyDown.right = true;
  //       break;
  //   }
  //   makeMove();
  // }
  // function storeUp(event) {
  //   switch (event.key) {
  //     case 'ArrowUp':
  //       keyDown.up = false;
  //       break;
  //     case 'ArrowDown':
  //       keyDown.down = false;
  //       break;
  //     case 'ArrowLeft':
  //       keyDown.left = false;
  //       break;
  //     case 'ArrowRight':
  //       keyDown.right = false;
  //       break;
  //   }
  // }
  // function makeMove() {
  //   console.log(keyDown.up, keyDown.left)
  //   if(keyDown.up && keyDown.right) {
  //   } else if(keyDown.up && keyDown.left) {
  //     draw(-4, 4);
  //   } else if(keyDown.down && keyDown.left) {
  //     draw(4, -4);
  //   } else if(keyDown.down && keyDown.right) {
  //     draw(4, 4);
  //   } else if(keyDown.up) {
  //     draw(0, -4);
  //   } else if(keyDown.down) {
  //     draw(0, 4);
  //   } else if(keyDown.left) {
  //     draw(-4, 0);
  //   } else if(keyDown.right) {
  //     draw(4, 0);
  //   }
  // }

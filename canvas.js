
(function initialize() {
  var canvas = document.getElementById('game');
  var level1 = "===========,== == ====, == == == , === === =";
  var colours = [];

  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext("2d");
  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;

  //rectanlge x movement
  var rx = 50;
  var fill = "#d32";
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  document.addEventListener('keydown', moveRect)
  //brick draw
  var bricks = levelParser(level1);

  function init() {
    return setInterval(draw, 10);
  }

  function circle(x, y, r) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function rect(x,y,w,h) {
    ctx.fillStyle = "#eec"
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function moveRect(event) {
    event.stopPropagation();
    if(event.key === 'ArrowLeft') {
      rx+= -15;
    } else if(event.key === 'ArrowRight') {
      rx+= 15;
    }
  }
  function genColor() {
    var chars = ['a', 'c', 'b', 'd'];
    var hash = '';
    hash += chars[Math.floor(Math.random() * chars.length)].toUpperCase();
    while(hash.length < 3) {
      hash += Math.floor(Math.random() * 10);
    }
    return `#${hash}`;
  }
  // temp
  for(var i = 0; i < 30; i++) {
    colours.push(genColor());
  }
  function checkHit(elm) {
    var rowheight = 25;
    var colwidth = 50;
    row = Math.floor(y/rowheight);
    col = Math.floor(x/colwidth);
    //if so, reverse the ball and mark the brick as broken
    if (y < (bricks.length /10) * rowheight && row >= 0 && col >= 0) {
      var brick = bricks.find( function(elm) {
        return ((elm.posX === col) && (elm.posY === row));
      });
      if(brick && !brick.isHit) {
        dy = -dy;
        brick.isHit = true;
      }
    }
  }
  function draw() {
    clear();
    circle(x, y, 10);
    checkHit();

    bricks.forEach(function (elm, index) {
      ctx.fillStyle = colours[index];
      ctx.beginPath();
      if(elm.isHit === false) {
        ctx.rect(elm.posX * 50, elm.posY * 25, elm.width, elm.height);
      }
      ctx.closePath();
      ctx.fill();
    });
    if(rx <= 0) {
      rx = 0;
    } else if(rx + 100 >= canvas.width) {
      rx = canvas.width - 100;
    }
    rect(rx, 450, 100, 25);

    if (x + dx > WIDTH || x + dy < 0){
      dx = -dx;
    }
    if (y + dy > HEIGHT || y + dy < 0) {
      dy = -dy;
    }
    if (y + dy > 450 && (x > rx && x < rx + 100)) {

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

var colours = [];
//sprites
function circle(ctx, x, y, r) {
  ctx.fillStyle = "#d32";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(ctx, x, y, w, h) {
    ctx.fillStyle = "#eec"
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}
//colour randomization
function genColor() {
  var chars = ['a', 'c', 'b', 'd'];
  var hash = '';
  hash += chars[Math.floor(Math.random() * chars.length)].toUpperCase();
  while(hash.length < 3) {
    hash += Math.floor(Math.random() * 10);
  }
  return `#${hash}`;
}

function genBricks(ctx, level) {
  //draw all bricks that aren't hit
  level.forEach(function (elm, index) {
    ctx.fillStyle = colours[index];
    ctx.beginPath();
    if(elm.isHit === false) {
      ctx.rect(elm.posX * 50, elm.posY * 25, elm.width, elm.height);
    }
    ctx.closePath();
    ctx.fill();
  });
}
// temp for making brick colours..
(function initializeColours() {
  for(var i = 0; i < 30; i++) {
    colours.push(genColor());
  }
})();
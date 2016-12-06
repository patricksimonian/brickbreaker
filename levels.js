


//returns array of objects of level
function levelParser(level) {
  //split elements by their commas
  var array = level.split(",");
  var level = [];
  array.forEach( function(elm, index) {
    var bricks = elm.split("");
    bricks.forEach( function(elm2, index2) {
      brick = {};
      brick.posX = index2;
      brick.posY = index;
      switch(elm2) {
        case "=":
          brick.height = 25;
          brick.width = 50;
          brick.isHit = false;
          level.push(brick);
          break;
        case "":
          brick.height = 0;
          brick.width = 0;
          brick.isHit = null;
          level.push(brick);
          break;
      }
    });
  });
  return level;
}


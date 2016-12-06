
// this level parser takes in a comma seperated string and created an object dependant
// on the value of each character in the string
//==================LEGEND======================
// ',':
// is a point where the array is split and emulates a row in the 2d grid of bricks
//----------------------------------------------
// '=':
// is a brick of 25 height and 50 width
//----------------------------------------------
// ' ':
// is an empty space of 25 height and 50 width
//----------------------------------------------

function LevelParser() {
  //split elements by their commas
  this.level = [];
  this.levels = [];
  return this;
}

LevelParser.prototype.buildLevel = function(level) {
  var array = level.split(",");
  array.forEach((elm, index) => {
    var bricks = elm.split("");
    bricks.forEach((elm2, index2) => {
      brick = {};
      brick.posX = index2;
      brick.posY = index;
      switch(elm2) {
        case "=":
          brick.height = 25;
          brick.width = 50;
          brick.isHit = false;
          this.level.push(brick);
          break;
        case "":
          brick.height = 0;
          brick.width = 0;
          brick.isHit = null;
          this.level.push(brick);
          break;
      }
    });
  });
  this.levels.push(this.level);
  return this;
}

LevelParser.prototype.getCurrentLevel = function() {
  return this.level;
}

LevelParser.prototype.getAllLevels = function() {
  return this.levels;
}

LevelParser.prototype.reset = function() {
  this.level = [];
  this.levels = [];
  return this;
}
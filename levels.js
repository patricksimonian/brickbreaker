
//LevelParser
//
// constructor:
//    when instantiating this class, two empty arrays are intialized (level, levels)
//    level [] is an array holding the current template for brick layout
//    levels [[]] is a double array holding each level array into it so that (in the future)
//    one could replay a level by simply calling an element out of the array
//
//
// methods:
//
// buildLevel:
//   buildLevel takes in a string as an argument and then parses it into an array of objects
//   via the legend described below
//          ==================LEGEND======================
//          ',':
//          is a point where the string is split into a build array.
//          Each element in this array is associated with
//          a row starting from 0,0 on the canvas and
//          incrementing by the height of a brick(25)
//          ----------------------------------------------
//          '=':
//           is a brick of 25 height and 50 width
//          ----------------------------------------------
//          ' ':
//           is an empty space of 25 height and 50 width
//          ----------------------------------------------
//
//  reset:
//
//    resets the level and levels array to empty
//
//
//   getCurrentLevel:
//      returns level []
//
//
//  getAllLevels:
//
//      returns levels [[]]

function LevelParser() {
  //split elements by their commas
  this.level = [];
  this.levels = [];
  return this;
}

LevelParser.prototype.buildLevel = function(level) {
  let array = level.split(",");
  array.forEach((elm, index) => {
    let bricks = elm.split("");
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
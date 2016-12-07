//  willCollideWith()
//
//  spriteObj:
// object contains a name just for indentifiying each sprite
//
// contains position of spriteObj with respect to its origin (posX, posY)
// contains dimension of object with respect to its shape
// {
//       name: 'slider-rectangle'
//       posX: 54
//       posY: 422.2
//       dimX: 100
//       dimY: 25
// }
//
//  projectileObj:
//
// contains the objects name for identifying the projectile
// contains the position of the projectile with respect to its origin (posX, posY)
// contains the dimensino of the sprite object with respect to its origin
// contains the vertical and horizontal components of its velocity
//
// {
//   name: 'ball',
//   posX: 9,
//   posY: 3,
//   radius: 10,
//   dx: 2,
//   dy: 5,
// }

function willCollideWith(spriteObj, projectileObj) {
  //get current angle of ball;
  // adding a  (PI/2) radians to rotate the cartesian plane so that it matches the canvas's
  // cartesian plane
  let theta = Math.atan(projectileObj.dx / projectileObj.dy) + (Math.PI * .5);
  console.log("checking collision for: ", spriteObj.name);
  console.log("projectile: ", projectileObj.name, "current angle is: ",  theta);

}
function hasItCollided(dx, dy, spritePosX, spritePosY, spriteDim, HBounds, VBounds) {
  hasCollided = false;

}
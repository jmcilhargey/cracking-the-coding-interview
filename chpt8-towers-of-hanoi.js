/* Towers of Hanoi problem where you have 3 towers of N disks. Move all of the disks from start to finish. Can't put bigger disks on smaller disks. */


// Make a tower constructor to hold the disks
function Tower(numOfDisks) {
  this.stack = [];
  // Initialize the disks represented by ordered numbers
  for (var i = numOfDisks; i >= 1; i--) {
    this.stack.push(i);
  }
}

Tower.prototype.moveDisks = function(numOfDisks, bufferStack, endStack) {
  
  if (numOfDisks > 0) {
    // Move all the disks from the start (this) to the buffer
    this.moveDisks(numOfDisks - 1, endStack, bufferStack);
    // Once we get to the bottom disk, move that to the end stack
    endStack.stack.push(this.stack.pop());
    // Now take all the disks from the buffer and put them on top in the end stack
    bufferStack.moveDisks(numOfDisks - 1, this, endStack);
  }
  
  return endStack;
};


function towersOfHanoi(numOfDisks) {
  
  var gameBoard = [];
  gameBoard.push(new Tower(numOfDisks));
  gameBoard.push(new Tower(0));
  gameBoard.push(new Tower(0));
  
  return gameBoard[0].moveDisks(numOfDisks, gameBoard[1], gameBoard[2]);

}

console.log(towersOfHanoi(10));
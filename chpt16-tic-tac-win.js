/* Design an algorithm to figure out if someone has won a tic-tac-toe game */

// We assume this is a standard 3x3 board with X's and O's
// There are 3 ways to win horizontally and vertically and 2 diagonals

// One way to approach this problem is to store the board positions and check every move
// This would reduce the number of searches

function checkForWinner(board) {

  for (var i = 0; i < board[0].length; i++) {
    
    // Check rows
    if (checkLine(board[i][0], board[i][1], board[i][2])) {
      return true;
    }
    
    // Check columns
    if (checkLine(board[0][i]), checkLine(board[1][i]), checkLine(board[2][i])) {
      return true;
    }
  }
  // Check diagonals
  if (checkLine(board[0][0]), checkLine(board[1][1]), checkLine(board[2][2])) {
    return true;
  }
  if (checkLine(board[0][2]), checkLine(board[1][1]), checkLine(board[2][0])) {
    return true;
  }
  // We've checked all possibilities without a winner
  return false;
}

function checkLine(box1, box2, box3) {
  return box1 === box2 && box2 === box3;
}

// What if we have an NxN board?
// Rows and columns are the same to check except we use nested loops
// Top left to bottom right is a single loop with board[i][i]
// The diagonal going bottom left to top right shown below

/* 
  var lastRow = board.length - 1;
  var firstValue = board[lastRow][0];
  
  for (var i = 1; i < board[0].length; i++) {
    
    if (board[lastRow - i][i] !== firstValue) {
      return false;
    }
  }
  return true;
*/
/* We have a robot that starts in the upper right hand corner of a grid (0, 0) and can move right and down. Some cells though are blocked (0, which is falsy) and can't be traversed. Come up with a path to get the robot to the bottom right. */

// We can work backwards and use recursion to go from the end to the start
// You can use memoization if you want to avoid duplicate work

function FindPath() {
  this.path = [];
}

FindPath.prototype.moveTheRobot = function(maze, row, col) {
  
  if (!maze[row][col]) {
    return false;
  }
  
  var validPath = false;
  var mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;
  
  if (mazeEnd || this.moveTheRobot(maze, row, col + 1) || this.moveTheRobot(maze, row + 1, col)) {
    
    validPath = true;
    this.path.push(row + "," + col);
  }
  return validPath;
};

var newPath = new FindPath();

var matrix = [[1, 1, 0, 1, 1, 1],
              [1, 0, 0, 1, 1, 1],
              [1, 1, 0, 0, 1, 1],
              [1, 1, 1, 1, 0, 0],
              [1, 0, 1, 1, 0, 1],
              [0, 1, 0, 1, 1, 1]];

newPath.moveTheRobot(matrix, 0, 0);
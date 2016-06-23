/* We're asked to come up with a method that emulates the "paint fill" function on image editing */

// So what is this? When you click on a pixel, all surrounding pixels that are that color are converted. 
//Like if the pixel is white, and we click on it with the blue paint bucket, then all white pixels connected will convert.

// For simplicity, let's say the values for a pixel can be red "r", green "g", blue "b", and white "w"
// When a pixel is clicked, we should check the color, and then branch outward to convert any surrounding pixels
// When we run out of bounds or if we don't have any neighbors to convert, we stop recursing

function clickPixel(screenMatrix, clickedPixel, newColor) {
  
  var row = clickedPixel[0];
  var col = clickedPixel[1];

  fillPaintOnScreen(screenMatrix, row, col, screenMatrix[row][col], newColor);
  
  return screenMatrix;
}

function fillPaintOnScreen(screenMatrix, matrixRow, matrixCol, colorToChange, newColor) {
  
  if (matrixRow < 0 || matrixCol < 0 || matrixRow >= screenMatrix[0]. length || matrixCol >= screenMatrix.length) {
    // We've run out of bounds
    return false;
  }
  // We've found a matching color
  if (screenMatrix[matrixRow][matrixCol] === colorToChange) {
    // Change color
    screenMatrix[matrixRow][matrixCol] = newColor;
    // Now branch out in 4 directions (we don't include diagonals)
    fillPaintOnScreen(screenMatrix, matrixRow + 1, matrixCol, colorToChange, newColor);
    fillPaintOnScreen(screenMatrix, matrixRow - 1, matrixCol, colorToChange, newColor);
    fillPaintOnScreen(screenMatrix, matrixRow, matrixCol + 1, colorToChange, newColor);
    fillPaintOnScreen(screenMatrix, matrixRow, matrixCol - 1, colorToChange, newColor);
  } 
  return true;
}

// Test it out..

var matrix = [
  ["r", "w", "b", "b", "g", "b", "b"],
  ["w", "r", "r", "r", "b", "b", "w"],
  ["w", "b", "r", "w", "w", "r", "g"],
  ["r", "r", "r", "g", "w", "w", "g"],
  ["w", "g", "g", "g", "b", "b", "w"],
  ["r", "g", "w", "r", "r", "b", "g"],
  ["g", "b", "g", "r", "g", "r", "w"],
  ];

console.log(clickPixel(matrix, [1, 2], "w"));

/* 
[
["r", "w", "b", "b", "g", "b", "b"], 
["w", "w", "w", "w", "b", "b", "w"], 
["w", "b", "w", "w", "w", "r", "g"], 
["w", "w", "w", "g", "w", "w", "g"], 
["w", "g", "g", "g", "b", "b", "w"], 
["r", "g", "w", "r", "r", "b", "g"], 
["g", "b", "g", "r", "g", "r", "w"]
]
*/
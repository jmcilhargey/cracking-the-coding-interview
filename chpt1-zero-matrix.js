function zeroRowsAndCols(matrix) {
  
  var zerosInRows = [];
  var zerosInCols = [];
  // Use array of boolean values, could also use stack or hash table
  // Initialize values to false
  for (var i = 0; i < matrix[0].length; i++) {
    zerosInRows[i] = false;
  }
  for (var j = 0; j < matrix.length; j++) {
    zerosInCols[j] = false;
  }
  
  for (var row = 0; row < matrix[0].length; row++) {
    for (var col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        // Set index where 0 found to true
        zerosInRows[row] = true;
        zerosInCols[col] = true;
      }    
    }
  }
  
  for (var k = 0; k < zerosInRows.length; k++) {
    if (zerosInRows[k]) {
      zeroOutRow(matrix, k);
    }
  }
  for (var l = 0; l < zerosInCols.length; l++) {
    if (zerosInCols[l]) {
      zeroOutCol(matrix, l);
    }
  }
}

function zeroOutRow(matrix, row) {
  for (var i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

function zeroOutCol(matrix, col) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }  
}

console.log(zeroRowsAndCols(
  [
  [1, 4, 8, 2, 2],
  [0, 2, 5, 1, 7],
  [7, 5, 4, 5, 9],
  [6, 3, 9, 0, 3],
  [8, 2, 1, 5, 7]
   ]
));
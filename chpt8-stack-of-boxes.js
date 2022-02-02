/* We're given a stack of boxes where each box has dimensions height h, width, w and depth d. A box can be stacked on another box if the bottom box has dimensions greater than or equal to the top box. Figure out what the maximum height is for a stack when given a set of boxes. */

// We can simplify the number of comparisons by first sorting out set of boxes by 1 dimension
// Then we know we have to move through the list in a linear fashion, i.e. we sort by height and a box with 8 height will always be under a box with 6 height

// Let's say our boxes are an array of objects

function findLargestStackOfBoxes(stackOfBoxes, currIndex) {
  // The box we're currently looking at
  var currBox = stackOfBoxes[currIndex];
  // Start our sum of the max height
  var maxHeight = 0;
  // Now look at every remaining box in our stack
  for (var i = currIndex + 1; i < stackOfBoxes.length - 1; i++) {
    // First, the box has to have width and depth less than current box -- No need for height because we sorted
    if (stackOfBoxes[i].width <= currBox.width && stackOfBoxes[i].depth <= currBox.depth) {
      // Now we calculate what the height would be for all the remaining boxes if we choose this 1 box
      var heightIfBoxUsed = findLargestStackOfBoxes(stackOfBoxes, i);
      // And then compare that against what our maximum is when we choose every other combination of boxes
      maxHeight = Math.max(maxHeight, heightIfBoxUsed);
      
    }
  }
  // Don't forget to add in the height for this box
  maxHeight += currBox.height;
  
  return maxHeight;
}

var boxList = [
  { height: 7, width: 8, depth: 4 },
  { height: 4, width: 5, depth: 6 },
  { height: 1, width: 1, depth: 1 },
  { height: 2, width: 2, depth: 2 },
  { height: 9, width: 6, depth: 7 },
  { height: 4, width: 2, depth: 3 },
  { height: 6, width: 5, depth: 4 }
];

var sortedBox = boxList.sort(function(a, b) { return a.height - b.height }).reverse();

console.log(findLargestStackOfBoxes(sortedBox, 0));

// Quicksort implementation for O(n lg n) sorting

function partitionBoxes(stackOfBoxes, left, right) {
  
  var pivotValue = stackOfBoxes[Math.floor((right - left) / 2 + left)].height;
  var leftIndex = left;
  var rightIndex = right;
  
  while (leftIndex <= rightIndex) {
    
    while (stackOfBoxes[leftIndex].height < pivotValue) {
      leftIndex++;
    }
    
    while (stackOfBoxes[rightIndex].height > pivotValue) {
      rightIndex--;
    }
    
    if (leftIndex <= rightIndex) {
      
      var temp = stackOfBoxes[leftIndex];
      stackOfBoxes[leftIndex] = stackOfBoxes[rightIndex];
      stackOfBoxes[rightIndex] = temp;
      
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

function quickSortBoxes(stackOfBoxes, left, right) {
  
  if (stackOfBoxes.length > 1) {
    
    var currIndex = partitionBoxes(stackOfBoxes, left, right);
    
    if (left < currIndex - 1) {
      quickSortBoxes(stackOfBoxes, left, currIndex - 1);
    }
    
    if (right > currIndex) {
      quickSortBoxes(stackOfBoxes, currIndex, right);
    } 
  }
  return stackOfBoxes;
}

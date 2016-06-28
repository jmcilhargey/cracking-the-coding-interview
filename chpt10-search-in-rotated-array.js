/* We have an array that was sorted and then has been rotated an unknwon number of times. We need to find a value in the array */

// Normally we can find a value in O(lg n) time for a sorted array using binary search
// A trivial solution to this problem would be to search each value taking O(n)
// How can we still get O(lg n)?

// [14, 1, 4, 7, 9, 12] or [9, 12, 14, 1, 4, 7] or [4, 7, 9, 12, 14, 1] for example
// Like binary search we look at a middle element first, then we can compare that against the first element
// If the value is less than the middle, then our pivot lies to the left and the right is sorted
// If it's more, then the pivot is to the right and the left is sorted

function findValueInRotatedArray(array, searchValue) {
  
  // Get the first value in the array and set floor and ceiling as borders around the values
  var firstValue = array[0];
  var floorIndex = -1;
  var ceilingIndex = array.length;
  var middleIndex = Math.floor((ceilingIndex - floorIndex) / 2 + floorIndex);

  while (floorIndex < ceilingIndex) {
    
    if (array[middleIndex] === searchValue) {
      return middleIndex;
    }
    
    // Check middle value and then compare against the first value to figure out if pivot is on the left or right side
    if (array[middleIndex] > searchValue) {
      
      if (firstValue > searchValue) {
        ceilingIndex = middleIndex;
      } else {
        floorIndex = middleIndex;
      }
    } else {
      
      if (firstValue > searchValue) {
        floorIndex = middleIndex;
      } else {
        ceilingIndex = middleIndex;
      }
    }
    // Update middle index
    middleIndex = Math.floor((ceilingIndex - floorIndex) / 2 + floorIndex);
  }
  throw new Error("Value not found in array");
}

// Note that there is a corner case where this algorithm won't work when the first value is equal to the middle value
// In this case, then you would need to also check the end value
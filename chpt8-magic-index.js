/* Given a sorted array, find a number n such that array[n] = n. In other words, the value and the index are the same */

// Because array is sorted, we can look at middle index and compare the value we see against the index
// If the value is smaller than index, then we take that as the new floor and if it's larger, then we take it as the new ceiling

function findNumMatchingIndex(array) {
  return innerRecursiveFind(array, 0, array.length - 1);
}

function innerRecursiveFind(array, floor, ceiling) {
  
  if (floor > ceiling) {
    return -1;
  }
  var middleIndex = Math.floor((ceiling - floor) / 2 + floor);
  
  if (array[middleIndex] === middleIndex) {
    return middleIndex;
  } else if (array[middleIndex] < middleIndex) {
    innerRecursiveFind(array, middleIndex, ceiling);
  } else {
    innerRecursiveFind(array, floor, middleIndex);
  }
}
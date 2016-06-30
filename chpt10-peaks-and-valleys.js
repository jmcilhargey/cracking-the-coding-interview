/* Given an array of integers, sort the array into an alternating sequence of peaks and valleys. */

// What's a peak and valley? A peak is a value that is greater than it's neighbors and a valley is less than it's neighbors
// So we're really just dealing with elements in groups of 3
// If we break down our array into pieces of 3, we can look at them and see what we'll need to do

// Let's draw an example [4, 2, 9, 7, 1, 8, 3, 5, 4, 7, 2] - We look at 4, 2, 9 and  2, 9, 7 and 7, 1, 8 etc.
// If we sort the array first, then we can just swap elements in order so that the 2nd element of a triplet is the largest
// But do we really need to sort? We can draw some examples and test them...
// As long as the middle element in a triplet is larger than it's neighbors, we always get a peak-valley relationship regardless of order

function sortByPeaksAndValleys(array) {
  
  var maxValue;
  var temp;
  // Start at first middle value and take 2 steps each iteration so that we always hit a location where a peak should be
  for (var i = 1; i < array.length; i += 2) {
    // We calculate the max, but you could also calculate the min and make a valley
    maxValue = Math.max(array[i - 1], array[i], array[i + 1]);
    
    // If the max is not the middle value, then swap
    if (array[i - 1] === maxValue) {
      swapValues(array, i - 1, i);
    } else if (array[i + 1] === maxValue){
      swapValues(array, i, i + 1);
    }
  }
  
  return array;
}

// Note that arrays as objects are automatically passed by reference in Javascript
function swapValues(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
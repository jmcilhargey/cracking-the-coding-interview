/* Given two arrays with integers, calculate the smallest difference between 2 numbers when comparing a value in each array */

// We could compare every value in array1 against every value in array2 for O(n^2) time
// Can we do better? We should think about optimizing for O(n lg n) or O(n) time

// We don't see any way to run through the arrays once as is for O(n) time although we could sort then compare with O(n lg n)
// Will that help us? Let's draw an example

// [1, 4, 8, 15, 21, 28]
// [7, 10, 12, 17, 18, 24]

// Start by comparing 1st numbers for difference of 6 -- How do we get better?
// As long as value for array1[i] is < value for array2[j] then we increment i and keep moving up array1
// If array1[i] > array2[j] then we need to stop moving i and start moving j to see if we find another min

function getSmallestDifference(array1, array2) {
  
  
  // Default Array.sort() is alphabetically so you add callback to generate negative num for smaller value
  // Browser uses quicksort or mergesort for O(n lg n)
  var array1Sorted = array1.sort(function(a, b) { return a - b; });
  var array2Sorted = array2.sort(function(a, b) { return a - b; });
  // Initialize min and counters
  var min = Infinity;
  var i = 0;
  var j = 0;
  // Keep going while we can compare, if we overrun length of 1 array then values in longer array won't yield any better min
  while (i < array1Sorted.length && j < array2Sorted.length) {

    if (Math.abs(array1Sorted[i] - array2Sorted[j]) < min) {
      min = Math.abs(array1Sorted[i] - array2Sorted[j]);
    }
    
    if (array1Sorted[i] < array2Sorted[j]) {
      i++;
    } else {
      j++;
    }
  }
  return min;
}
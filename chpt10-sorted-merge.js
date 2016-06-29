/* You are given 2 sorted arrays A and B. Write a method to merge B into A in order. */

// In the book example, A is a pre-allocated array with a size for all elements in A and B
// In Java and C++, arrays are often created with pre-defined length
// In Javascript, arrays are dynamic and their size can change as elements are added and removed
// This is a subproblem of the merge sort algorithm

function mergeTwoArrays(array1, array2) {
  
  // Keep track of all our indices
  var array1Index = 0;
  var array2Index = 0;
  var mergedArray = [];
  var mergedIndex = 0;
  
  // We only want to compare and merge while we still have elements in both arrays
  while (array1Index <= array1.length - 1 && array2Index <= array2.length - 1) {
    if (array1[array1Index] <= array2[array2Index]) {
      // Note that we assign the value to the merged array and then post-increment the index
      mergedArray[mergedIndex++] = array1[array1Index++];
    } else {
      mergedArray[mergedIndex++] = array2[array2Index++];
    }
  }
  // Now we've got the array based on comparisons
  // But what if the arrays are of different lengths? Then we'll need to append the elements left over from the longer array
  // We could figure out which array is longer or just do it this way
  return mergedArray.concat(array1.slice(array1Index)).concat(array2.slice(array2Index));
  
}
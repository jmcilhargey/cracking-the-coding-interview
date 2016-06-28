/* We're given 4 kilobytes of memory to write a program to print all duplicate entries in an array from 1 to N where N is at most 4,000 */

// Only 4 KBs of memory means that we won't be able to store every number from 1 - 4000 in an object or standard array
// We don't care how many times a number is duplicate, so we can use an Int8Array that uses 1 byte per element to store 0's if we haven't seen it and 1's if we have seen it
// In the book using Java, they are able to use bit vectors which take up 1 bit (1/8 byte) per element

function findAllDuplicates(arrayOfInts, rangeOfNums = 4000) {
  
  // Initialize integer 8 bit array with 0's at every index 
  var intsSeenSoFar = new Int8Array(rangeOfNums);

  for (var i = 0; i < arrayOfInts.length; i++) {
    // Look at index corresponding to value in input array and determine if already seen
    if (intsSeenSoFar[arrayOfInts[i]] !== 0) {
      console.log(arrayOfInts[i]);
    } else {
      intsSeenSoFar[arrayOfInts[i]] = 1;
    }
  }
}
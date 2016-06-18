/* Given a binary number, find the next largest and next smallest number with the same number of 1s and 0s */

// If possible, will be within the same power of 2 -- No increase to total digits
// To maintain num of 1s & 0s, we'll need to change the same number of each
// To keep close to original value, we should look to make the smallest change possible
// That means a single change and the rightmost digits we can find
// The next largest value will be from changing the first 0 to a 1 unless that 0 is trailing at the end

function findNextLargestBinaryNum(num) {
  
  var numShift = num;
  var zerosCount = 0;
  var onesCount = 0;
  
  while ((numShift & 1) === 0 && numShift > 0) {
    zerosCount++;
    numShift >>= 1;
  }
  // We've hit a 1. Now keep going until we hit a 0.
  while ((numShift & 1) === 1) {
    onesCount++;
    numShift >>= 1;
  }
  // Here's where the 1st non-trialing 0 is
  var shiftPosition = zerosCount + onesCount;
  // Now we can change that 0 to a 1
  num = num | (1 << shiftPosition);
  // Clear the bits to the right of our 1
  num = num & ~((1 << shiftPosition) - 1);
  // Add back the 1s, minus a single 1 we've already converted
  num = num | (1 << (onesCount - 1) - 1);
  
  return num.toString(2);
}

// Similar method to find next smallest binary number
function findNextSmallestBinaryNum(num) {
  
  var numShift = num;
  var onesCount = 0;
  var zerosCount = 0;
  // Can't use trailing 1s because a swap would make a larger num
  while (numShift & 1 && numShift > 0) {
    onesCount++;
    numShift >>= 1;
  }
  // We've hit a 0. Now look for the next 1
  while (!(numShift & 1)) {
    zerosCount++;
    numShift >>= 1;
  }
  
  // Now we're at the position of the 1st non-trailing 1
  var shiftPosition = onesCount + zerosCount;
  // Make a mask to change that bit and bits before to 0
  num = num & (~0 << (shiftPosition + 1));
  // Add back the 1s just to the right of our flipped 0
  num = num | (1 << (onesCount + 1)) - 1;
  
  return num;
}
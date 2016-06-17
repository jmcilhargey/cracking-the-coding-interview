/* Given a binary number like 101101100111, come up with the longest sequence of 1s possible if you are allowed to change a single 0 to a 1 */

// Let's use a greedy approach where we can get the best possible value so far
// Count the number of 1s as we go, then when we hit a 0, figure out if it's a single zero or more than 1 zero
// If it's a single zero, then we hold on to the previous 1s and then start counting the next string of 1s
// At each digit, we calculate the maximum possible combination
// If we hit more than 1 zero, then we reset the previous zeros counter

function figureOutLongestSequenceOf1s(num) {
  // Initialize counters and set max to 1 as minimum since we can always change 1 zero or have at least 1 one
  var prevLengthOf1s = 0;
  var currLengthOf1s = 0;
  var maxLengthSoFar = 1;
  
  while (num > 0) {
    // Use bitwise operator to check if 1st digit is a 1
    if (num & 1) {
      // Increment 1s
      currLengthOf1s++;
    } else if (!(num & 1)) {
      // Found a 0, so we check if next digit is a 0 as well, if so we need to reset prevLength counter, else we set the counter to our count of 1s
      prevLengthOf1s = num & 2 ? currLengthOf1s : 0;
      currLengthOf1s = 0;
    }
    // Calculate the max at each step
    maxLengthSoFar = Math.max(maxLengthSoFar, prevLengthOf1s + currLengthOf1s + 1);
    // Bitwise shift of integer 1 place
    num >>= 1;
  }
  return maxLengthSoFar;
}

console.log(figureOutLongestSequenceOf1s(parseInt("101101100111", 2)));

// Runtime is proportional to the number of bits in the binary representation so O(b) and space is O(1)
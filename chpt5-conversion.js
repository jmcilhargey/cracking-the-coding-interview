/* Given binary numbers num1 and num2, figure out how many bits you would need to flip to convert num1 into num2 */

// We can go bit by bit and compare nums. XOR (^) is what we'll need to tell if bits are different
// XOR returns 1 for 1 ^ 0 and 0 ^ 1 else returns 0

function numOfBitsToFlip(num1, num2) {
  
  // XOR both nums. Remember operation goes bit by bit
  var xorNums = num1 ^ num2;
  var numOfFlips = 0;
  // Start adding up the 1s and shift by a bit each time
  while (xorNums > 0) {
    numOfFlips += xorNums & 1;
    xorNums >>= 1;
  }
  return numOfFlips;
}

console.log(numOfBitsToFlip(parseInt("1011011", 2), parseInt("11010001", 2)));
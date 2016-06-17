/* Given a bit number N and M and two bit positions j(start) and i(end), come up with a way to insert M into N where M starts at j and ends at i. Assume that N is enough digits to contain M. Note bit operations in Javascript return standard numbers so we'll have to convert them to string representation of binary using a helper function */

// We'll have to make a mask for the bits j through i to zero out the values
// Then add some zeros to the end of N so we can plop it in the right position
// Use OR to insert N

function insertSmallerBit(bitN, bitM, j, i) {
  
  var nBinary = toBinary(bitN);
  
  // A mask is all 1s except the area where we want to clear which is all 0s
  // We use a trick where we subtract 1 from a 100..0 binary value to get the n - 1 representation of all 1s
  var leftSide = ((1 << (nBinary.length - j - 1)) - 1) << (j + 1);
  var rightSide = ((1 << i) - 1);
  // Use the OR operator to combine both halves so we get all the 1s where present and only the 0s where both have 0s
  var numMask = leftSide | rightSide;
  
  var clearedN = bitN & numMask;
  var shiftedM = bitM << i;
  
  return toBinary(clearedN | shiftedM);
}

function toBinary(num) {
  
  var numBuilder = [];
  
  while (num > 0) {
    numBuilder.push(num % 2);
    num = Math.floor(num / 2);
  }
  return numBuilder.reverse().join("");
}
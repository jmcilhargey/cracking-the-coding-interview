/* Here we have to figure out a way to multiply two numbers without using * or / operators */

// One way to do this is recursively where we just find the larger number and keep adding the smaller number to it, subtracting 1 each time
// We can reduce our runtime (number of recursive calls) by figuring out that we can add the larger number to itself and half the smaller number if it's even

function findProductOfTwo(num1, num2) {
  // Helper function to get larger of 2 nums
  return addTogetherNums(Math.max(num1, num2), Math.min(num1, num2));
}

function addTogetherNums(largerNum, smallerNum) {

  console.log("calling: " + largerNum + "," + smallerNum);
  
  if (smallerNum === 0) {
    return 0;
  }
  
  if (smallerNum === 1) {
    return largerNum;
  }
  // Check if smallerNum is even
  if (smallerNum % 2 === 0) {
    // Note smallerNum >> 1 is bitwise way to divide by 2
    // We see that adding the larger number to itself allows us to halve the smaller number
    return addTogetherNums(largerNum + largerNum, smallerNum >> 1);
  } else {
    // Originally had largerNum + addTogetherNums(largerNum, smallerNum - 1)
    // If we use bitwise and add in largerNum, we can keep O(lg n) runtime
    return largerNum + addTogetherNums(largerNum + largerNum, smallerNum >> 1);
  }
}
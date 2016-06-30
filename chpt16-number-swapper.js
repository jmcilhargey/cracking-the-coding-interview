/* How do we swap 2 numbers in place? */

// Normally we'd use a variable but we can't do that here
// Let's look at numbers x = 4 and y = 7
// x is 3 less than y and y is 3 more than x -- x and y always have the same difference

function swapNums(num1, num2) {
  
  // Set 1st num to the difference
  num1 = num1 - num2;
  // Now add and subtract that difference to each num
  num2 = num1 + num2;
  num1 = num2 - num1;

  console.log(num1, num2);
  
}

// Can also use bitwise operation XOR (converts 1 to 0 and 0 to 1)


function swapBits(num1, num2) {
  
  // Let's walk through example for num1 = 6 num2 = 9
  // XOR takes 2 bits and is 1 if the bits are alternate 0 and 1 else it's 0
  
  num1 = num1 ^ num2; // 110 (6) ^ 1001 (9) = 1111 (15)
  num2 = num1 ^ num2; // 1111 ^ 1001 = 110
  num1 = num1 ^ num2; // 1111 ^ 110 = 1001
  
  console.log(num1, num2);
}
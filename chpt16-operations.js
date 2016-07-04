/* Come up with methods to add, subtract, multiply, and divide while only using the add operator. The result in always an integer */

// How can we start with subtraction? We can't add 2 positive numbers because we'll get a larger number
// What if we could use negative numbers? 9 - 7 is the same as 9 + (-7)

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  
  var negNum2 = 0;
  // Generate a negative number by adding -1 repeatedly
  // This works for num2 = 0 or a negative number too
  for (var i = 0; i < num2; i++) {
    negNum2 += -1;
  }
  
  return num1 + negNum2;
}

// How can we multiply? It's the same as adding num1 to itself num2 - 1 times
// What if we have 0 or negative numbers? For 0 we'll return 0
// We'll need to have a way of knowing if we have 1 negative, 0 negatives, or 2 negatives
// Let's first do the multiplication with absolute values and then determine signs
// We'll make some helper functions to make our code more modular and readable

function multiply(num1, num2) {
  
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  
  var total = 0;
  var posNum1 = getAbsolute(num1);
  var posNum2 = getAbsolute(num2);
  // Use positive values to get magnitude of final result
  for (var j = 0; j < posNum2; j++) {
    total += posNum1;
  }
  // Use XOR to determine if we have 1 number with a negative sign
  if (isPositive(num1) ^ isPositive(num2)) {
    total = swapSigns(total);
  }
  return total;
}

function getAbsolute(num) {
  return num < 0 ? swapSigns(num) : num;
}

function swapSigns(num) {
  // Find out if number is neg or pos
  var newNum = 0;
  var counter = num < 0 ? 1 : -1;
  // Increment the counter and add it to the new number. Use while loop because we don't know sign of num
  while (num !== 0) {
    newNum += counter;
    num += counter;
  }
  return newNum;
}

function isPositive(num) {
  return num > 0;
}

// For division, we'll need to add num2 to itself until we reach or exceed num1

function divide(num1, num2) {
  
  if (num2 === 0) {
    throw new Error("Undefined, can't divide by 0");
  }
  if (num1 === 0) {
    return 0;
  }
  // Work with positive values
  var posNum1 = getAbsolute(num1);
  var posNum2 = getAbsolute(num2);
  
  var quotient = 0;
  var total = 0;
  // As long as num1 is greater than our running total, keep adding to our quotient
  // We add in a factor of num2 to prevent us from overshooting the quotient by 1
  while (posNum1 >= total + posNum2) {
    quotient += 1;
    total += posNum2;
  }
  // Get sign
  if (isPositive(num1) ^ isPositive(num2)) {
    quotient = swapSigns(quotient);
  }
  return quotient;
}
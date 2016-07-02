/* We're asked to find the maximum of 2 numbers without using comparison operators, Math methods, or if-else statements. */

// What other tools do we have at our disposal to determine which number is larger?
// If we take the difference of the 2 numbers a and b we get a positive number if a is larger and negative if b is larger
// How do we know which number is positive and negative? Use bitwise operators
// Negative numbers in binary have flipped bits so that the normal leading 0s are 1s
// We'll use a shift to shift all values right (31 places) and check the last digit to see if it's a 1

function findMaxValue(a, b) {
  
  var difference = a - b;
  // Returns 1 for a negative number where b > a and 0 for a positive number where a > b
  var sign = difference >> 31 & 0x1;
  // If a is greater return it is b is greater then adding the difference to a gives us b
  return a - difference * sign;
}
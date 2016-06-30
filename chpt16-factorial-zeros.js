/* Compute the number of trailing zeros for a factorial of n */

// One way is just to calculate the factorial and then counting the while taking the modulus of 10 and checking for no remainder

// What if we think about how 0's are created for a factorial?
// What number multiplied by another number yields a 0 at the end?
// If we take 1*2*3*4*5 we get 120 and that 0 persists, i.e. 6! = 720, 7! = 5040
// In fact, every denomination of 5 adds another 0

// What happens when we hit a power of 5? 5 * 5 actually generates 2 0's, 1 for each 5
// We get an extra 0 every time we hit a power of 5

function calcFactorialZeros(num) {
  
  if (num < 5) {
    return 0;
  }
  
  var zerosCount = 0;
  // As long as we can divide num by a power of 5, we keep adding 0's for every time num divides into the power of 5
  for (var i = 5; num / i > 0; i *= 5) {
    zerosCount += Math.floor(num / i);
  }
  return zerosCount;
}
/* We're given a decimal between 0 and 1 and asked to covnert to a binary format. What would a binary format even look like? Well it would have the highest value for the first decimal (the tens place) so that would be 1 / 2^1 followed by the hundredths place 1 / 2^2 */

function convertDecimalToBinary(decimal) {
  
  // Start with our decimal
  var decimalBuilder = ["."];
  // Let's start with the max fraction and compare values to see if it's large enough and then decrement from there
  var powerOf2 = 1;
  var currDenom = 1 / Math.pow(2, powerOf2);
  
  while (decimal > 0) {
    
    if (decimal >= currDenom) {
      decimalBuilder.push(1);
      decimal -= currDenom;
    } else {
      decimalBuilder.push(0);
    }
    // Pre-increment here so powerOf2 gets updated before assignment
    currDenom = 1 / Math.pow(2, ++powerOf2);
  }
  return decimalBuilder.join("");
}
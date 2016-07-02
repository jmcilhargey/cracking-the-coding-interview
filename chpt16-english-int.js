/* If you're given a number, print to the console the number's name in standard English */

// Let's think about some rules for how numbers are named
// 1-9 is always one - nine and 11-19 is always eleven - nineteen
// 20 - 99 is the tens place (twenty) plus the ones place(nine)
// 100 - 900 is one - nine with hundred at the end
// 1000 - 999000 is the same rules for 1 - 999 with thousand at the end

// If we divide the number into groups, then we can handle each case
// Modulus operator allows us to group the number by its segment
// Since 1 - 999 is handled the same, let's make a function for that

function NumberConverter() {
  this.ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  this.tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  this.ending = ["", "thousand", "million", "billion"];
}

NumberConverter.prototype.convertNumberToName = function(num) {
  
  var numberArray = [];
  var round = 0;
  // Originally had if statements but book solution has this while loop that keeps track of rounds and appends the ending
  // We used an array to push these entries and then reverse since the % evaluates the end first
  while (num > 0) {
    
    numberArray.push(this.convertChunk(num % 1000) + " " + this.ending[round]);
    
    num = Math.floor(num / 1000);
    round++;
  }
  return numberArray.reverse().join(" ");
};

NumberConverter.prototype.convertChunk = function(num) {
  
  var chunkString = "";
  // Add the hundreds place and take remainder
  if (num >= 100) {
    chunkString += this.ones[Math.floor(num / 100) - 1] + " hundred";
    num %= 100;
  }
  // Add the tens
  if (num >= 20) {
    chunkString += " " + this.tens[Math.floor(num / 10) - 2];
    num %= 10;
  }
  // Add the ones
  if (num >= 1) {
    chunkString += " " + this.ones[num - 1];
  }
  return chunkString;
};
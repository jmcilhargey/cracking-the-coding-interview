/* We're given a change drawer with infinite number of 25, 10, 5, and 1 cent pieces and we have to calculate the number of unique ways to calculate N cents */

// How do we test out all the different possibile combinations of cents?
// How about we try every possibility of 25 cents up to N
// Then for each possible number of 25 cents, we try every possibility where we add 10 cents
// Repeat for 5 and 1 cents


function calcWaysToMakeChange(total) {
  return findChangeRecursive(total, [1, 5, 10, 25, 100]);
}

function findChangeRecursive(total, denominations) {
  
  // We've landed on 0 which means we reach the total with our coins. Let's add 1!
  if (total === 0) {
    return 1;
  }
  // Oops, we've exceeded our total so we can't add that as a valid option OR we've run out of coin types to make change with so terminate
  if (total < 0 || denominations.length === 0) {
    return 0;
  }
  // Grab the smallest coin and save the remaining for the recursive call
  var currDenom = denominations[0];
  var remainDenoms = denominations.slice(1);
  // Initialize counter
  var possibleWays = 0;
  // We keep subtracting the denomination until we pass 0. Why >= 0? Because if we land on 0, we have to make sure to call out function
  while (total >= 0) {
    
    possibleWays += findChangeRecursive(total, remainDenoms);
    // We decrement the total after the first call so we can account for a case where we don't use the current denomination
    total -= currDenom;
  }
  return possibleWays;
}

// The runtime for this algorithm is O(n * m) where n is the total and m is the number of denominations
// Note we could improve the efficiency of this algorith with memoization

console.log(calcWaysToMakeChange(20));
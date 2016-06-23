/* Come up with an algorith that prints all valid combinations of n sets of parenthesis */

// What if we have n = 3? Then we can get ()()(), (())(), ()(()), ((())), (()())
// We can solve recursively where we start with a base case n = 1 () and then add a set "()" at every position
// We'll have to think about duplicates though because for n = 2 recursively we would get ()(), (()), ()()

// Let's use an object to keep track of unique pairs and duplicates

function findAllValidParenthesis(numOfPairs) {
  // Base case for a single parenthesis
  if (numOfPairs === 1) {
    return { "()": 1 };
  }
  
  var allParenthesis = findAllValidParenthesis(numOfPairs - 1);
  // Make an empty object to store our results
  var results = {};
  
  for (var parenthesis in allParenthesis) {
    
    for (var i = 0; i <= parenthesis.length; i++) {
      // Slice up the string into different pieces
      var newPerenthesis = parenthesis.slice(0, i) + "()" + parenthesis.slice(i);
      
      if (allParenthesis.hasOwnProperty(newPerenthesis)) {
        // If we find a duplicate, increment the counter
        results[newPerenthesis]++;
      } else {
        // A new, unique combination so add to the object
        results[newPerenthesis] = 1;
      }
      
    }
  }

  return results;
}
// Let's test it out..
var allParens = findAllValidParenthesis(4);

for (var paren in allParens) {
  console.log(paren);
}
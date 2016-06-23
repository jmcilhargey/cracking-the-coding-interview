/* We're tasked with finding all string permutations recursively */

// What's a string permutation? A unique combination of all the letters in a word
// What's a simple example? Take "abc" which can be "cab", "acb", "abc", "cba", "bca", and "bac"
// What's a base case? When we have a single letter "a" for example.
// Can we build on that example? If we add "b", then we can have "ab" and "ba"
// We observe that permutations can be built by inserting the next character at every position starting at 1 letter and building up

// If we want to restrict our results to unique permutations only, we can use a Set()
// Check out javascript Sets here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Alternately, we could use an array and include a hash table (JS object) to check if each permutation is new or not

function findAllStringPermutations(string) {
  
  // We've hit our base case where the string is a single character so we'll return a set with just that char
  if (string.length === 1) {
    return new Set(string);
  }
  // We peel off 1 character from the end
  var lastChar = string.charAt(string.length - 1);
  var remainingChars = string.substr(0, string.length - 1);
  // The remaining characters get passed back into the function
  // These function calls build up on the call stack
  // Once we get to string.length === 1, then we return a set with 1 letter
  var permutationsOfRemainingChars = findAllStringPermutations(remainingChars);
  // We'll have to make another set so we can return subsequent results at the bottom
  var permutations = new Set();
  // Now iterate through the set, which has only a single char to start!
  permutationsOfRemainingChars.forEach(function(permutationOfRemainingChars) {
    // At every position in the permutation we want to insert the next character
    for (var position = 0; position <= permutationOfRemainingChars.length; position++) {
      // So for "a", this would be "ba" and "ab" pushed to the set in that order
      var currPermutation = permutationOfRemainingChars.substr(0, position) + lastChar + permutationOfRemainingChars.substr(position);
      permutations.add(currPermutation);
    }
  });
  // Here we return our set back into the function until the call stack clears where we have our final set with all permutations
  return permutations;
}
// Let's test it out..
var permutations = findAllStringPermutations("dog");
permutations.forEach(function(permutation) {
  console.log(permutation);
});
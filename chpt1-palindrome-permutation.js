function checkIfStringIsPermutation(string) {
  // By definition a permutation has an even number of occurances for each character with the exception of the middle character (for strings with odd number of characters)
  // Make an algorithm that checks all characters have a pair and allow 1 odd character
  // Ask about how to deal with special characters, spaces, and capitalization
  // Brute force solution to check every character with every other O(n^2) or sort then check O(n lg(n))
  
  var listOfCharacters = new Map();
  
  for (var i = 0; i < string.length; i++) {
    
    if (listOfCharacters.has(string.charAt(i))) {
      // Get number of letters, pre-increment, then set new value
      var numOfOccurances = listOfCharacters.get(string.charAt(i));
      listOfCharacters.set(string.charAt(i), ++numOfOccurances);
    } else {
      listOfCharacters.set(string.charAt(i), 1);
    }
  }
  
  var foundAnOdd = false;
  
  for (var [key, value] of listOfCharacters) {
    if (value % 2 !== 0) {
      if (!foundAnOdd) {
        // We've found our 1 allowed odd value
        foundAnOdd = true;
      } else {
        // More than 1 odd!
        return false;
      }
    }
  }
  // We've looked at all characters in our map object and have found 1 or less odd character counts
  return true;
}

// Because we only care about whether character appears even number of times, we could have used booleans in Map
// If we want to test for characters only, we can use regex /[a-zA-z]/.test(string.charAt(i))
// To deal with uppercase letters, we can lowercase with string.charAt(i).toLowerCase()

console.log(checkIfStringIsPermutation("racecar"));
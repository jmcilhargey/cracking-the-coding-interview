/* We're given an array of words and we're asked to put the words that are anagrams next to each other */

// What's an anagram? A word that has the same letters but arranged in a different order
// How can we put these next to each other? One way is to sort every string comparing character by character and then sort the array
// Another way would be to sort the words as we go and then put them into a hash map (JS object or map)
// This saves us the extra work of the sorting the array although the runtime is still O(n lg n because we're sorting the words)

function groupByAnagram(arrayOfWords) {
  // Make a new object for capturing the sorted word as keys
  var anagramList = {};
  
  arrayOfWords.forEach(function(word) {
    // Sort each word and use calback function to convert to lowercase since comparator operator looks at the character code number
    var sortedWord = word.split("").sort(function(a, b) {
      
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    }).join("");
    // Check if object already has sorted word and adds to a JS set, which prevents duplicates
    if (anagramList.hasOwnProperty(sortedWord)) {
      anagramList[sortedWord] = anagramList[sortedWord].add(word);
    } else {
      anagramList[sortedWord] = new Set().add(word);
    }
   
  });
  return anagramList;
}
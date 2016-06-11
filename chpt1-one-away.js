function checkIfStringIsOneCharAway(string1, string2) {
  
  // Brute force to check the removal, replacement, and addition of every character and then comparing strings
  // Replacement means that 1 character can be changed to convert
  // Insertion / removal means that we can add or remove 1 character to convert
  
  // Must be a replacement
  if (string1.length === string2.length) {
    for (var i = 0; i < string1.length; i++) {
      var foundOneDiff = false;
      // We've found our 1 difference
      if (string1.charAt(i) !== string2.charAt(i)) {
        if (!foundOneDiff) {
          foundOneDiff = true;
        } else {
          // More than 1 difference
          return false;
        }
      }
      // 1 character or less difference
      return true;
    }
  // Checking for insertion
  } else if (string1.length - 1 === string2.length) {
    return addOrRemoveChar(string1, string2);
  // Checking for deletion
  } else if (string1.length + 1 === string2.length) {
    return addOrRemoveChar(string2, string1);
  }
  // Doesn't fit criteria to be 1 edit away
  return false;
}

// Insertion deletion are inverse process, so make function to handle both to reduce code repetition
function addOrRemoveChar(string1, string2) {
  
  // String1 is longer string
  var string1Index = 0;
  var string2Index = 0;
  
  while (string1Index < string1.length && string2Index < string2.length) {
    console.log(string1.charAt(string1Index), string2.charAt(string2Index));
    if (string1.charAt(string1Index) !== string2.charAt(string2Index)) {
      // If we've already iterated string1 only, then this is 2nd difference
      if (string1Index !== string2Index) {
        return false;
      }
      // 1 allowed difference, advance index for string1
      string1Index++;
    } else {
      string1Index++;
      string2Index++;
    }    
  }
  // We've gone through both strings and found at most 1 difference
  return true;
}


console.log(checkIfStringIsOneCharAway("google", "goggle"));
function compressStringByCharacter(string) {
    
    // Better to use array to append and join string at end then concat with +
    // Strings are immutable in JS, which means each concat is approx O(n^2)
	var arrayOfChars = [];
	var charCount = 0;

	for (var i = 0; i < string.length; i++) {
		charCount++;

		if (string.charAt(i) !== string.charAt(i + 1) || i === string.length - 1) {
			arrayOfChars.push(string.charAt(i));
			arrayOfChars.push(charCount);
            // Reset our character count for next letter
			charCount = 0;
		}
	}
    // Make sure our compression is actually shorter than original string
	return arrayOfChars.length < string.length ? arrayOfChars.join("") : string;
}

console.log(compressStringByCharacter("heeeeelllooooooo"));
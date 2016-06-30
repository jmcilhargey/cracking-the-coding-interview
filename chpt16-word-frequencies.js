/* We're asked to find the frequencies of a given word in a book. We'll need to consider if we were running this algorithm frequently */

// If we had to do this just a handful of times, we might just keep a initialize a counter and increment it each time we see the word
// What if this was a popular feature on a book website to find literature with keywords or part of a research project to analyze word counts in Broadway plays?

// Then we should think about processing the book up front and storing the counts in an accessible way
// Hash maps are great for doing this because they offer O(1) constant lookups
// Note however that the amount of memory could be as much as O(n) where n is the number of words in the book

// Since we're using Javascript, let's pretend the file was uploaded through a website and now we're going to open, analyze its contents, and display on the page

// Some sample code to emulate a user uploading a file through a webpage
window.onload = function() {
  
  var fileInput = document.getElementById("input");
  var displayFrequency = document.getElementById("output");
  
  fileInput.addEventListener("change", function(event) {
    // Get file object
    var file = fileInput.files[0];
    // Check if size and type okay
    if (file.type.match(/text.*/) && file.size / (1024 ^ 2) < 2) {
      // Create an instance to read our file
      var fileReader = new FileReader();
      
      reader.onload = function(event) {
        // Start reading the file
        reader.readAsText(file);
        // When complete, result attribute contains file contents
        var textString = reader.result;
        // Pass string into our function countWordFrequency and display the JSON on the webpage
        displayFrequency.innerHTML = JSON.stringify(countWordFrequency(textString));
      };
    } else {
      window.alert("Files must be text format and less than 2 MB in size");
    }
  });
};

function countWordFrequency(inputString) {
  // Using object literal, could also use a Javascript Map which has additional properties
  var wordMap = {};
  
  var allowedLetters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  var currentChar;
  var currentWord = "";
  
  for (var i = 0; i < inputString.length; i++) {
    
    currentChar = inputString[i];
    // Using dictionary to look up chars, could also use regex /[a-zA-Z]/.test(currentChar)
    if (allowedLetters.indexOf(currentChar) !== -1) {
      currentWord += currentChar.toLowerCase();
    }
    // We're at the end of a word
    if (currentChar === " " || i === inputString.length - 1) {
      // Check our hash map
      if (wordMap.hasOwnProperty(currentWord)) {
        wordMap[currentWord] += 1;
      } else {
        wordMap[currentWord] = 1;
      }
      // Reset the word
      currentWord = "";
    }
  }
  return wordMap;
}
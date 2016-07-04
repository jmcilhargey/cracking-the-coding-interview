/* We're designing a web crawler and need to avoid infinite loops */

// Web crawlers go from page to page and index the links between those pages to map the web
// Indexing means there must be a way to store connections 
// Connections can go in 2 ways and also there can be connections that end up being circular

// An easy way to avoid infinite search loops is to use a hash table to detect where we've already visited
// We can use a graph structure like in the social network example where we perform a breadth 1st search
// The amount of data to store URLs could add up quickly -- 4 bytes per character and say ~ 100 chars per page
// We can give our hash map object a trie structure to cut down on characters since for example, most pages start with www. and end with .com

function createUrlMap(arrayOfUrls) {
  
  var urlTrie = {};
  // We look at every letter of every url for O(n^2)
  for (var i = 0; i < arrayOfUrls.length; i++) {
    
    var pageUrl = arrayOfUrls[i];
    var currentPos = urlTrie;
    
    for (var j = 0; j < pageUrl.length; j++) {
      
      var trieLetter = currentPos[pageUrl.charAt(j)];
      
      if (!trieLetter) {
        // If there is no entry, we branch out by creating a new object
        if (j === pageUrl.length - 1) {
          currentPos[pageUrl.charAt(j)] = "*";
        } else {
          currentPos[pageUrl.charAt(j)] = {};
        }
      }
      // We move the trie position to the object we created or the letter key we found
      currentPos = currentPos[pageUrl.charAt(j)];
    }
  }
  return urlTrie;
}

// What about handling duplicates subpage from the domain? Like if I had www.joespage.com/js-algorithms.com and www.joespage.com/js-questions.com and both were the same content.
// We could selectively crawl segments of that page and generate a signature that tells us the page has been crawled 

function crawlPage() {
  
  var domElements = document.getElementsByTagName("*");
  var content = [];
  // Get all inner html content and some kind of signature for the webpage content
  for (var i = 0; i < domElements.length; i++) {
    if (domElements[i].innerHTML) {
      content.push(jsHash(domElements[i].innerHTML));
    }
  }
  return content;
}
// A general purpose hashing algorithm
function jsHash(string) {
  
  var hash = 1315423911;
  
  for (var i = 0; i < string.length; i++) {
    hash ^= ((hash << 5) + string.charAt(i) + (hash >> 2));
  }
  return hash;   
}
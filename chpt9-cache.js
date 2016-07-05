/* Take a web server for a simplfied search engine. There are 100 machines that respond to search queries which call the function processSearch(query) to another group of machines for the result.  The machine that handles the request is picked at random. The method processSearch is expensive so it's our task to design a caching system to store results from recent queries. Explain how to update the cache when the data changes */

// What if we were to break this down to the process from start to finish for a single server?
// We want quick lookups and an easy way to clear old results to prevent collisions and keep our space requirements under control
// A hash table (JS object or map) is great for lookups (O(1) runtime) but how do we know when to clear?
// If we store a date in our hash table, we'll need to iterate through our table every time we need to get the last date for O(n) time
// How can we get constant time for deleting the oldest entries? We'll need to maintain a 2nd data structure
// A linked list allows us to find and delete the oldest and update the newest with O(1)
// Let's make a function constructor that contains both data structures

function Cache() {
  this.map = {};
  this.list = new LinkedList();
  this.maxSize = 1000;
}
// See ref for sample linked list class
Cache.prototype.addResult = function(queryString, resultsArray) {
  
  // Check if the hash map has the search query cached
  if (!this.map.hasOwnProperty(queryString)) {
    // If not, let's add it
    this.map[queryString] = resultsArray;
    // And keep track of order with our list
    this.list.appendNode(queryString);
    // If we exceed our size, then we have to delete the oldest which involves updating the head
    if (this.list.length > this.maxSize) {
      delete this.map[this.list.head.value];
      this.list.head = this.list.head.next;
    }
  } else {
    // We found the result so let's update it's position to most recent
    this.list.deleteNode(queryString);
    this.list.appendNode(queryString);
  }
};

// To divide the work up between the machines we can come up with a hash function to process each query and then mod the result by the number of machines
// If we have a 1000 machines, then we can execute String.hashQuery() % 1000 and send the request to the server for that unique query
// Our total cache is then 1000^2 and we avoid having to maintain multiple caches across different machines 

String.prototype.hashQuery = function() {
  
  var hash = 0;
  
  if (this.length === 0) {
    return hash;
  }
  
  for (var i = 0; i < this.length; i++) {
    hash = ((hash << 5) - hash) + this.charCodeAt(i);
    hash = hash & hash;
  }
  return hash;
};
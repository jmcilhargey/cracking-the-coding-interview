/* How would you design data structures for large social networks like Facebook or LinkedIn? escribe how to design an algorithm to show the shortest path between 2 people */

// What we know about large social networks is that there are many people with many connections
// To help people connect, there needs to be a straightforward and quick way to tell if there are common friends (Facebook) / colleagues (LinkedIn)

// What's a good data structure for many to many relationships? A graph!
// Let's start by creating a User class that will store an individual's connections
// We'll use a Set object because it's iterable like an array and stores unique values so we can prevent duplicate connections

function User(name, connections) {
  this.name = name;
  this.connections = new Set(connections);
}
/* We can add connections for individual users
User.prototype.connect = function(user) {  
  if (!this.connections.has(user)) {
    this.connections.add(user);
  }
}; */
// Our social network is an array of users
function SocialNetwork() {
  this.count = 0;
  this.users = [];
}
// New users are added through a simple sign up
SocialNetwork.prototype.signUp = function(name, connections) {
  var newUser = new User(name, connections);
  this.users.push(newUser);
  this.count++;
  return newUser;
};
// We can search for users
SocialNetwork.prototype.search = function(searchName) {
  this.users.forEach(function(user, index) {
    if (user.name === searchName) {
      return index;
    }
  });
  return -1;
};
// Now we need to come up with a way to determine the shortest path between 2 people
// A breadth-first search is the standard way to find the shortest path in a graph
// Breadth-first expands out in all directions with equal weight
// Because there are cyclical connections Joe -> John -> Joe we'll need to keep track of what we've searched
SocialNetwork.prototype.findPath = function(person1, person2) {
  
  // Using a queue for breadth-first -- See ref for sample class
  var queue1 = new Queue();
  var queue2 = new Queue();
  // Keeping track of which connections we've reviewed
  var visited1 = {};
  var visited2 = {};
  
  var found = false;
  
  queue1.enqueue(person1);
  queue2.enqueue(person2);
  
  // Keep searching as long as we don't run out of connections
  while (queue1.size && queue2.size) {
    
    // We'll go level-by-level to search and push all the connections for the next level as we go
    var currentPerson1 = queue1.dequeue();
    console.log(currentPerson1.connections);
    currentPerson1.connections.forEach(function(person) {

      if (visited2.hasOwnProperty(person.name)) {
        found = true;
      } else {
        visited1[person.name] = true;
        queue1.enqueue(person);
      }
    });
    
    var currentPerson2 = queue2.dequeue();
  console.log(currentPerson2.connections);
    currentPerson2.connections.forEach(function(person) {
      
      if (visited1.hasOwnProperty(person.name)) {
        found = true;
      } else {
        visited2[person.name] = true;
        queue2.enqueue(person);
      }
    });
    if (found) {
      console.log(visited1);
      console.log(visited2);
      return true;
    }
  }
  return false;
};
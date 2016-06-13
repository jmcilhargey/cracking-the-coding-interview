/* Our task is to design a FIFO (First in first out) system for receiving cats and dogs. New owners can pick if they want a cat or a dog in which case they receive the cat or dog that's been in the queue the longest. If they don't pick a preference, then they receive the pet that's had the longest stay */

// We can implement a queue with an array, but the runtime for Array.shift() to retrieve elements is O(n).
// A linked list has constant O(1) retrievals at the front of the list. To get constant additions, we'll have to keep a pointer with the location of the tail, otherwise we have to traverse the list in O(n).

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.enqueue = function(nodeToAdd) {

  // Add the node to the head if non-existant
  if (this.head === null) {
    this.head = nodeToAdd;
  }
  // Now update the tail pointer -- This gets us constant insertion time
  if (this.tail === null) {
    this.tail = nodeToAdd;
  } else {
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  }
};

LinkedList.prototype.dequeue = function() {
  
  if (this.head === null) {
    throw new Error("Nothing to dequeue");
  }
  // Grab the head node and update since it's first in the list
  var frontNode = this.head;
  this.head = this.head.next;
  
  return frontNode;
};

LinkedList.prototype.peek = function() {
  return this.head;
};


LinkedList.prototype.printValues = function() {
  var currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};


/* Now implement a queue to keep track of cats and dogs separately. This gets us the oldest dog and cat if the type is chosen, but what about if no type is chosen? We'll need to keep track of the order animals are received. We can use an incremented ID or a Date object! */

function AnimalQueue() {
  this.catList = new LinkedList();
  this.dogList = new LinkedList();
}
// We create child Node classes for dogs and cats so we can differentiate which list to add to when we call addAnimal
function Cat(value) {
  Node.call(this, value);
  this.received = new Date();
}

function Dog(value) {
  Node.call(this, value);
  this.received = new Date();
}

AnimalQueue.prototype.addAnimal = function(animal) {
  
  if (animal instanceof Cat) {
    this.catList.enqueue(animal);
  } else if (animal instanceof Dog) {
    this.dogList.enqueue(animal);
  }
  
};

AnimalQueue.prototype.getDog = function() {
  // Return the first entry in the dog list and shift the head over
  var nextDog = this.dogList.head;
  if (nextDog === null) {
    throw new Error("Sorry all dogs have been adopted");
  }
  this.dogList.head = this.dogList.head.next;
  nextDog.next = null;
  return nextDog;
};

AnimalQueue.prototype.getCat = function() {
    var nextCat = this.catList.head;
  if (nextCat === null) {
    throw new Error("Sorry all cats have been adopted");
  }
  this.catList.head = this.catList.head.next;
  nextCat.next = null;
  return nextCat;
};

AnimalQueue.prototype.getEither = function() {
  // We'll have to look at the first dog and cat to see which is first
  // Convert to a numeric value with getTime to compare times
  var nextCat = this.catList.peek();
  var nextDog = this.catList.peek();
  
  // Conditionals added to determine if one list is empty, alternately we could throw an error
  if (nextCat && nextDog) {
    
    if (nextCat.received.getTime() < nextDog.received.getTime()) {
      return this.getCat();
    } else {
      return this.getDog();
    }
  } else {
    if (nextCat) {
      return this.getCat();
    } else if (nextDog) {
      return this.getDog();
    }
  }
  throw new Error("No cats or dogs to adopt right now");
};

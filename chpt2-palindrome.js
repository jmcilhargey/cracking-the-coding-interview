function isLinkedListPalindrome(headNode) {
  // By definition, palindrome is same forward as backwards. One solution is to reverse the list and compare
  var reversedNode = reverseLinkedList(headNode);
  var regularNode = headNode;
  
  while (reversedNode !== null || regularNode !== null) {
    console.log(reversedNode.next, regularNode.next);
    if (reversedNode.value !== regularNode.value) {
      return false;
    }
    reversedNode = reversedNode.next;
    regularNode = regularNode.next;
  }
  return true;
}

function reverseLinkedList(headNode) {
  
  var currentNode = headNode;
  var nextNode = null;
  var previousNode = null;
  
  while (currentNode) {
    
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}



function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.appendNode = function(value) {

  var newNode = new Node(value);
  var currentNode = this.head;
  
  if (!currentNode) {
    this.head = newNode;
    this.length++;
    
    return newNode;
  }
  
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this.length++;
  
  return newNode;
};

LinkedList.prototype.printValues = function() {
  
  var currentNode = this.head;
  
  while (currentNode) {
    currentNode = currentNode.next;
  }
};

function isLinkedListPalindromeStack(headNode) {
  // Another way to solve is to use a stack to store first half of linked list, then compare with second half
  // How do we get 1st half without length? Can use runners
  
  var stackOfValues = [];
  
  var slowRunner = headNode;
  var fastRunner = headNode;
  
  // Advance the fast runner twice as fast, stop if we overshoot or if at end
  while (fastRunner.next !== null && fastRunner !== null) {
    stackOfValues.push(slowRunner.value);
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  // We have an odd number of nodes, so let's ignore the middle since it doesn't need to match
  if (fastRunner !== null) {
    slowRunner = slowRunner.next;
  }
  
  while (slowRunner !== null) {
    if (slowRunner.value !== stackOfValues.pop()) {
      return false;
    }
    slowRunner = slowRunner.next;
  }
  return true;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
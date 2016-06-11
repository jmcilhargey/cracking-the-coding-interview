// Sample singly linked list class

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
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};
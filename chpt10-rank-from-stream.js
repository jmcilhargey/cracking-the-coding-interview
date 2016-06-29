/* Suppose we have a stream of numbers being read into memory and we want to determine at any given point the rank of the current integer being read is. Order refers to it's rank relative to what has been seen so far i.e. for a stream of 1, 6, 2, 8, 3 and the next integer is 5 -- The rank of 5 is 4 since there is 1, 2, and 3 that come before it. Create a method to get the rank. */

// We'll need to store the numbers because we'll have to be able to reference what we've seen so far
// The most efficient way is to order them using a sorting method
// We can use an array to keep a sorted list but we'll have to search O(lg n), insert O(1), and shift O(n) elements with each number
// A binary search tree is a better alternative because the cost to search and insert is O(lg n) and no need to shift
// Additionally if the tree is balanced, the search time is O(lg n)

// If we maintain a binary search tree, then how do we determine the rank?
// We'll need to traverse the tree in-order (smallest-largest) and count elements until we find our search value

// Anytime we search for a value equal or less than the root, we need the number of elements in the left subtree
// Let's make that a property of our tree-class and keep track of it so we don't have to traverse that half every time

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.leftCount = 0;
  this.findLeft = 0;
}
// First we write out our function to add new values which is standard except for keeping track of the number of left elements
BinarySearchTree.prototype.addValue = function(value) {
  
  var currentNode = this.root;
  
  // Check if we've yet to assign a root first
  if (currentNode === null) {
    this.root = new Node(value);
  } else {
    
    // If the value will be on left sub-tree, increment our counter
    if (value < currentNode.value) {
      this.leftCount++;
    }
    
    // Condition for while loop to terminate
    var insertedValue = false;
    
    while (!insertedValue) {
      
      // Check if the value should go to the left or right
      if (currentNode.value > value) {
        
        if (currentNode.left === null) {
          
          // We've hit a leaf, insert the value
          currentNode.left = new Node(value);
          // Update our condition to exit the loop
          insertedValue = true;
          
        } else {
          currentNode = currentNode.left;
        }
        
      // Value goes in right subtree, same as above but for values bigger than currentNode.value
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
          insertedValue = true;
        } else {
          currentNode = currentNode.right;
        }
      }
    } 
  }
};


BinarySearchTree.prototype.findRank = function(value) {
  
  if (value === this.root.value) {
    return this.leftCount + 1;
  }
  
  if (value < this.root.value) {
    // A recursive algorithm is shown
    // Start a first node in left subtree
    return this.checkLeftSubtree(this.root.left, value);
  } else {
    // An iterative algorithm is shown
    return this.checkRightSubtree(value);
  }
};

var total = 0;

BinarySearchTree.prototype.checkLeftSubtree = function(currentNode, searchValue) {
  // Base case to terminate
  if (currentNode === null) {
    return null;
  }
  if (currentNode.value <= searchValue) {
    // To make this recursive, we put a property on the tree class to keep track of the number of values
    // There may be a way to do this by passing back in a parameter, but I couldn't figure it out!
    this.findLeft += 1;
  }
  // Recurse through left and right subtrees
  this.checkLeftSubtree(currentNode.left, searchValue);
  this.checkLeftSubtree(currentNode.right, searchValue);
  
  var rank = this.findLeft;
  // Reset our counter
  this.findLeft = 0;
  
  return rank;
};

BinarySearchTree.prototype.checkRightSubtree = function(searchValue) {
  
  // We reference our rank variable for the left subtree size and add 1 for the root
  var rank = this.leftCount + 1;
  var nodeStack = [];
  var found = false;
  
  // Push the 1st node in the right subtree
  nodeStack.push(this.root.right);
  
  // Keep going while we have some nodes to look at
  while (nodeStack.length) {
    
    var currentNode = nodeStack.pop();
    
    if (currentNode.value <= searchValue) {
      rank += 1;
    }
    
    // Push a right node if it's there but only if we haven't surpassed the value
    // 2nd condition saves us some extra work because we know nothing to the right will be <= to our searchValue
    if (currentNode.right !== null && currentNode.value <= searchValue) {
      nodeStack.push(currentNode.right);
    }
    
    // Push left node 2nd to top of stack because we want to search smaller values 1st
    if (currentNode.left !== null) {
      nodeStack.push(currentNode.left);
    }
    
    // We've found the value, but there still may be smaller values on the nodeStack
    if (currentNode.value === searchValue) {
      found = true;
    }
  }
  // Return the rank if we've found, otherwise throw an error because we traversed tree without finding
  if (found) {
    return rank;
  } else {
    throw new Error("Value not found in tree");
  }
  
};

// Helper method for us to check our work that will print the tree values in order
function inOrderTraverse(treeRoot) {
  
  if (treeRoot === null) {
    return null;
  }
  inOrderTraverse(treeRoot.left);
  console.log(treeRoot.value);
  inOrderTraverse(treeRoot.right);
}
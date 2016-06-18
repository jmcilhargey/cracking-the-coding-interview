// Binary trees are trees limited to two children nodes per parent node

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

// We have to make a function because of Javascript hoisting, causing the recursive function definitions to be called be console.log!
function printNode(value) {
  console.log(value);
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    printNode(node.value);
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  if (node !== null) {
    printNode(node.value);
    inOrderTraversal(node.left);
    inOrderTraversal(node.right);    
  }
}

// Graphs are like trees except that they may have cycles in them
// For this reason, it's important to have a flag property to determine if a node has been visited, otherwise you can get inifinite loops

function Node(value) {
  this.value = value;
  this.edges = [];
  this.visited = false;
}

// Breadth first is good for finding the shortest path between two nodes
function breadthFirstSearch(rootNode) {
  // See sample queue class in Chpt 2 solutions
  var queueOfNodes = new Queue();
  var currentNode = rootNode;
  // As long as we have nodes to visit
  while (!queueOfNodes.isEmpty()) {
    // Go through all the connections and queue any not visited yet
    currentNode.edges.forEach(function(edge) {
      if (!edge.visited) {
        queueOfNodes.enqueue(edge);
      }
    });
    // Print the current node, then dequeue the next in line
    printNode(currentNode);
    currentNode.visited = true;
    currentNode = queueOfNodes.dequeue();
  }
}
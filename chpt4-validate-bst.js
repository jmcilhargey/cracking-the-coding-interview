/* Our task is to write a function to tell if a binary tree is a binary search tree. We know that a binary search tree by definition means that the values to the left of every root node are less than or equal and to the right greater than, i.e. left <= node < right. One way to tell is to keep track of the max and min values for each node as we traverse the tree. If we go left, the max is updated. If we go right, the min is updated.*/

function isValidBinarySearchTree(rootNode) {
  
  var stackOfNodes = [];
  // Use an object to keep track of min and max at each step
  stackOfNodes.push({ node: rootNode, max: Infinity, min: -Infinity });
  
  while (stackOfNodes.length) {
    
    var nodeObject = stackOfNodes.pop();
    var currentNode = nodeObject.node;
    var maxValue = nodeObject.max;
    var minValue = nodeObject.min;
    
    // Check if the current node value is more than max or min
    if (currentNode.value > max || currentNode.value <= min) {
      return false;
    }
    // Push any branches to our stack for later and update the min / max accordingly depending on which way we go
    if (currentNode.left) {
      stackOfNodes.push({ node: currentNode.left, max: currentNode.value, min: minValue });
    }
    if (currentNode.right) {
      stackOfNodes.push({ node: currentNode.right, max: maxValue, min: currentNode.value });
    }
  }
  // We've traversed the tree without violating rules for a valid BST
  return true;
}
function isBinaryTreeBalanced(rootNode) {
  
  var stackOfNodes = [];
  rootNode.push([rootNode, 0]);
  
  var allowedDepths = [];
  
  while (stackOfNodes.length) {
    
    var nodePair = stackOfNodes.pop();
    var currentNode = nodePair[0];
    var currentDepth = nodePair[1];
    
    if (currentNode.left) {
      stackOfNodes.push([currentNode, currentDepth + 1]);
    }
    if (currentNode.right) {
      stackOfNodes.push([currentNode, currentDepth + 1]);
    }
    // We've hit a leaf. See if depth not in our array and if so, push it.
    if (!currentNode.left && !currentNode.right && allowedDepths.indexOf(currentDepth < 0)) {
      allowedDepths.push(currentDepth);
      // Check if we've found leafs at more than 2 levels
      if (allowedDepths.length > 2) {
        return false;
      }
    }
  }
  return true;
}

// Recursive method -- O(n lg n) because we touch each node and then search through each lg n subtrees

// Method to get the height of a tree
function getHeight(rootNode) {
  // We've tried to go past a leaf node, subtract 1
  if (rootNode === null) {
    return -1;
  }
  // Add one for the current level, and then get the max depth for going right or elft
  return Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) + 1;
}

function isBinaryTreeBalancedRecursive(rootNode) {
  // We've made it to the bottom of the tree
  if (rootNode === null) {
    return true;
  }
  // Get the difference in height between the left subtree and right subtree
  var heightDiff = Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right));

  if (heightDiff > 1) {
    return false;
  } else {
    return isBinaryTreeBalancedRecursive(rootNode.left) && isBinaryTreeBalancedRecursive(rootNode.right);
  }  
}
// Question: Check what the next node is for an in-order traversal given the current node. Assume you have a method getParent() that returns a node's parent

// If the node has a right subtree, then we go right and get the leftmost node in that tree
// If there is no right subtree, then we go up to the node's parent
// If the current node is to the left of the parent node, then the parent is the next node
// If the current node is to the right of the parent node, then the parent is already traversed and we have to go up until we find one

function findNextNodeForInOrderTraverse(currentNode) {
  
  // Found right node, so get leftmost node
  if (currentNode.right !== null) {
    
    var nextNode = currentNode.right;
    
    while (nextNode.left !== null) {
      nextNode = nextNode.left;
    }
    return nextNode;
  } else {
    // No right node, so go up to parent
    var parentNode = currentNode.getParent();
    // If the parent node is to the left, we've already traversed it
    // We add a null condition if we traverse all the way to the top without finding a un-touched parent node -- This only happens if the node is the rightmost node
    while (parentNode.left !== currentNode && parentNode !== null) {
      currentNode = parentNode;
      parentNode = currentNode.getParent();
    }
    return parentNode;
  }
}

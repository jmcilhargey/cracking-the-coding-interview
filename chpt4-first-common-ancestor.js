// Find the intersection point if any given two nodes in a binary tree
// We need to know which one is below the other so we can start them at the same height

function findIntersectionOfBinaryTreeNodes(node1, node2) {
  
  var node1Depth = getNodeDepth(node1);
  var node2Depth = getNodeDepth(node2);
  var depthDiff = Math.abs(getNodeDepth(node1) - getNodeDepth(node2));
  var currentNode1 = node1;
  var currentNode2 = node2;
  // Figure out which node is deeper so we can move that node up
  if (node1Depth > node2Depth) {
    currentNode1 = goUpNodes(currentNode1);
  } else if (node2Depth > node2Depth) {
    currentNode2 = goUpNodes(currentNode2);
  }
  // Now start marching each node up the tree until they either intersect (=) or we hit a null value (passed tree root)
  while (currentNode1 !== currentNode2 && currentNode1 !== null && currentNode2 !== null) {
    currentNode1 = currentNode1.parent;
    currentNode2 = currentNode2.parent;
  }
  // Depending on what broke while loop, return that result
  if (!currentNode1 || !currentNode2) {
    throw new Error("No connection between nodes");
  } else {
    return currentNode1;
  }
}

// Finds how far down in tree node is
function getNodeDepth(node) {
  
  var height = 0;
  var currentNode = node;
  
  while (currentNode) {
    currentNode = currentNode.parent;
    height++;
  }
  return height;
}
// Moves node up n levels in tree
function goUpNodes(node, num) {

  var currentNode = node;
  var count = num;
  
  while (count > 0) {
    currentNode = currentNode.parent;
    count--;
  }
  return currentNode;
}


// Another way to find the nodes' common ancestor is to go down the tree from the top, checking each branch to see if the nodes are in the same branch.
// As soon as you find a node where either node1 and node2 are in different brances OR the startNode is = node1 or node2 then you've found the common ancestor

function findIntersectionRecursive(startNode, node1, node2) {
  
  // Base case, we've recursed until we ran into one of the nodes
  if (startNode === node1 || startNode === node2) {
    return startNode;
  }
  
  var isNode1OnLeft = findIfRoot(startNode.left, node1);
  var isNode2OnRight = findIfRoot(startNode.right, node2);
  // Check if nodes are not in the same subtree, if so return that startNode
  // This will work because if they are on opposite sides, both function calls will return either true or false
  if (isNode1OnLeft === isNode2OnRight) {
    return startNode;
  }
  
  // Must be on same side so we keep going. Check which side with ternary
  return isNode1OnLeft ? findIntersectionRecursive(startNode.left, node1, node2) : findIntersectionRecursive(startNode.right, node1, node2);
}

function findIfRoot(rootNode, searchNode) {
  
  if (rootNode === null) {
    return false;
  }
  // Positive condition
  if (rootNode === searchNode) {
    return true;
  }
  // If found anywhere in tree, returns true
  return findIfRoot(rootNode.left) || findIfRoot(rootNode.right);
}
// We're trying to check and see when given a large tree and a smaller subtree whether the entire subtree is found somewhere within the large tree
// Here's a way where we traverse the large tree and look for a node that matches the root of the subtree, then go node by node to see if they match
function findTheSubTree(mainTreeNode, subTreeRoot) {
  
  if (mainTreeNode === null) {
    return false;
    
  // Short circuit && operator checks first if we find matching node. Then go through the subtree and see if the whole subtree matches.
  } else if (mainTreeNode === subTreeRoot && checkTheSubTree(mainTreeNode, subTreeRoot)) {
    return true;
  }
  // Recurse by going both ways. Use OR operator so subtree can be found on either side
  return findTheSubTree(mainTreeNode.left) || findTheSubTree(mainTreeNode.right);
}

function checkTheSubTree(mainTreeNode, subTreeNode) {
  
  // Any non-matching nodes return false
  if (mainTreeNode !== subTreeNode) {
    return false;
  }
  // If we've hit 2 null nodes, then both reach end
  if (mainTreeNode === null && subTreeNode === null) {
    return true;
  // If only 1 reaches end, then they differ so return false
  } else if (mainTreeNode === null || subTreeNode === null) {
    return false;
  }
  return checkTheSubTree(mainTreeNode.left, subTreeNode.left) && checkTheSubTree(mainTreeNode.right, subTreeNode.right);
}

// Another way to approach this problem is to say that the values of the subtree should all be found in order in the large tree
// If we represent a traversal as a string, then we can search for the subtree values as a substring
// The trick is that we have to have a way to append null values, so we'll use "N" for that

function checkIfTreeIsSubstring(largeTreeRoot, subTreeRoot) {
  
  var mainTreeValues = [];
  var subTreeValues = [];
  
  buildTheString(largeTreeRoot, mainTreeValues);
  buildTheString(largeTreeRoot, subTreeValues);
  // Join arrays into strings
  mainTreeValues = mainTreeValues.join("");
  subTreeValues = subTreeValues.join("");
  // Check if subtree string is somewhere inside large tree
  return mainTreeValues.indexOf(subTreeValues) > -1;
  
}
// This is a pre-order traversal so we get the current node, followed by it's left child and then right child
function buildTheString(treeNode, arrayOfValues) {
  
  if (treeNode === null) {
    arrayOfValues.push("N");
    return ;
  } else {
    arrayOfValues.push(treeNode.value);
  }
  buildTheString(treeNode.left, arrayOfValues);
  buildTheString(treeNode.right, arrayOfValues);
}
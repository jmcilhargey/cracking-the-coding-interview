// Make a linked list for all of the ndeos at each level of a binary tree
// We can keep track of the level as one of the arguments and recursively add linked lists as we go
// See ref file for linked list class
function createListForEachDepth(rootNode, arrayOfLists, level) {
  // If no node is there, terminate
  if (rootNode === null) {
    return ;
  }
  // If we're at a new level, add a new linked list
  if (arrayOfLists.length < level) {
    arrayOfLists.push(new LinkedList());
  }
  // Append the node to the linked list at that level
  arrayOfLists[level - 1].appendNode = rootNode;
  // Take a step down in the tree and add a level
  createListForEachDepth(rootNode.left, arrayOfLists, level + 1);
  createListForEachDepth(rootNode.right, arrayOfLists, level + 1);
}

var ourList = createListForEachDepth(binaryTree, [], 0);

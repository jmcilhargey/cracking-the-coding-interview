function removeDuplicateNodes(headNode) {
  // How do we know which nodes we've already seen? A set, map, or object is a good way to keep track
  // We'll need O(n) space and O(n) time since we could store all nodes and will have to look at each
  // Make sure to test for edge cases, like list length of 1 and deleting 2 consecutive nodes
  
  var listOfValuesSeen = new Set();
  
  var currentNode = headNode;
  var previousNode = null;
  
  while (currentNode !== null) {
    // We've seen this node before
    if (listOfValuesSeen.has(currentNode.value)) {
      previousNode.next = currentNode.next;
    } else {
      listOfValuesSeen.add(currentNode.value);
      // Save our previous node so we can skip a node we've seen before
      // Put it here instead of outside conditional because if we skip a node, we don't want to reference it again
      previousNode = currentNode;
    }
    // Advance the pointer
    currentNode = currentNode.next;
  } 
}
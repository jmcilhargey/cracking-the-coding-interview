function findKthToLastNodeRecursive(currentNode, k) {
  // We don't know how long the linked list is
  // Solution can be iterative or recursive, both with O(n) time and space because we have to count k nodes
  if (currentNode === null) {
    return 0;
  }
  
  var currentIndex = findKthToLastNode(currentNode.next, k) + 1;
  
  if (currentIndex === k) {
    // Only valid if we want to only print the value. Can't return value here because we have a currentIndex value returned from previous recursive calls
    // Another option would be wrap function in a class with a counter, then we could return the value
    console.log("The node value " + k + " from end is: " + currentNode.value);
  }
  return currentIndex;
}

function findKthToLastIterative(headNode, k) {
  
  var runnerNode = headNode;
  var kthToLastNode = headNode;
  // Take k steps in list with runner
  for (var i = 0; i < k; i++) {
    if (runnerNode === null) {
      throw new Error("List is not k nodes long");
    }
    runnerNode = runnerNode.next;
  }
  // Distance between nodes is now k, keep going until we hit end when kthToLastNode is k from end
  while (runnerNode) {
    runnerNode = runnerNode.next;
    kthToLastNode = kthToLastNode.next;
  }
  return kthToLastNode;
}

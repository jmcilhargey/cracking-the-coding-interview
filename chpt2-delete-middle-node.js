function deleteMiddleNode(nodeToDelete) {
  // How to delete node when only given that node -- No head to walk through list
  // We can convert the node to it's neighbor, then surpass the neighbor
  if (nodeToDelete.next === null || nodeToDelete === null) {
    throw new Error("This method can't delete singular, last, or null node");
  }
  
  nodeToDelete.value = nodeToDelete.next.value;
  nodeToDelete.next = nodeToDelete.next.next;
}
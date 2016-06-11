function findNodeAtLoopInLinkedList(headNode) {
  
  // Uses fastRunner and slowRunner to find the collision point
  // When slowRunner enters loop, fastRunner is k steps into loop
  // When will they collide? Depends on loop size and where fastRunner is when slowRunner enters loop
  // fastRunner position = # of steps % loop size (since we may have made multiple laps by the time slowRunner gets there)
  // So loop size - fastRunner position is how many steps to catch up since fastRunner closes at 1 node each step
  // At collision, slowRunner is at same number of steps to loop start as headNode is to loop start
  
  var fastRunner = headNode.next.next;
  var slowRunner = headNode.next;
  // Continue until we find collision point
  while (fastRunner !== slowRunner && fastRunner !== null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  // Double check to make sure we didn't hit the end of the list
  if (fastRunner === null) {
    throw Error("No loop found in linked list");
  }
  // Make node to start from the beginning
  var startRunner = headNode;
  // When that node hits the slowRunner, we've hit the start of the loop
  while (startRunner !== slowRunner) {
    startRunner = startRunner.next;
    slowRunner = slowRunner.next;
  }
  return startRunner;
}
function findTheIntersectionForLinkedList(list1, list2) {
  // If lists are different lengths, we need to find longer list and remove extra tail nodes to find intersection
  var list1Length = getLinkedListLength(list1);
  var list2Length = getLinkedListLength(list2);
  var shorterList = null;
  var longerList = null;
  // Assign shorter and longer lists
  if (list1Length > list2Length) {
    shorterList = list2;
    longerList = list1;
  } else if (list1Length < list2Length) {
    shorterList = list1;
    longerList = list2;
  }
  // Return the start position of the longer list, with extra nodes removed
  var longerListStart = getKthNode(longerList, Math.abs(list1Length - list2Length));
  // Advance the list as long as the two nodes are not equal
  while (longerListStart !== shorterList) {
    
    longerListStart = longerListStart.next;
    shorterList = shorterList.next;
  }
  // Return one of the matching nodes
  return shorterList;
}

function getLinkedListLength(headNode) {
  
  var currentNode = headNode;
  var listLength = 0;
  
  while (currentNode) {
    listLength++;
    currentNode = currentNode.next;
  }
  return listLength;
}

function getKthNode(headNode, k) {
  
  var currentNode = headNode;
  // Advance through k nodes and return kth + 1 node as new start
  while (currentNode !== null && k > 0) {
    currentNode = currentNode.next;
    k--;
  }
  return currentNode;
}
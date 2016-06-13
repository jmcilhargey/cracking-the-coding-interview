function Node(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

// We're given a sorted array and our task is to create a BST with minimal height
// That means as many nodes to the left as right so it's balanced
function makeBinaryTreeMinimalHeight(sortedArray, startIndex, endIndex) {
  
  var midPoint = Math.floor((endIndex - startIndex) / 2 + startIndex);
  var currentNode = new Node(sortedArray[midPoint]);
  // Base case where we've ran out of values in array
  if (startIndex > endIndex) {
    return null;
  }
  // Recurse by cutting the array range in half for left and right sub-trees
  currentNode.left = makeBinaryTreeMinimalHeight(sortedArray, startIndex, midPoint - 1);
  currentNode.right = makeBinaryTreeMinimalHeight(sortedArray, midPoint + 1, endIndex);
  return currentNode;
}

var arr = [1, 4, 6, 9, 13, 16, 19, 20, 24, 27];
var bst = makeBinaryTreeMinimalHeight(arr, 0, arr.length - 1);
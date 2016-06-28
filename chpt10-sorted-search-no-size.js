/* We're given a array-like list of positive integers that are sorted in order and we're asked to find a given value. However, the list doesn't have a size or length property (we pretend it doesn't although we use an array). It does have a method elementAt(index) that returns the value or -1 if the index is out of bounds. */

// Can we do this in O(lg n) time where we cut the number of values in half each iteration?
// With binary search yes, but we need the size of the list
// We can get the approximate size of the list in O(lg n) time if we start guessing and double the guess each time


// Make a sample function constructor with the elementAt method
function SortedList(arrayOfValues) {
  this.values = arrayOfValues;
}

SortedList.prototype.elementAt = function(index) {
  if (typeof this.values[index] === "undefined") {
    return -1;
  }
  return this.values[index];
};

function findValueInList(list, searchValue) {
  
  // We may overshoot the list length but still be within an order of 2
  // We'll need add a condition if we go out of bounds to take a step left to lower values to account for this
  var listCeiling = getListCeiling(list);
  var listFloor = 0;
  var middleIndex = Math.floor((listCeiling - listFloor) / 2 + listFloor);

  while (listFloor < listCeiling) {
 
    // Condition if we go out of bounds
    if (list.elementAt(middleIndex) === -1) {
      console.log("halving");
      middleIndex = Math.floor(middleIndex / 2);
    }
    // The rest is binary search
    if (list.elementAt(middleIndex) === searchValue) {
      return middleIndex;
    }
    
    if (list.elementAt(middleIndex) < searchValue) {
      listFloor = middleIndex;
    } else {
      listCeiling = middleIndex;
    }
    middleIndex = Math.floor((listCeiling - listFloor) / 2 + listFloor);
  }
  throw new Error("Value not found");
}

function getListCeiling(list) {
  
  var length = 1;
  
  while (list.elementAt(length) !== -1) {
    length *= 2;
  }
  return length;
}

// We take O(lg n) time to calculate the size and O(lg n) to search for the value. 
// It's O(lg n) because we can drop the constant since big O notation refers to the overall the rate of increase as n gets really big
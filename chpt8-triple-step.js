/* A child running up a staircase with n steps can take either 1, 2, or 3 steps at a time. Come up with a method to determine the number of possible ways the child could go up the stairs */

// We have a choice each time to take 1 2 or 3 steps. How do we know that we've completed a sequence? When we've landed on the last step. We can't overshoot the step or it's not valid.
// So if we take n steps, how many are left for numOfSteps? It's numOfSteps - n.
// We can recurse with each possibility and add together all the valid combinations (where we end up with 0 steps left over).


// Use a parent wrapper class so we memoize the results to prevent duplicate function calls
// The runtime is ~ O(3^n) since we branch out 3 ways each funciton call

function Steps() {
  this.memo = {};
}

Steps.prototype.findAllSteps = function(numOfSteps) {
  
  var memoKey = String(numOfSteps);
  
  if (numOfSteps === 0) {
    return 1;
  }
  if (numOfSteps < 0) {
    return 0;
  }
  
  if (this.memo.hasOwnProperty(memoKey)) {
    console.log("Getting memo for numOfSteps = " + memoKey);
    return this.memo[memoKey];
  }
  
  this.memo[memoKey] = this.findAllSteps(numOfSteps - 1) + this.findAllSteps(numOfSteps - 2) + this.findAllSteps(numOfSteps - 3);
  
  return this.memo[memoKey];
};
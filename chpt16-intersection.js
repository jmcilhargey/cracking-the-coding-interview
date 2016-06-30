/* We're given 2 line segments that have a start point and end point. We need to determine if they intersect in their range. */

// This problem takes us back to algebra where the equation for a line is y = mx + b
// x and y are a point along the line and m is the slope and b is the y-intercept

// So if we have 2 lines, we can calculate the equation for each and then set the equations equal to one another to solve for the intersection point
// If the intersection lies within the range of both lines, then we have an intersect

// Sample data with intersection point
var a = { x1: 4, y1: 1, x2: 6, y2: 9 };
var b = { x1: 1, y1: 5, x2: 7, y2: 2 };

function findIntersection(line1, line2) {
  // Can't calculate with this method because we get an infinite slope
  if (line1.x1 === line1.x2 || line2.x1 === line2.x2) {
    throw new Error("Method doesn't work for vertical slope");
  }
  
  var slope1 = (line1.y2 - line1.y1) / (line1.x2 - line1.x1);
  var slope2 = (line2.y2 - line2.y1) / (line2.x2 - line2.x1);
  // If the slopes are the same, then we have parallel lines that won't ever intersect
  if (slope1 === slope2) {
    return false;
  }
  
  var yIntercept1 = line1.y1 - slope1 * line1.x1;
  var yIntercept2 = line2.y1 - slope2 * line2.x1;
  
  // At the point of intersection, the y coordinates are always equal
  // We can use this set the 2 equations equal to each other to solve for the x value
  var xIntersect = (yIntercept2 - yIntercept1) / (slope1 - slope2);
  // Now we find the y value by plugging x into either line and solve for y
  var yIntersect = slope1 * xIntersect + yIntercept1;
  console.log(yIntersect);
  // Now we check if intersection lies within range of each line
  if (checkInRange(xIntersect, line1.x1, line1.x2) && checkInRange(xIntersect, line2.x1, line2.x2) && checkInRange(yIntersect, line1.y1, line1.y2) && checkInRange(yIntersect, line2.y1, line2.y2)) {
    return true;
  } else {
    return false;
  }
}

function checkInRange(intersect, point1, point2) {
  
  var lowerBound = Math.min(point1, point2);
  var upperBound = Math.max(point1, point2);
  
  return lowerBound <= intersect && intersect <= upperBound;
}
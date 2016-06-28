/* We have an file that contains 4 billion positive integers and we need to create an algorithm that will find an integer not in the file. We have 1 GB of memory available. */

// A gigabyte of memory is 1 billion bytes of memory or 8 billion bits
// How can we know which numbers aren't accounted for? We'll need to read every integer from the file
// Let's say that the total range of positive numbers is 2^32 (although in JS it's actually 2^53)
// We can create a unsigned typed integer array to minimize the size of each value we load into the array
// The size of a value in Uint32Array is 4 bytes
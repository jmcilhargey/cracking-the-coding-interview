// How does this function work?

function checkIfNPowerOf2 (num) {
  return (num & (num - 1)) === 0;
}

// The bitwise operator & compares num and num - 1 and only returns true if every bit in num and num - 1 evaluates to 0
// What would this look like? Take 100110 & 000000 or 100110 & 011001
// What happens when we subtract 1 from num? Take an example 101100 becomes 1011011
// The first 1 found is turned to 0 and any preceding zeros are flipped to 1s
// The only way we could get num and num - 1 to equal 0 is if we flipped every number when we subtract 1
// That only happens for a single 1 followed by 0s, which means num is a power of 2
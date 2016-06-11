function isStringRotation(string1, string2) {
  // A rotation point is when string2 is cut into two parts and rearranged like "soccer" and "cersoc"
  // How do we know if it's a rotation? - One way is to put a copy next to string2 and check if string1 is inside
  
  if (string1.length === string2.length) {
    return isSubstr(string1, string2 + string2);
  }
  return false;
}

function isSubstr(string1, string2) {
  return string2.indexOf(string1) > -1;
}

console.log(isStringRotation("soccer", "cersoc"));
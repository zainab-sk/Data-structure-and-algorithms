// Print All Possible Strings
class Solution {
  constructor() {
    this.subsetSpace = [];
  }
  spaceStringRecur(index, n, newStr, str) {
    if (index >= n) {
      return this.subsetSpace.push(newStr);
    }
    this.spaceStringRecur(
      index + 1,
      n,
      newStr.concat(" ", str[index + 1]),
      str
    );
    this.spaceStringRecur(index + 1, n, newStr.concat(str[index + 1]), str);
  }
  spaceString(str) {
    this.spaceStringRecur(0, str.length - 1, str[0], str);
    return this.subsetSpace.reverse();
  }
}
const obj = new Solution();
let result = obj.spaceString("xy");
console.log(result);

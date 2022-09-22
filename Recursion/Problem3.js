class Solution {
  constructor() {
    this.newchars = [];
  }
  removeRecur(s, chars, k, n, index) {
    while (index <= n) {
      if (chars[index - 1] != chars[index]) {
        chars[k] = chars[index - 1];
        k += 1;
      } else {
        while (index < chars.length && chars[index - 1] === chars[index]) {
          index += 1;
        }
      }
      index += 1;
    }
    chars[k] = chars[index - 1];
    k = k + 1;
    this.newchars = chars.slice(0, k);
    s = this.newchars.join("");

    if (k != n) {
      return this.removeRecur(s, s.split(""), 0, s.length - 1, 1);
    }
    return s;
  }
  rremove(s) {
    return this.removeRecur(s, s.split(""), 0, s.length - 1, 1);
  }
}
let obj = new Solution();
let result = obj.rremove("abccbccba");
console.log(result);

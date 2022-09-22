// Print 1 to N without using Loop
class Solution {
  constructor() {
    this.s = "";
  }

  printNosRecur(N) {
    if (N === 0) {
      return;
    }
    this.printNosRecur(N - 1);
    this.s += N + " ";
  }
  printNos(N) {
    this.printNosRecur(N);
    console.log(this.s);
  }
}
const obj = new Solution();
obj.printNos(10);

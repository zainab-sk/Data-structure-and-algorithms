class Solution {
  constructor() {
    this.duplicate;
    this.result = [];
    this.j = 0;
  }
  duplicates(a, n) {
    //your code here
    this.duplicate = a[this.j];
    for (let i = 1; i < n; i++) {
      if (a[i] == this.duplicate) {
        this.result.push(this.duplicate);
        this.j++;
        i = this.j;
        this.duplicate = a[this.j];
      }
      if (i == n - 1) {
        this.j++;
        i = this.j;
        this.duplicate = a[this.j];
      }
    }
    return this.result.sort((a, b) => {
      return a - b;
    });
  }
}
let obj = new Solution();

console.log(obj.duplicates([2, 3, 1, 1, 2, 3, 3], 7));

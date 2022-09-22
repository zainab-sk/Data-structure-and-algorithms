class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  constructor() {
    this.maxint = Math.pow(2, 53);

    this.max_ending_here = 0;
    this.max_so_far = -this.maxint - 1;
  }
  maxSubarraySum(arr, N) {
    for (let i = 0; i < N; i++) {
      this.max_ending_here = this.max_ending_here + arr[i];
      if (this.max_so_far < this.max_ending_here) {
        this.max_so_far = this.max_ending_here;
      }
      if (this.max_ending_here < 0) {
        this.max_ending_here = 0;
      }
    }
    return this.max_so_far;
  }
}
const obj = new Solution();
console.log(obj.maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3], 8));

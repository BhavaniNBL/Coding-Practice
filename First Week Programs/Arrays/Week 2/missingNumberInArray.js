function missingNumberInArray(nums, N) {
    let sum=0;
    let total = (N*(N+1))/2;
    for (let i = 0; i < N-1; i++) {
     sum += nums[i];
    }
    return total-sum;
  }

const nums = [1, 2, 3, 4, 5, 6, 7, 9, 10];
const result = missingNumberInArray(nums, nums.length);
console.log(result);
function countOddEven(nums) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return [oddCount, evenCount];
  }

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const counts = countOddEven(nums);
console.log(counts);
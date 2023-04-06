function flower(arr, n) {
    for(let i=0;i<arr.length; i++){
      if (arr[i] === 0 && arr[i - 1] !== 1 && arr[i + 1] !== 1) {
      n--;
      i++;
    }
  }
  return n === 0;
}

let arr = [1,0,0,0,1, 0, 0];
let n = 2;
const result = flower(arr, n);
console.log(result);
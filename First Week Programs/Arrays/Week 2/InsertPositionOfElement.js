function insertPosition(arr, k) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == k) {
            return i;
        } else if(arr[i] > k) {
            return i;
        }
    }
    return arr.length;
}

let arr= [1,7,10,11, 13];
let k = 12;
const result = insertPosition(arr, k);
console.log(result);
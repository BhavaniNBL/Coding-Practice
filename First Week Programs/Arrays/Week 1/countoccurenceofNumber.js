function countOccurence(arr, n, x) {
    let result = 0;
    for(let i=0; i<n; i++) {
        if(arr[i] == x) {
            result++;
        }
    }
    return result;
}

var arr = [1, 4, 5, 4, 8, 9, 6, 10, 13, 15];
var n = arr.length;
var x= 4;
console.log(countOccurence(arr,n, x ));
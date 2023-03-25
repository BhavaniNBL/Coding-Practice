function DuplicatesinArray(arr) {
    newArr = [];
    index=0;
    for(let i=0; i<arr.length-1; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(arr[i] == arr[j]) {
               newArr[index] = arr[i];
               index++;
            }
        }
    }
    return newArr;
}

var array = [6, 4, 9, 6, 5, 3, 2, 9, 4, 20, 19, 11];
console.log(DuplicatesinArray(array));

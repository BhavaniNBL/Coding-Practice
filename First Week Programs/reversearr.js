function reverseArray (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {      
        newArr[i] = arr[arr.length - i - 1];
    }   
    return newArr;
}
console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));
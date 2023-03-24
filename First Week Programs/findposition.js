function findposition(arr, k){
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==k){
            return i;
        } 
    }
    return 1;

}
let arr = [1, 2, 5, 8, 10];
let k = 8;
console.log(findposition(arr, k));
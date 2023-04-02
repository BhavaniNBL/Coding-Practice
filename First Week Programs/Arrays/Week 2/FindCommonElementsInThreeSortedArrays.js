function findCommonElementsInThreeArrays(a1,a2,a3) {
    // let commonElements = [];
    let count = 0;
    for(let i=0; i<a1.length; i++) {
      for( let j=0; j< a2.length; j++) {
        for(let k=0; k<arr.length; k++) {
            if(a1[i] == a2[j] && a2[j] == a3[k]) {
                count++;
            }
        }
      }
    }
    return `There are ${count} elements in the array`;
}

let arr1=[1,5,7,9];
let arr2 = [5,7, 8, 10, 12, 15, 17];
let arr3 = [5,7,15,17,19,20,21];
const result = findCommonElementsInThreeArrays(arr1, arr2, arr3);
console.log(result);
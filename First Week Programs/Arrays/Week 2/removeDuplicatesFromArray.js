// function removeDuplicates(arr) {
//     let newArr = [];
//     index=0;
//     for(let i=0; i<arr.length; i++) {
//         for(j=i+1; i<arr.length; j++) {
//            if(arr[i] == arr[j]) {
//             break;
//            } else {
//             newArr[index] = arr[i];
//             index++;
//            }
//         }
//     }
// }

// let arr = [1, 5, 1, 5, 7, 8, 9];
// const removeDuplicatesArray = removeDuplicates(arr);
// console.log(removeDuplicatesArray);
function removeDuplicates(array) {
    const uniqueArray = [];
    let index = 0;
  
    for (let i = 0; i < array.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (array[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArray[index] = array[i];
        index++;
      }
    }
  
    return uniqueArray;
  }
   
  const array = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(array);
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
  
  
  
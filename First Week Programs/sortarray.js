let arr = [4, 2, 5, 1]
let temp;

function sort(arr) {

  for(let i=0; i<arr.length; i++) {

    for (let j=i+1; j<arr.length; j++) {

      if(arr[i] > arr[j]) {

        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

const newArr = sort(arr)
console.log(newArr)
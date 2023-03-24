function subarray(arr, sum) {
    let cur_sum = 0;
    for(let i=0; i<arr.length; i++) {
        // console.log(arr[i]);
        cur_sum=cur_sum+arr[i];
        if(cur_sum == sum) {
            console.log(arr[i]); 
            return;
        }
    }
    console.log("false");
    }


var arr = [1,6,10,20,15,45];
var sum = 36;
console.log(subarray(arr, sum));
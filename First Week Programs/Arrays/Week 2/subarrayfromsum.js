// function subarray(arr,n, sum) {
//     let cur_sum = 0;
//     let flag =0;
//     let start = 0;
//     for(let i=0; i<n; i++) {
//         // console.log(arr[i]);
//         cur_sum=cur_sum+arr[i];
//         if(cur_sum == sum) {
//             console.log(arr[i]); 
//             return;
//         }
//     }
//     console.log("false");
//     }


// var arr = [1,6,10,20,15,45];
// var n = arr.length;
// var sum = 36;
// console.log(subarray(arr, n, sum));
function subarray(arr,n, sum) {
    let cur_sum = 0;
    let flag =0;
    let start = 0;
    for(let i=0; i<n; i++) {
        // console.log(arr[i]);
        cur_sum = cur_sum + arr[i];
        while(cur_sum > sum) {
            cur_sum = cur_sum - arr[start];
            start++;
        }
        if(cur_sum == sum) {
            console.log(start+1,i+1);
            flag =0;
            break;
        }
        if(flag ==0) {
            console.log(-1);
        }
    }
    }


var arr = [1,6,10,20,15,45];
var n = arr.length;
var sum = 36;
console.log(subarray(arr, n, sum));
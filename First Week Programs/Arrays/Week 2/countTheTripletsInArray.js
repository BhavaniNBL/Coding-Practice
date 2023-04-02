function countTriplets(A, N) {
    let count =0;
   for(let i = 0; i < N; i++){
      for(let j = i + 1; j < N; j++){
         for(let k = j + 1; k < N; k++){
             if(A[i] + A[j] == A[k]){
                   count++;
             }
         }
      }
    }
    return count;
  
  }
  
  // let str="bhavani";
  let arr_str=[1,2,3,5,7];
  const result = countTriplets(arr_str, arr_str.length);
  console.log(result);
function findarmStrong(n){
       let sum = 0;
       let temp = n;
       while(temp > 0) {
        let rem = temp %10;
        sum+= rem * rem * rem;
        temp = parseInt(temp / 10);
       }
       if (sum == n) {
        return `${n}  is an Armstrong number`;
    }
    else {
        return `${n} is not an Armstrong number`;
    }
       
}

let n = 123;
console.log(findarmStrong(n))
function sortString(str) {
    let temp;
    let new_str = str.split("");
    for(let i=0; i<new_str.length;i++) {
        for(let j=i+1; j<new_str.length; j++) {
            if(new_str[i] > new_str[j]) {
                temp = new_str[i]; 
                new_str[i] = new_str[j];
                new_str[j] = temp;
            }
        }
    }
    return new_str.join("");
}

let str="bhavani";
const result = sortString(str);
console.log(result);
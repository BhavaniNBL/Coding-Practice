function sortString(str) {
    let temp;
    // let new_str = str.split("");
    for(let i=0; i<str.length;i++) {
        for(let j=i+1; j<new_str.length; j++) {
            if(str[i] > str[j]) {
                temp = str[i]; 
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
    return str;
}

// let str="bhavani";
let arr_str=["bhavani", "nan", "ccc", "hhhhhh", "aaaaaaa", "zzzzzzzzzzz", "eeeeeeee"];
const result = sortString(arr_str);
console.log(result);
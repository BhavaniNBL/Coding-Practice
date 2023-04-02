function sortString(str, val) {
  console.log("String", str);
  let encrypt_str = "";
  let encrypted_str = "";
  let decrypted_str = "";
  let decrypt_str = "";
  for (let i = 0; i < str.length; i++) {
    encrypt_str += str.charCodeAt(i) + val + ",";
    encrypted_str += String.fromCharCode(encrypt_str.split(",")[i]);
  }
  // console.log("new_str", new_str.split(","));
  // console.log("new_str without split", new_str);
  // encrypted_str = new_str.split(",");
  // console.log("encr", encrypted_str);
  // for(let i=0; i<str.length; i++) {
  //    enc_str += String.fromCharCode(new_str.split(",")[i]);
  // }
  console.log("Encrypted string", encrypted_str);
  for (let i = 0; i < str.length; i++) {
    decrypt_str += encrypted_str.charCodeAt(i) - val + ",";
    decrypted_str += String.fromCharCode(decrypt_str.split(",")[i]);
  }
  // console.log("decrypt_string", decrypt_str);

  console.log("decrypted_str", decrypted_str);
}

let str = "bhavani";
let val = 3;
const result = sortString(str, val);
console.log(result);

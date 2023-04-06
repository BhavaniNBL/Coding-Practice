// function sortString(str, val) {
//   console.log("String", str);
//   let encrypt_str = "";
//   let encrypted_str = "";
//   let decrypted_str = "";
//   let decrypt_str = "";
//   for (let i = 0; i < str.length; i++) {
//     encrypt_str += str.charCodeAt(i) + val + ",";
//     encrypted_str += String.fromCharCode(encrypt_str.split(",")[i]);
//   }
//   // console.log("new_str", new_str.split(","));
//   // console.log("new_str without split", new_str);
//   // encrypted_str = new_str.split(",");
//   // console.log("encr", encrypted_str);
//   // for(let i=0; i<str.length; i++) {
//   //    enc_str += String.fromCharCode(new_str.split(",")[i]);
//   // }
//   console.log("Encrypted string", encrypted_str);
//   for (let i = 0; i < str.length; i++) {
//     decrypt_str += encrypted_str.charCodeAt(i) - val + ",";
//     decrypted_str += String.fromCharCode(decrypt_str.split(",")[i]);
//   }
//   // console.log("decrypt_string", decrypt_str);

//   console.log("decrypted_str", decrypted_str);
// }

// let str = "bhavani";
// let val = 3;
// const result = sortString(str, val);
// console.log(result);

function decryptedStr(str, val) {
  let encrypted_str = "";
   for (let i = 0; i < str.length; i++) {
     let encrypt_str = str.charCodeAt(i) - val + "";
     // console.log("string before", encrypt_str);
     encrypted_str += String.fromCharCode(encrypt_str);
   } 
   return encrypted_str;
 }
 
 
 
 function encryptedStr(str, val) {
   let encrypted_str = "";
   for (let i = 0; i < str.length; i++) {
     let encrypt_str = str.charCodeAt(i) + val + "";
     // console.log("string before", encrypt_str);
     encrypted_str += String.fromCharCode(encrypt_str);
   } 
   return encrypted_str;
   // console.log("encr", encrypted_str);
 }
 let str = "bhavaniz";
 let val = 3;
 const result = encryptedStr(str, val);
 console.log(result);
 const resultde = decryptedStr(result, val);
 console.log(resultde);

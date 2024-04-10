const dataToencode="hello world";
const base64Encoded = Bufeer.form(dataToencode).toString('base64');
console.log("Base64 encoded:",base64Encoded);

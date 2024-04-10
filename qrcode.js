const fs=require('fs')
const QRCode=require('qrcode')

const textToEncode='Hello World';

QRCode.toFile('qrcode.png',textToEncode,(err)=>{
    if(err){
        console.error('error generating',err)
    }
    else{
        console.log('qr generated')
    }
})
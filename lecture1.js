//FILESYSTEM IN NODE JS

//WriteFIle & WriteFileSync Operations

const fs = require('fs');
const path = require('path');
// const file2 = require('./lecture 2')
// fs.writeFile('example.txt', 'hello world', 'utf8', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else
//         console.log('File written succesfully');
// });

//  fs.writeFileSync('example1.txt', 'hello world', 'utf8')

//DAY 2 Node js

//READFILE & READFILESYNC Operations

// fs.readFile('example1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log("File read failed")
//     }
//     else {
//         console.log(data)
//     }
// })

// let data1 = fs.readFileSync('example1.txt', 'utf8')
// console.log("Data1",data1)

//MKDIR & mkdirSync operations

// let dirame = 'My Foolder1'
// // fs.mkdirSync(dirame)
// // console.log('directory made')
 
// fs.mkdir(dirame, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(' Directory created')
//     }
// })

//Append file

// fs.appendFile('example1.txt', ' this is added afterwards', 'utf-8', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("file appended")

//     }
// })

// fs.appendFileSync('example.txt', 'morning','utf-8')

//UNLINK & UnlinkSYnc   -> delete this file

// fs.unlink('example1.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('file deleted')
//     }
// })

// fs.unlinkSync('example.txt')

//File Rename -> rename this file

// fs.rename('example.txt', 'rokie.txt', (err) => {
//     if (err) {
//     console.log(err)
//     }
//     else {
//         console.log('file renamed')
//     }
// })

// fs.renameSync('rokie.txt', 'ruhan.txt')

// fs.stat('rohan.txt', (err,data) =>{
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('file stat',data)
//     }
// })


//DIRname & FileName

// console.log(__dirname,__filename)

// PathJoin

// let fullPath = path.join('/file1', '/file2')
// console.log(fullPath)

// // Path Resolve

let fullPath1 = path.resolve('/file1/file2')
console.log(fullPath1)

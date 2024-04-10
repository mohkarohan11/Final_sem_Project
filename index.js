// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     //res.send({name:'test'});
//   // res.json({name:'test'});
// })

// app.listen(5000, () => {
//     console.log('listening on port')
// })

const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config()
//importing the file path
require('./DBconfig.js')
let port = process.env.port

app.use(express.json());
app.set('view engine', 'ejs');
const ProductRoutes = require('./Router/productroutess.js');
app.use('/products', ProductRoutes)

const UserRoutes = require('./Router/userroutess.js');
app.use('/user', UserRoutes)

// const router = require("./Router/ProductRoutes.js");
// app.use('/products',router)

// app.get('/', (req, res) => {
//     let fullPath= path.join(__dirname, 'index.html');
//     res.sendFile(fullPath);
// })



// GET API
// app.get('/', (req, res) => { 
//     res.send('hello rohan');
// })

let Products = [];
app.get('/getProducts', (req, res) => {
    console.log(req.query)
    let index = Products.findIndex((e) => (e.id == req.query.id))
    
    res.send({
        isSuccess: true,
        messege: 'grt products successfully retrieved',
        product: Products[index]
    })
})
app.get("/allproducts", (req, res) => {
    let filterarray = Products.filter((e) => (e.isdeleted!=true))
    res.send({filterarray})
})

const func=require('./func.js')
const { subtractions } = require('./func.js')

app.get('/subtractions', (req, res) => {
    subtractions(5,3)
})
// app.post('/createProduct', (req, res) => {
//     console.log(req.body);
//     let obj = req.body
//     obj.id = Products.length + 1;
//     obj.isdeleted = false;
//     Products.push(obj);
//     res.send(
//         {
//             isSuccess: true,
//             messege:'successfully created product',
//             Products
//         })
//  })
// app.get('/ejs', (req, res) => {
    // let user = {
    //     name: 'rohan',
    //     admin: true
    // };
    // let product=[{
    //     name: 'ac',
    //     cost: '100'
    // },
    // {
    //         name: 'tv',
    //         cost: '200'
    // }]

    // res.render('index', {product:product});
//         res.render('func',{})
//  })

// app.delete("/delete", (req, res) => { 
//     let id = req.query.id;
//     let index = Products.findIndex((e) => (e.id == id))
//     Products.splice(index, 1);
//     res.send({ Products })
// })

// app.delete("/softdelete", (req, res) => {
//     let id = req.query.id;
//     let index = Products.findIndex((e) => (e.id == id))
//     Products[index].isdeleted=true
//     res.send(Products[index])
// });
// app.listen(5000, () => {
//     console.log('listening on 5000')
// })

app.listen(5000, () => {
    console.log('listening on ',port);
})
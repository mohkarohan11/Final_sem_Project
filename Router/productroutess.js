const express = require ('express');
const { CURSOR_FLAGS } = require('mongodb');
const {getProducts, deelete, updateData}=require('../Controller/ProductController')
const {CreProduct}=require('../Controller/ProductController')
const {dealete}=require('../Controller/ProductController')
const {softdealete}=require('../Controller/ProductController')
const {updaateData}=require('../Controller/ProductController')
let router = express.Router()
let Products=[]
router.get('/getProducts',getProducts) 
//let products= [
//     {
//         "name": "tvss",
//         "cost": 10052,
//         "des": "samsunsg",
//         "id": 1,
//         "isdeleted": true
//     },
//     {
//         "name": "tvss",
//         "cost": 10052,
//         "des": "samsunsg",
//         "id": 2,
//         "isdeleted": false
//     },
//     {
//         "name": "tvss",
//         "cost": 10052,
//         "des": "samsunsg",
//         "id": 3,
//         "isdeleted": false
//     },
//     {
//         "name": "tvss",
//         "cost": 10052,
//         "des": "samsunsg",
//         "id": 4,
//         "isdeleted": false
//     }
// ]

router.post('/CreProduct', CreProduct)

 router.delete("/delete", dealete)

router.delete("/softdelete",softdealete );
router.put("/updateData", updaateData)

module.exports = router; 
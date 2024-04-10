const express = require('express');
const path = require('path');
const app = express(); /

app.set('view engine', 'ejs');


app.get('/ejs', (req, res) => {
res.render('function', {product:product});
})

app.listen(3000, () => {
   console.log('listening on port')
})
let mongoose = require('mongoose');
require("dotenv").config()
//mongoose.connect(db url)
let url=process.env.DB_URL
mongoose.connect('mongodb+srv://mohkarohan:Ro17han6097@cluster0.toc6b4x.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser:true })

    .then(() => {
        console.log('database connection established');
    })

    .catch((err) => { 
        console.log('err');
    })
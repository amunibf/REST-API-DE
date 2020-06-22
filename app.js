const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser')
require('dotenv/config')


app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(cors())


const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)



app.get('/',(req,res)=>{
    res.send('We are on home!')
})


mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser : true, useUnifiedTopology: true},
    ()=>{console.log('Connected to DB')
})

app.listen('3000')
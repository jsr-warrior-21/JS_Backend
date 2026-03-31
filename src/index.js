const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const data = require('./data.json');

app.get('/',(req,res)=>{
    res.send("I am Started.");
})

app.get('/login',(req,res)=>{
    res.send('<h1>This is your Login Page.</h1>')
})

app.get('/data',(req,res)=>{ // aishe hi hum frontend ko bolte hai ki iss route prr data hai jaa krr fetch krr lo
    res.json(data);
})

app.listen(PORT,()=>{
    console.log('Server started on the PORT : ', PORT);
});
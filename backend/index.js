const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Hey this is the backend server')
})

app.post('/api/project', async(req,res)=>{
    console.log('POST request Triggered')
})

app.listen(3000, ()=>{
    console.log('ON PORT 3000')
})
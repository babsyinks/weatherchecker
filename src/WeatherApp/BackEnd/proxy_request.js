const axios = require('axios') 
const express = require('express')
const keys =  require('./Constants_Node')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.post('/',(req,res)=>{
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    axios.get(`https://api.darksky.net/forecast/${keys.darksky_key}/${latitude},${longitude}`)
    .then(result=>{
      //  console.log(result)
        const resultObj = {time:result.data.currently.time,temperature:result.data.currently.temperature,summary:result.data.currently.summary}
        
        res.json(resultObj)
    })
    .catch(err=>{console.log(err)})
})
app.listen(3001,()=>{
    console.log('listening on port ',3001)
})
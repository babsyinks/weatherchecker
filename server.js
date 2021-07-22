const axios = require('axios') 
const express = require('express')
const keys =  require('./Constants_Node')
const path = require('path')
const enforce = require('express-sslify')
const port = process.env.PORT || 3001
const staticFolder = process.env.NODE_ENV === 'production'?'build':'public'

const app = express()

app.use(express.static(path.resolve(__dirname,'client',`${staticFolder}`)))

app.use(express.json())

app.use(enforce.HTTPS({trustProtoHeader:true}))

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.post('/',(req,res)=>{
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    axios.get(`https://api.darksky.net/forecast/${keys.darksky_key}/${latitude},${longitude}`)
    .then(result=>{
        const resultObj = {time:result.data.currently.time,temperature:result.data.currently.temperature,summary:result.data.hourly.summary,other:result.data.daily.summary}
        res.json(resultObj)
    })  
    .catch(err=>{
        console.log(err)
        res.status(404).json({errMsg:'Sorry, Weather Information Is Currently Unavailable, Please Try Again Later'})
    })
})

app.get('/service-worker.js',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','service-worker.js'))
})

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


app.listen(port,()=>{
    console.log('listening on port ',port)
})
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

//please use latest version of node to see results

app.get("/product" ,(req,res)=>{
   fetch("https://fakestoreapi.com/products")
   .then((response)=>response.json())
   .then((response)=>{
    res.send(response)
   })
})

app.listen(process.env.PORT || 8080 ,()=>{
    console.log("server startted on port",process.env.PORT);
})
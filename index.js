const env = require("dotenv").config()
const express = require("express")

const PORT = process.env.PORT || 5000
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World"});
})

app.listen(PORT,(req,res)=>{
    console.log(`Server listening on PORT ${PORT}`)
})

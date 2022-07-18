const express=require('express')
const app=express()
const axios=require('axios')
const { json } = require('express')
const bodyParser=require('body-parser')
require('dotenv').config()
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/general-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})

app.get("/business-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})
app.get("/sports-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})
app.get("/politics-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})
app.get("/technology-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})

app.get("/entertainment-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})
app.get("/science-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})
app.get("/health-headlines",async (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${process.env.API_KEY}`)
    .then(data=>res.send(data.data))
})


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`port is listening on ${PORT}`)
})
const express=require('express')
const cors= require('cors')
const dotenv=require('dotenv')
const mongooseConnect=require('./connect')
const app=express()
dotenv.config({path: './config.env'})


//connecting to frontend
app.use(cors({
    origin:[process.env.frontend_URL],
    methods:["POST"],
    credentials:true
}))

//middlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//mongoose connection
mongooseConnect()
app.listen(process.env.PORT,()=>{console.log("server started at port ",process.env.PORT)})
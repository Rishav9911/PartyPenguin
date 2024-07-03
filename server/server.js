const express=require('express')
const cors= require('cors')
const dotenv=require('dotenv')
const UserRouter=require('./routes/user')
const OrganiserRouter=require('./routes/organiser')
const mongooseConnect=require('./connect')
const { errorMiddleWare } = require('./error')
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

//routes

app.use('/user',UserRouter)
app.use('/organiser',OrganiserRouter)

//mongoose connection
mongooseConnect()
app.use(errorMiddleWare)
app.listen(process.env.PORT,()=>{console.log("server started at port ",process.env.PORT)})
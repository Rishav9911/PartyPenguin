const express=require('express')
const { HandleUserSignUp, HandleUserLogin } = require('../controllers/user')

const UserRouter=express.Router()

UserRouter.post('/signup',HandleUserSignUp)
UserRouter.post('/login',HandleUserLogin)


module.exports=UserRouter
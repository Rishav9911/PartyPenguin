const express= require('express')
const { HandleOrganiserSignUp, HandleOrganiserLogin } = require('../controllers/organiser')

const OrganiserRouter=express.Router()

OrganiserRouter.post('/signup',HandleOrganiserSignUp)
OrganiserRouter.post('/login',HandleOrganiserLogin)


module.exports=OrganiserRouter
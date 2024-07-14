const express= require('express')
const { HandleEventDetails } = require('../controllers/event')

const EventRouter=express.Router()

EventRouter.post('/inputDetails',HandleEventDetails)

module.exports=EventRouter
const express= require('express')
const { HandleEventDetails ,HandleGetEvents} = require('../controllers/event')

const EventRouter=express.Router()

EventRouter.post('/inputDetails',HandleEventDetails)
EventRouter.get('/getevents',HandleGetEvents)

module.exports=EventRouter
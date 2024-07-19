const express= require('express')
const { HandleEventDetails ,HandleGetEvents,HandleGetEventDetails} = require('../controllers/event')

const EventRouter=express.Router()

EventRouter.post('/inputDetails',HandleEventDetails)
EventRouter.get('/getevents',HandleGetEvents)
EventRouter.get('/geteventdetail',HandleGetEventDetails)

module.exports=EventRouter
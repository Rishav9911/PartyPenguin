
const express = require('express');
const { HandleEventDetails, HandleGetEvents,HandleGetEventDetails,HandleOrganiserEvents, upload } = require('../controllers/event');
const EventRouter = express.Router();
EventRouter.post('/inputDetails',upload,HandleEventDetails)
EventRouter.get('/getevents',HandleGetEvents)
EventRouter.get('/geteventdetail',HandleGetEventDetails)
EventRouter.get('/organiserevents',HandleOrganiserEvents)

module.exports = EventRouter;

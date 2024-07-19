
const express = require('express');
const { HandleEventDetails, HandleGetEvents, upload } = require('../controllers/event');

const EventRouter = express.Router();

EventRouter.post('/inputDetails', upload, HandleEventDetails);
EventRouter.get('/getevents', HandleGetEvents);


module.exports = EventRouter;

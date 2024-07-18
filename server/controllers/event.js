const { errorHandler } = require("../error");
const Event = require("../models/event");
const multer=require("multer");

const Storage= multer.diskStorage({
  destination:"./uploads",
  filename:(req,file,cb)=>{
    cb(null,Date.now()+file.originalname);
  },
});

const upload=multer({
  storage:Storage
}).single("poster")



async function HandleEventDetails(req, res, next) {
  const {
    eventTitle,
    eventDesc,
    eventCategory,
    eventDate,
    startTime,
    endTime,
    venueName,
    venueAddress,
    ticketTypes,
    ticketPrices,
    ticketAvailability,
    refundPolicy,
    organiserName,
    contactEmail,
    contactPhone,
    leadArtist,
    ageRestrictions,
    foodAndBeverage,
  } = req.body;


  if (
    !eventTitle ||
    !eventDesc ||
    !eventCategory ||
    !eventDate ||
    !startTime ||
    !endTime ||
    !venueName ||
    !venueAddress ||
    !ticketTypes ||
    !ticketPrices ||
    !ticketAvailability ||
    !refundPolicy ||
    !organiserName ||
    !contactEmail ||
    !contactPhone
  ) {
    return next(new errorHandler("Please fill all the required details!", 400));
  }

  try {
    const imagePath = '/uploads/' + req.file.filename;

    await Event.create({
      eventTitle,
      eventDesc,
      eventCategory,
      eventDate,
      startTime,
      endTime,
      venueName,
      venueAddress,
      ticketTypes,
      ticketPrices,
      ticketAvailability,
      refundPolicy,
      organiserName,
      contactEmail,
      contactPhone,
      leadArtist,
      ageRestrictions,
      foodAndBeverage,
      image: imagePath,
    });
    return res
      .status(200)
      .json({ success: true, message: "Details stored successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new errorHandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  }
}
async function HandleGetEvents(req, res) {
  const currentDate = new Date();
  const events = await Event.find({ eventDate: { $gte: currentDate } });
  //console.log(events);
  const isUser=req.cookies?.uid;
  return res.status(200).json({ msg: events,isUser:isUser===undefined?false:true });
}

module.exports = {
  HandleEventDetails,
  HandleGetEvents,
  upload
};

const mongoose = require('mongoose');
const validator = require('validator');

function isFutureDate(value) {
    return value >= new Date();
}

const eventSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
        required: [true, "Event Name is required"],
        minLength: [3, "Event Name must contain at least 3 characters"]
    },
    eventDesc: {
        type: String,
        required: [true, "Event Description is required"],
        unique: true,
        minLength: [5, "Event Description must contain at least 5 characters"]
    },
    eventCategory: {
        type: String,
        required: [true, "Event Category is required"], 
        enum: {
            values: ['Music', 'Dance', 'Comedy'],
            message: 'Event Category must be either Music, Dance, or Comedy'
        }
    },
    eventDate: {
        type: Date,
        required: [true, "Event Date is required"],
        validate: {
            validator: isFutureDate,
            message: "Event Date must be in the future"
        }
    },
    startTime: {
        type: String,
        required: [true, "Start Time is required"],
        validate: {
            validator: function(v) {
                return /^\d{2}:\d{2}$/.test(v); 
            },
            message: props => `${props.value} is not a valid time format, write in HH:MM!`
        }
    },
    endTime: {
        type: String,
        required: [true, "end Time is required"],
        validate: {
            validator: function(v) {
                return /^\d{2}:\d{2}$/.test(v); 
            },
            message: props => `${props.value} is not a valid time format,write in HH:MM!`
        }
    },
    venueName: {
        type: String,
        required: [true, "Venue Name is required"]
    },
    venueAddress: {
        type: String,
        required: [true, "Venue Address is required"]
    },
    ticketTypes: {
        type: [String], 
        required: [true, "Ticket Types are required"]
    },
    ticketPrices: {
        type: [String], 
        required: [true, "Ticket Prices corresponding to ticket types are required"],
        validate: {
            validator: function(v) {
                return this.ticketTypes.length === v.length;
            },
            message: props => `The  of ticket prices (${props.value.length}) does not match the number of ticket types (${this.ticketTypes.length})`
        }
    },

    ticketAvailability: {
        type: [String], 
        required: [true, "Ticket Availability is required"],
        validate: {
            validator: function(v) {
                return this.ticketTypes.length === v.length;
            },
            message: props => `The number of ticket availabilities (${props.value.length}) does not match the number of ticket types (${this.ticketTypes.length})`
        }
    },
    refundPolicy: {
        type: String,
        required:[true,"Please specify refund policy for the buyers"],
    },
    organiserName: {
        type: String,
        required: [true, "Organiser Name is required"]
    },
    contactEmail: {
        type: String,
        required: [true, "Contact Email is required"],
        validate: {
            validator: function(v) {
                return validator.isEmail(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    contactPhone: {
        type: String,
        required: [true, "Contact Phone is required"],
        validate: {
            validator: function(v) {
                return validator.isMobilePhone(v, 'any', { strictMode: false });
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },

    leadArtist: {
        type: [String]
    },
    ageRestrictions: {
        type: String
    },
    foodAndBeverage: {
        type: String
    },
});


eventSchema.pre('save', function(next) {
    if (this.startTime && this.endTime) {
        const [startHours, startMinutes] = this.startTime.split(':').map(Number);
        const [endHours, endMinutes] = this.endTime.split(':').map(Number);
        const startDate = new Date(0, 0, 0, startHours, startMinutes);
        const endDate = new Date(0, 0, 0, endHours, endMinutes);

        if (endDate <= startDate) {
            return next(new Error('End Time must be after Start Time'));
        }
    }
    next();
});

const EventModel = mongoose.model('Event', eventSchema);
module.exports = EventModel;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './hostEvent.scss';

const HostEvent = () => {
    const [formData, setFormData] = useState({
        eventTitle: "",
        eventDesc: "",
        eventCategory: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        venueName: "",
        venueAddress: "",
        ticketTypes: "",
        ticketPrices: "",
        ticketAvailability: "",
        refundPolicy: "",
        organiserName: "",
        contactEmail: "",
        contactPhone: "",
        leadArtist: "",
        ageRestrictions: "",
        foodAndBeverage: "",
        poster: null,
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState("");

    // const handleChange = ({ currentTarget: input }) => {
    //     setFormData({ ...formData, [input.name]: input.value });
    // };

    const handleChange = ({ currentTarget: input }) => {
        if (input.type === "file") {
            setFormData({ ...formData, [input.name]: input.files[0] });
        } else {
            setFormData({ ...formData, [input.name]: input.value });
        }
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let eventTitle = formData.eventTitle;
            let eventDesc = formData.eventDesc;
            let eventCategory = formData.eventCategory;
            let eventDate = formData.eventDate;
            let startTime = formData.startTime;
            let endTime = formData.endTime;
            let venueName = formData.venueName;
            let venueAddress = formData.venueAddress;
            let ticketTypes = formData.ticketTypes;
            let ticketPrices = formData.ticketPrices;
            let ticketAvailability = formData.ticketAvailability;
            let refundPolicy = formData.refundPolicy;
            let organiserName = formData.organiserName;
            let contactEmail = formData.contactEmail;
            let contactPhone = formData.contactPhone;
            let leadArtist = formData.leadArtist;
            let ageRestrictions = formData.ageRestrictions;
            let foodAndBeverage = formData.foodAndBeverage;
            let poster = formData.poster;

            

            const response = await axios.post(
                "http://localhost:5000/event/inputDetails",
                {
                    eventTitle, eventDesc, eventCategory, eventDate, startTime, endTime,
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
                    poster
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Credentials": true,
                    },
                    withCredentials: true,
                }
            )
            setMessage(response.data.message);
            setFormData({
                eventTitle: "",
                eventDesc: "",
                eventCategory: "",
                eventDate: "",
                startTime: "",
                endTime:"",
                venueName:"",
                venueAddress:"",
                ticketTypes:"",
                ticketPrices:"",
                ticketAvailability:"",
                refundPolicy:"",
                organiserName:"",
                contactEmail:"",
                contactPhone:"",
                leadArtist:"",
                ageRestrictions:"",
                foodAndBeverage:"",
                poster: null,
            });
            navigate("/home_user");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setMessage(error.response.data.message);
            }
        }
    };
    return (
        <div className="container">
            <h1>Event Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Title</label>
                    <input
                        type="text"
                        name="eventTitle"
                        value={formData.eventTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Description</label>
                    <input
                        type="text"
                        name="eventDesc"
                        value={formData.eventDesc}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Category</label>
                    <select
                        name="eventCategory"
                        value={formData.eventCategory}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Music">Music</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Dance">Cultural</option>
                    </select>
                </div>
                <div>
                    <label>Event Date (DD-MM-YYYY)</label>
                    <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Start Time (HH:MM)</label>
                    <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>End Time (HH:MM)</label>
                    <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Venue Name</label>
                    <input
                        type="text"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Venue Address</label>
                    <input
                        type="text"
                        name="venueAddress"
                        value={formData.venueAddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ticket Types (comma separated)</label>
                    <input
                        type="text"
                        name="ticketTypes"
                        value={formData.ticketTypes}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ticket Prices (comma separated)</label>
                    <input
                        type="text"
                        name="ticketPrices"
                        value={formData.ticketPrices}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ticket Availability (comma separated)</label>
                    <input
                        type="text"
                        name="ticketAvailability"
                        value={formData.ticketAvailability}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Refund Policy</label>
                    <input
                        type="text"
                        name="refundPolicy"
                        value={formData.refundPolicy}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Organizer Name</label>
                    <input
                        type="text"
                        name="organiserName"
                        value={formData.organiserName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contact Email</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contact Phone</label>
                    <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                        minLength={10}
                        maxLength={10}
                    />
                </div>
                <div>
                    <label>Lead Artist</label>
                    <input
                        type="text"
                        name="leadArtist"
                        value={formData.leadArtist}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Age Restrictions</label>
                    <input
                        type="text"
                        name="ageRestrictions"
                        value={formData.ageRestrictions}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Food and Beverage</label>
                    <input
                        type="text"
                        name="foodAndBeverage"
                        value={formData.foodAndBeverage}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Poster</label>
                    <input
                        type="file"
                        name="poster"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
           
        </div>
    );
};

export default HostEvent;

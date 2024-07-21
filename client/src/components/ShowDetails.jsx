import React, { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import img from "./bassi.avif";

// Helper function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const ShowDetails = () => {
  const [event, setEvent] = useState({});
  const location = useLocation();
  const navigate=useNavigate()
  const getDetails = async () => {
    const { id } = location.state || {};
    const result = await fetch("http://localhost:5000/event/geteventdetail", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "event-id": id,
      },
      credentials: "include",
    });
    let Event = await result.json();
    Event["ticketTypes"] = Event["ticketTypes"][0].split(",");
    Event["ticketPrices"] = Event["ticketPrices"][0].split(",");
    Event["ticketAvailability"] = Event["ticketAvailability"][0].split(",");
    setEvent(Event);
  };

  useEffect(() => {
    getDetails();
  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans items-center">
      <button
        className="absolute top-1 left-1 bg-white text-back py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        onClick={() => navigate('/home_user')}
      >
        Back to Home
      </button>
      <div className="flex-grow inline-block bg-white md-4 rounded-lg shadow-lg overflow-hidden mt-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center p-4">
            {event.image && (
              <img
                className="object-cover w-3/4 md:w-full"
                src={img}
                alt="Show Poster"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-extrabold text-gray-900 uppercase">
              {event.eventTitle}
            </h1>
            <div className="mt-4 text-gray-700">
              <p className="text-lg">
                <span className="font-bold text-gray-800">Date:</span>{" "}
                {event.eventDate && formatDate(event.eventDate)}
              </p>
              <p className="text-lg mt-1">
                <span className="font-bold text-gray-800">Time:</span>{" "}
                {event.startTime} - {event.endTime}
              </p>
              <p className="text-lg mt-1">
                <span className="font-bold text-gray-800">Venue Name:</span>{" "}
                {event.venueName}
              </p>
              <p className="text-lg mt-1">
                <span className="font-bold text-gray-800">Venue Address:</span>{" "}
                {event.venueAddress}
              </p>
              <p className="text-lg mt-1">
                <span className="font-bold text-gray-800">
                  Age Restriction:
                </span>{" "}
                {event.ageRestrictions}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">Description</h2>
              <p className="mt-4 text-gray-600">{event.eventDesc}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">Lead Artist</h2>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                {event.leadArtist &&
                  event.leadArtist.map((ele, index) => (
                    <li key={index}>{ele}</li>
                  ))}
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Additional Details
              </h2>
              <p className="mt-4 text-gray-600">
                <span className="font-bold text-gray-800">
                  Food and Beverages:{" "}
                </span>
                {event["foodAndBeverage"] === ""
                  ? "No information provided"
                  : event["foodAndBeverage"]}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Ticket Information
              </h2>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                {event.ticketTypes &&
                  event.ticketTypes.map((ele, index) => (
                    <li key={index} className="uppercase">
                      <span className="font-bold">{ele}</span>
                      <ul className="list-square list-inside ml-5 text-gray-600">
                        <li>
                          <span className="font-bold">No of Tickets: </span>
                          <span>{event.ticketAvailability[index]}</span>
                        </li>
                        <li>
                          <span className="font-bold">Price of Ticket: </span>
                          <span>{event.ticketPrices[index]}</span>
                        </li>
                      </ul>
                    </li>
                  ))}
              </ul>
            </div>

            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-black py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-red-600 text-white w-full py-6 mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-semibold text-lg text-white">Contact Us</p>
          <p className="mt-2 text-white">
            <span className="font-bold text-white">Phone No:</span> +91
            {event["contactPhone"]}
          </p>
          <p className="mt-1 text-white">
            <span className="font-bold text-white">EMAIL:</span>{" "}
            {event["contactEmail"]}
          </p>
          <p className="mt-1 text-white">
            <span className="font-bold text-white">Refund Policy: </span>
            {event["refundPolicy"]}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShowDetails;

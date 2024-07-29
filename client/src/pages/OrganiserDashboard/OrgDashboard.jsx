
import React, { useEffect, useState } from 'react';
import "./OrgDashboard.scss";
import { useNavigate } from "react-router-dom";


function OrgDashboard() {
  const [Events, setEvents] = useState([]);
  const [isUser, setIsUser] = useState();
  const navigate = useNavigate();

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/event/organiserevents", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        //   "Access-Control-Allow-Credentials": true,
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const events = await response.json();
      setEvents(events["msg"]);
      setIsUser(events["isUser"]);
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    getEvents();
  }, []); 

  return (
    <div className="App">
      <h1>Data from MongoDB</h1>
      <ul>
        {Events && Events.map(event => (
          <li key={event._id}>
            {event.eventTitle} - {event.eventDesc}
            <img src={`http://localhost:5000${event.image}`} alt={event.eventTitle} />
           
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default OrgDashboard;


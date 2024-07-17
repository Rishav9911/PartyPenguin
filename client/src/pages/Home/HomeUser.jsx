import React, { useEffect, useState } from "react";
import Imagecarousal from "../../components/Imagecarousal";
import ActiveSlider from "../../components/Card";
import HomeNavbar from "../../components/HomeNavbar";
import { useNavigate } from "react-router-dom";
export default function Homeuser() {
  const [Events, setEvents] = useState([]);
  const [isUser, setIsUser] = useState();
  const navigate=useNavigate()
  const getEvents = async () => {
    try {
       const response = await fetch("http://localhost:5000/event/getevents", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: "include",
    }) 
     const events = await response.json();
      console.log(events["msg"], events["isUser"]);
      setEvents(events["msg"]);
      setIsUser(events["isUser"]);
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  };
  useEffect(() => {
    getEvents();
    
  });
  return (
    <div>
      <HomeNavbar isUser={isUser} />
      <Imagecarousal />
      <div id="concerts" className="p-4">
        <h1 style={{ fontSize: "30px" }}>CONCERTS</h1>
        <ActiveSlider
          event={Events.filter((element) => element.eventCategory === "Music")}
        />
      </div>
      <div id="comedy" className="p-4">
        <h1 style={{ fontSize: "30px" }}>COMEDY</h1>
        <ActiveSlider
          event={Events.filter((element) => element.eventCategory === "Comedy")}
        />
      </div>
      <div id="cultural" className="p-4">
        <h1 style={{ fontSize: "30px" }}>CULTURAL EVENTS</h1>
        <ActiveSlider
          event={Events.filter((element) => element.eventCategory === "Dance")}
        />
      </div>
    </div>
  );
}

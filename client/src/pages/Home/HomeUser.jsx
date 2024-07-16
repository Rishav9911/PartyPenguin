import React, { useEffect, useState } from 'react'
import Imagecarousal from '../../components/Imagecarousal'
import ActiveSlider from '../../components/Card'
import HomeNavbar from '../../components/HomeNavbar';
export default function Homeuser() {
  const [Events,setEvents]=useState([]);
  const getEvents=async ()=>{
    const response= await fetch('http://localhost:5000/event/getevents',{
      method:"get",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
        const events=await response.json()
        setEvents(events['msg'])
        
  }
  useEffect(()=>{
    getEvents()
})
  return (
    <div>
       <HomeNavbar/>
       <Imagecarousal/>
       <div id="concerts" className="p-4"><h1 style={{fontSize:"30px"}}>CONCERTS</h1>
       <ActiveSlider event={Events.filter(element=>element.eventCategory==='Music')}/></div>
       <div id="comedy" className="p-4"><h1 style={{fontSize:"30px"}}>COMEDY</h1>
       <ActiveSlider event={Events.filter(element=>element.eventCategory==='Comedy')}/></div>
       <div id="cultural" className="p-4"><h1 style={{fontSize:"30px"}}>CULTURAL EVENTS</h1>
       <ActiveSlider event={Events.filter(element=>element.eventCategory==='cultural')}/></div>
       
    </div>
  );
}

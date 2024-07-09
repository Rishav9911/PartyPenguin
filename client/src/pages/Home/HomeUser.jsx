import React from 'react'
import Imagecarousal from '../../components/Imagecarousal'
import ActiveSlider from '../../components/Card'
import HomeNavbar from '../../components/HomeNavbar';
export default function Homeuser() {
  return (
    <div>
       <HomeNavbar/>
       <Imagecarousal/>
       <div className="p-4"><h1 style={{fontSize:"30px"}}>CONCERTS</h1>
       <ActiveSlider/></div>
       <div className="p-4"><h1 style={{fontSize:"30px"}}>COMEDY</h1>
       <ActiveSlider/></div>
       <div className="p-4"><h1 style={{fontSize:"30px"}}>CUlTURAL EVENTS</h1>
       <ActiveSlider/></div>
       
    </div>
  );
}

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/img3_home.jpg";
import img2 from '../assets/comedyshow.jpg'
export default function Imagecarousal() {
  return (
    <div className="h-[60vh] max-h-[60vh] sm:h-[50vh] sm:max-h-[50vh] md:h-[60vh] md:max-h-[60vh] overflow-hidden">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
        showThumbs={false}
        showArrows={false} // Ensure arrows are enabled
        showStatus={false}
        showIndicators={false}
        dynamicHeight="80%"
      >
        <div className="h-full">
          <img
            src={img}
            alt="Slide 1"
            className="object-cover h-full w-full"
          />
          <p className="legend">Slide 1</p>
        </div>
        <div className="h-full">
          <img
            src={img2}
            alt="Slide 2"
            className="object-cover h-full w-full"
          />
          <p className="legend">Slide 2</p>
        </div>
        <div className="h-full">
          <img
            src={img}
            alt="Slide 3"
            className="object-cover h-full w-full"
          />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
}

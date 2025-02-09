import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import img from "./bassi.avif";
import img2 from "../assets/dance.jpg";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const ActiveSlider = ({ event }) => {

  const navigate= useNavigate()
  const HandleClick=(e)=>{
    const key = e.currentTarget.getAttribute('data-key');
    console.log('Clicked show with key:', key);
     navigate('/showdetails',{state:{id:key}})
  }

  return (
    <div className="w-full h-[20vh] md:h-[40vh]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="h-full"
      >
       {event
        &&event.map((value) => {
        return (
          <SwiperSlide >
            <button data-key={value['_id']} onClick={HandleClick}> <img
            src={`http://localhost:5000${value.image}`}
              alt="Slide 1"
              className="object-cover w-full h-20vh rounded-lg"
            /></button>
          </SwiperSlide>
        );
      })}
        <SwiperSlide>
          <img
           src={img}
            alt="Slide 2"
            className="object-cover w-full h-20vh rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 3"
            className="object-cover w-full h- rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 4"
            className="object-cover w-full h- rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 5"
            className="object-cover w-full h-20vh rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 6"
            className="object-cover w-full h-20vh rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 7"
            className="object-cover w-full h- rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 8"
            className="object-cover w-full h- rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

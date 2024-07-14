import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import img from "./bassi.avif";
import {Navigation } from "swiper/modules";

const ActiveSlider = () => {
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
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 1"
            className="object-cover w-full h-20vh rounded-lg"
          />
        </SwiperSlide>
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

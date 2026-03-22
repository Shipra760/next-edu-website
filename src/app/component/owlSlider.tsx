"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div>
          <img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1768988224759_sliderimg_1.png" className="fluid w-full" alt="" />
          <span className="slider-text text-4xl"><p>A Journey of Learning, Growth, and Leadership Begins Here</p></span>
          <div className="slider-overlay"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1768988224759_sliderimg_1.png" className="fluid w-full" alt="" />
          <span className="slider-text text-4xl"><p>A Journey of Learning, Growth, and Leadership Begins Here</p></span>
          <div className="slider-overlay"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1768988224759_sliderimg_1.png" className="fluid w-full" alt="" />
          <span className="slider-text text-4xl"><p>A Journey of Learning, Growth, and Leadership Begins Here</p></span>
          <div className="slider-overlay"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
import React, { useEffect, useState } from "react";

// swiper's import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const res = await fetch("http://localhost:3000/crops");
      const data = await res.json();
      // console.log(data);
      const lastThree = data.slice(-3).reverse();
      setSlides(lastThree);
    };

    fetchSlides();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;

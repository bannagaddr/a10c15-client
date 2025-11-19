import React from "react";

const HomeSlider = () => {
  const slides = [
    { photo: "https://via.placeholder.com/1200x500?text=Slide+1" },
    { photo: "https://via.placeholder.com/1200x500?text=Slide+2" },
    { photo: "https://via.placeholder.com/1200x500?text=Slide+3" },
  ];

  return (
    <div className="w-11/12 mx-auto my-20 space-y-6">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow bg-[#F0FDF4]"
        >
          <img
            src={slide.photo}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;

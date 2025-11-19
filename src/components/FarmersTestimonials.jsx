import React from "react";
import { TbStar } from "react-icons/tb";

const FarmersTestimonials = () => {
  const testimonials = [
    {
      name: "Rafiq",
      location: "Rajshahi",
      image: "https://i.pravatar.cc/150?img=32",
      message:
        "KrishiLink helped me connect with local buyers and sell my crops directly. I saved money and got better prices!",
    },
    {
      name: "Kamal",
      location: "Barishal",
      image: "https://i.pravatar.cc/150?img=33",
      message:
        "Using KrishiLink, I learned modern farming techniques and improved my crop yield significantly this season.",
    },
    {
      name: "Jahid",
      location: "Dhaka",
      image: "https://i.pravatar.cc/150?img=34",
      message:
        "KrishiLink made it easy to find trusted buyers. My profits increased and I could focus more on quality crops.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-green-50">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
        Farmers Testimonials
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full md:w-1/3 hover:shadow-xl"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-28 h-28 rounded-full mb-4 border-4 border-green-600 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-1">
              {t.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{t.location}</p>
            <p className="text-gray-700 mb-4">{t.message}</p>
            <div className="flex space-x-1 text-yellow-400 text-lg">
              <TbStar />
              <TbStar />
              <TbStar />
              <TbStar />
              <TbStar />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmersTestimonials;

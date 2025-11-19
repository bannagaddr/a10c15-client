import React from "react";
import { TbPlant } from "react-icons/tb";
import Tomato from "../assets/tomato.jpg";

const FeaturedCrop = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-green-100">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
        Featured Crop of the Week
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center hover:shadow-lg transition-shadow">
        <img
          src={Tomato}
          alt="Tomato Crop"
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <TbPlant className="text-green-600 text-3xl" />
            <h3 className="text-2xl font-bold text-green-800">Tomato</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Best practices for tomato cultivation this season. Learn how to
            water, fertilize, and protect your crops for higher yield.
          </p>
          <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
            View Related Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCrop;

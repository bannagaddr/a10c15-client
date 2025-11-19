import React from "react";
import { TbNews, TbFileText, TbCalendarEvent } from "react-icons/tb";

const AgroBlog = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-green-100">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
        Agro Blogs
      </h2>

      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-green-600 md:w-2 w-full flex items-center justify-center p-4">
            <TbFileText className="text-white text-3xl" />
          </div>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-green-800">
                Organic Farming Tips
              </h3>
              <span className="text-sm text-gray-500">Nov 15, 2025</span>
            </div>
            <p className="text-gray-700">
              Learn the best practices for organic farming to increase yield and
              sustainability.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-green-600 md:w-2 w-full flex items-center justify-center p-4">
            <TbFileText className="text-white text-3xl" />
          </div>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-green-800">
                Crop Rotation Benefits
              </h3>
              <span className="text-sm text-gray-500">Nov 12, 2025</span>
            </div>
            <p className="text-gray-700">
              Discover how crop rotation can improve soil fertility and reduce
              pests naturally.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-green-600 md:w-2 w-full flex items-center justify-center p-4">
            <TbFileText className="text-white text-3xl" />
          </div>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-green-800">
                Upcoming Agro Events
              </h3>
              <span className="text-sm text-gray-500">Nov 10, 2025</span>
            </div>
            <p className="text-gray-700">
              Stay updated with the latest agricultural events and workshops in
              your region.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-green-600 md:w-2 w-full flex items-center justify-center p-4">
            <TbFileText className="text-white text-3xl" />
          </div>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-green-800">
                Market Price Trends
              </h3>
              <span className="text-sm text-gray-500">Nov 8, 2025</span>
            </div>
            <p className="text-gray-700">
              Keep track of current crop prices and market trends to make
              informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroBlog;

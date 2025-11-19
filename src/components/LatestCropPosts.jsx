import React from "react";
import { Link } from "react-router";

const LatestCropPosts = () => {
  // Dummy static data
  const latestCropsData = [
    {
      _id: 1,
      name: "Tomato",
      quantity: 50,
      price: 20,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: 2,
      name: "Potato",
      quantity: 80,
      price: 15,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: 3,
      name: "Carrot",
      quantity: 40,
      price: 25,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: 4,
      name: "Onion",
      quantity: 60,
      price: 18,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: 5,
      name: "Cabbage",
      quantity: 30,
      price: 22,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: 6,
      name: "Spinach",
      quantity: 70,
      price: 12,
      photo: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-[#DBFCE7]">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Latest Crops
      </h1>

      {/* crops card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestCropsData.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
              <img
                src={data.photo}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-green-800 mb-1">
                {data.name}
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Quantity: {data.quantity} kg
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Price per unit: ${data.price}
              </p>
              <Link to="#" className="btn btn-success btn-sm w-full">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link to="#" className="btn btn-success btn-sm">
          View All
        </Link>
      </div>
    </div>
  );
};

export default LatestCropPosts;

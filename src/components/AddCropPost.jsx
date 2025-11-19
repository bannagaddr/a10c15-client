import React from "react";
import { Link } from "react-router";

const AllCropPost = () => {
  // Dummy static data (only for design)
  const dummyCrops = [
    {
      _id: "1",
      name: "Wheat",
      quantity: 50,
      price: 1200,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: "2",
      name: "Rice",
      quantity: 80,
      price: 900,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      _id: "3",
      name: "Corn",
      quantity: 40,
      price: 700,
      photo: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        All Crops
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyCrops.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gray-200">
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
              <p className="text-sm text-gray-700 mb-1">
                Quantity: {data.quantity} kg
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Price per unit: ${data.price}
              </p>

              <Link
                to="#"
                className="btn btn-success btn-sm w-full shadow-none"
              >
                View Details
              </Link>

              <button
                type="button"
                className="btn btn-sm w-full mt-3 bg-red-600 text-white border-none"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCropPost;

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../datacontrols/contexts/Context";

const LatestCropPosts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [latestCrops, setLatestCrops] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch("http://localhost:3000/crops");
        const data = await res.json();

        // show latest data: last 6 items
        const lastSix = data.slice(-6).reverse();
        setLatestCrops(lastSix);
      } catch (error) {
        console.error("Error fetching crops:", error);
      }
    };
    fetchCrops();
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/crops-details/${id}`);
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-[#DBFCE7]">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Latest Crops
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestCrops.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-green-800 mb-1">
                {data.name}
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Quantity: {data.quantity} / {data.unit || "kg"}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Price per unit: ${data.pricePerUnit || data.price}
              </p>
              <button
                onClick={() => handleViewDetails(data._id)}
                className="bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded w-full block cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => navigate("/all_crop_post")}
          className="bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default LatestCropPosts;

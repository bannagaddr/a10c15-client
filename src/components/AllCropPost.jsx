import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../datacontrols/contexts/Context";

const AllCropPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/crops")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/crops-details/${id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-dots loading-xl text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        All Crops
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search crops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input w-full bg-white border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <div
              key={crop._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                <img
                  src={crop.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-green-800 mb-1">
                  {crop.name}
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  Quantity: {crop.quantity} / {crop.unit}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Price per unit: ${crop.pricePerUnit}
                </p>
                <button
                  className="btn btn-success btn-sm w-full shadow-none mb-2"
                  onClick={() => handleViewDetails(crop._id)}
                >
                  View Details
                </button>
                <button className="btn btn-error btn-sm w-full shadow-none">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-6">
            No crops found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCropPost;

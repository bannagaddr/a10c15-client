import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../datacontrols/contexts/Context";

const AddCrop = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // input data from client
    const cropData = {
      name: e.target.name.value,
      type: e.target.type.value,
      pricePerUnit: parseFloat(e.target.pricePerUnit.value),
      unit: e.target.unit.value,
      quantity: parseInt(e.target.quantity.value),
      description: e.target.description.value,
      location: e.target.location.value,
      image: e.target.image.value,
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };

    // target backend main port and path(/crops)
    fetch("http://localhost:3000/crops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cropData),
    })
      .then((res) => res.json())
      .then(() => setSuccess("Crop added successfully!"))
      .catch((err) => setError(err.message));

    e.target.reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Add New Crop
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Crop Name"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="type"
            type="text"
            placeholder="Type (Vegetable, Fruit, Grain)"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="pricePerUnit"
            type="number"
            placeholder="Price per unit"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="unit"
            type="text"
            placeholder="Unit (kg, ton, bag)"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="quantity"
            type="number"
            placeholder="Estimated quantity"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input w-full md:col-span-2 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full md:col-span-2 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 resize-none"
            required
          />

          {error && <p className="text-red-500 md:col-span-2">{error}</p>}
          {success && <p className="text-green-500 md:col-span-2">{success}</p>}

          <button
            type="submit"
            className="btn btn-success p-6 w-full rounded-xl md:col-span-2 text-lg"
          >
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrop;

import React from "react";
import "../index.css";

const AddCrop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Add New Crop</h2>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Crop Name"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Type"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="number"
            placeholder="Price per unit"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="number"
            placeholder="Unit Kg, Ton, bag"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="number"
            placeholder="Estimated quantity"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <textarea
            placeholder="Description"
            className="w-full border-2 border-gray-400 p-3 rounded-xl focus:ring focus:ring-green-400 focus:border-green-500 outline-none"
          />

          <button
            type="button"
            className="w-full bg-green-600 text-white p-3 rounded-xl text-lg hover:bg-green-700 active:scale-95 transition"
          >
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrop;

import React from "react";
import { TbInfoCircle } from "react-icons/tb";

const InterestForm = () => {
  return (
    <div className="md:w-1/3 bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6 flex items-center gap-3">
        <TbInfoCircle className="text-green-600 text-3xl md:text-4xl" />
        Show Interest
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-2">Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Message</label>
          <input
            type="text"
            placeholder="Write a message"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <p className="text-gray-700 font-medium mt-4 text-right text-lg">
        Total Price: $0
      </p>

      <button className="btn btn-success w-full mt-6 py-3 text-lg">
        Submit Interest
      </button>
    </div>
  );
};

export default InterestForm;

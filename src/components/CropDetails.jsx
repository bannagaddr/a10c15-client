import React from "react";

const CropDetails = () => {
  // Dummy static data for UI only
  const data = {
    name: "Fresh Organic Tomato",
    photo: "https://via.placeholder.com/600x400",
    type: "Vegetable",
    price: 25,
    unit: 1,
    quantity: 120,
    location: "Dhaka, Bangladesh",
    description:
      "High-quality organic tomatoes freshly harvested. Perfect for cooking and salad.",
    owner: {
      ownerName: "Rahim Uddin",
    },
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:w-2/3 w-full">
          <img
            src={data.photo}
            alt="Crop"
            className="w-full h-72 md:h-80 object-cover"
          />

          <div className="p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              {data.name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Type: </span>
                {data.type}
              </p>
              <p>
                <span className="font-semibold">Quantity: </span>
                {data.quantity} kg
              </p>
              <p>
                <span className="font-semibold">Unit: </span>
                {data.unit} kg
              </p>
              <p>
                <span className="font-semibold">Price per unit: </span>$
                {data.price}
              </p>
              <p>
                <span className="font-semibold">Location: </span>
                {data.location}
              </p>
              <p>
                <span className="font-semibold">Posted by: </span>
                {data.owner.ownerName}
              </p>
            </div>

            <p className="text-gray-600 mt-4 text-justify">
              {data.description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE INTEREST FORM UI ONLY */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Express Interest
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="number"
              placeholder="Quantity you want"
              className="w-full border p-3 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full border p-3 rounded-lg h-28"
            ></textarea>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold">
              Submit Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;

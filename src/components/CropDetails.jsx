import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../datacontrols/contexts/Context";

const CropDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [crop, setCrop] = useState(null);
  const [quantity, setQuantity] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/crops/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrop(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-dots loading-xl text-orange-500"></span>
      </div>
    );
  }

  if (!crop)
    return <p className="text-center mt-12 text-red-500">Crop not found</p>;

  const totalPrice = quantity * crop.pricePerUnit;
  const isOwner = user?.email === crop?.owner?.ownerEmail;
  const hasInterest = crop.interests?.some((i) => i.userEmail === user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      Swal.fire("Error", "Quantity must be at least 1", "error");
      return;
    }

    const interestData = {
      _id: new Date().getTime().toString(),
      cropId: crop._id,
      userEmail: user.email,
      userName: user.displayName,
      quantity,
      message,
      status: "pending",
    };

    const updatedCrop = {
      ...crop,
      interests: [...crop.interests, interestData],
    };

    // client req for update crop by id
    fetch(`http://localhost:3000/crops/${crop._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCrop),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success", "Interest sent!", "success");
        setCrop(updatedCrop);
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex md:space-x-6 p-6">
        <img
          src={crop.image}
          alt=""
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-3xl font-bold text-green-800">{crop.name}</h2>
          <p className="text-gray-700">{crop.description}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg font-semibold">
              Quantity: {crop.quantity}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg font-semibold">
              Unit: {crop.unit}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg font-semibold">
              Price per unit: ${crop.pricePerUnit}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg font-semibold">
              Location: {crop.location}
            </span>
          </div>
        </div>
      </div>

      {!isOwner && !hasInterest && (
        <form
          onSubmit={handleSubmit}
          className="bg-green-50 p-8 rounded-xl shadow-md space-y-4 max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-bold text-green-700">Send Interest</h3>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantity"
            className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
          >
            Submit Interest
          </button>
        </form>
      )}

      {isOwner && (
        <div className="overflow-x-auto">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Received Interests
          </h3>
          {crop.interests?.length > 0 ? (
            <table className="min-w-full border rounded-lg overflow-hidden">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3 text-left">Buyer</th>
                  <th className="p-3 text-left">Quantity</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {crop.interests.map((i) => (
                  <tr
                    key={i._id}
                    className="border-t hover:bg-green-50 transition-colors"
                  >
                    <td className="p-3">{i.userName}</td>
                    <td className="p-3">{i.quantity}</td>
                    <td className="p-3">{i.message}</td>
                    <td className="p-3 capitalize">{i.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No interests received yet.</p>
          )}
        </div>
      )}

      {hasInterest && !isOwner && (
        <p className="text-center text-green-600 font-semibold">
          You have already sent an interest for this crop.
        </p>
      )}
    </div>
  );
};

export default CropDetails;

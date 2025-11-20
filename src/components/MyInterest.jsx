import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../datacontrols/contexts/Context";
import Swal from "sweetalert2";

const MyInterest = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch("http://localhost:3000/crops")
      .then((res) => res.json())
      .then((data) => {
        // filter only interests of logged-in user
        const myInterests = [];
        data.forEach((crop) => {
          crop.interests?.forEach((i) => {
            if (i.userEmail === user.email) {
              myInterests.push({ ...i, cropName: crop.name, cropId: crop._id });
            }
          });
        });
        setInterests(myInterests);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const handleCancel = (cropId, interestId) => {
    fetch(`http://localhost:3000/crops/${cropId}/interests/${interestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "cancelled" }),
    })
      .then((res) => res.json())
      .then((updatedCrop) => {
        const updatedInterests = interests.map((i) =>
          i._id === interestId ? { ...i, status: "cancelled" } : i
        );
        setInterests(updatedInterests);
        Swal.fire("Cancelled", "Your interest has been cancelled", "success");
      });
  };

  if (loading) return <p className="text-center mt-12 text-lg">Loading...</p>;

  if (interests.length === 0)
    return (
      <p className="text-center mt-12 text-gray-500 text-lg">
        No interests found
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-800 text-center">
        My Interests
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 text-left">Crop Name</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((i) => (
              <tr
                key={i._id}
                className={`border-t hover:bg-green-50 transition-colors ${
                  i.status === "cancelled"
                    ? "bg-red-50 text-red-700"
                    : i.status === "accepted"
                    ? "bg-blue-50 text-blue-700"
                    : ""
                }`}
              >
                <td className="p-3 font-semibold">{i.cropName}</td>
                <td className="p-3">{i.quantity}</td>
                <td className="p-3">{i.message}</td>
                <td className="p-3 capitalize">{i.status}</td>
                <td className="p-3">
                  {i.status === "pending" && (
                    <button
                      onClick={() => handleCancel(i.cropId, i._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                  {i.status !== "pending" && (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterest;

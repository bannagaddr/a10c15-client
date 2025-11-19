import React from "react";

const ReceivedInterest = () => {
  // Dummy static data
  const interests = [
    {
      _id: 1,
      userName: "Rahim Uddin",
      quantity: 50,
      message: "I am interested in buying 50kg.",
      status: "pending",
    },
    {
      _id: 2,
      userName: "Karim Ahmed",
      quantity: 30,
      message: "I want to buy 30kg.",
      status: "accepted",
    },
  ];

  return (
    <div className="card bg-white shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Received Interests</h3>

      {interests.length === 0 ? (
        <p className="text-gray-500">No interests received yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse border border-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-4 py-2 text-left">Buyer Name</th>
                <th className="border px-4 py-2 text-left">Quantity</th>
                <th className="border px-4 py-2 text-left">Message</th>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {interests.map((interest) => (
                <tr key={interest._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{interest.userName}</td>
                  <td className="border px-4 py-2">{interest.quantity} kg</td>
                  <td className="border px-4 py-2">{interest.message}</td>
                  <td className="border px-4 py-2">{interest.status}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button className="btn btn-primary btn-sm cursor-not-allowed">
                      Accept
                    </button>
                    <button className="btn btn-error btn-sm cursor-not-allowed">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReceivedInterest;

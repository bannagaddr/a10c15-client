import React, { useState, useContext } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../datacontrols/contexts/Context";

const MyProfile = () => {
  const { user, auth } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      Swal.fire("Error! No user is logged in");
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        Swal.fire("Updated!", "Your profile has been updated.", "success");
      })
      .catch((err) => {
        Swal.fire(`Error! ${err.message}`);
      });
  };

  return (
    <div className="max-w-md mx-auto m-10 p-10 border-2 rounded-lg border-[#92929221] shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>

      <div className="text-center mb-6">
        <img
          src={photo}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
      </div>

      <p className="text-start mb-4">
        <strong>Email:</strong> {user.email}
      </p>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default MyProfile;

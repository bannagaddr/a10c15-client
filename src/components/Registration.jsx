import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../datacontrols/contexts/Context";

const Registration = () => {
  const { registration } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // input values get
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // password validation
    const re = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!re.test(password)) {
      setError(
        "Password must contain at least 1 uppercase, 1 lowercase and be 6+ characters long."
      );
      return;
    }

    registration(name, email, photoURL, password)
      .then(() => {
        // console.log("user registered");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              name="name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              name="photoURL"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full"
              name="password"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="btn bg-[#00BF83] w-full mt-4 text-white"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <Link to="/login" className="ml-1 text-green-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;

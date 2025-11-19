import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../datacontrols/contexts/Context";

const Login = () => {
  const { login, googleLogin, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    login(email, password)
      .then(() => {
        // console.log("user logged in");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // google auto login
  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  // forget password
  const handleForgetPassword = () => {
    setError("");
    setSuccess("");
    forgetPassword(email)
      .then(() => setSuccess("Password reset email sent! Check your inbox."))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login Account</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-sm text-blue-600 mt-1 inline-block hover:underline cursor-pointer"
            >
              Forget password
            </button>
          </div>
          {/* forget password error message showing */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <button
            type="submit"
            className="btn bg-[#00BF83] w-full mt-4 text-white"
          >
            Login
          </button>
        </form>

        {/* google login button */}
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] w-full mt-3"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <Link to="/registration" className="ml-1 text-green-700 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

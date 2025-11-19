import React from "react";
import { Link } from "react-router";
import { TbLeaf } from "react-icons/tb";

const Error = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-green-100 flex flex-col items-center justify-center px-6 text-center">
      <div className="flex items-center gap-2 mb-6">
        <TbLeaf className="text-green-600 text-4xl" />
        <h1 className="text-3xl font-bold text-green-800">KrishiLink</h1>
      </div>

      <h1 className="text-7xl font-extrabold text-green-700 drop-shadow-lg">
        404
      </h1>

      <p className="mt-4 text-xl text-green-900 font-semibold">
        Page Not Found
      </p>

      <p className="mt-2 max-w-md text-gray-600">
        The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <div className="mt-10">
        <Link to="/" className="btn btn-success btn-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

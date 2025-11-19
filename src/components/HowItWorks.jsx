import React from "react";
import {
  TbUser,
  TbPlant,
  TbSearch,
  TbHandClick,
  TbUserCircle,
  TbNetwork,
} from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-green-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          KrishiLink connects farmers, traders, and consumers in one agro-social
          digital network. Here’s how the platform works step by step.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbUser className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            User Registration & Login
          </h3>
          <p className="text-gray-600">
            Users start by creating an account. Once registered, they can log in
            to access all features as farmers, traders, or consumers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbPlant className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Posting Crops
          </h3>
          <p className="text-gray-600">
            Logged-in users can post crops they are growing or selling,
            including name, category, quantity, price, and images.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbSearch className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Browsing Crops
          </h3>
          <p className="text-gray-600">
            Users can explore all crops posted by others with a search bar to
            filter by name, category, or other attributes.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbHandClick className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Showing Interest & Connecting
          </h3>
          <p className="text-gray-600">
            Users can show interest in crops, enabling direct communication and
            collaboration between community members.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbUserCircle className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Profile & Personal Dashboard
          </h3>
          <p className="text-gray-600">
            Manage posts, track interested connections, and monitor crop
            listings all in one personalized dashboard.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <TbNetwork className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Social Interaction
          </h3>
          <p className="text-gray-600">
            KrishiLink acts as a social network for agriculture, focusing on
            sharing updates, asking questions, and fostering collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

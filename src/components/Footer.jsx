import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbLeaf } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-200 px-8 md:px-14 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TbLeaf className="text-green-400 text-3xl" />
            <h2 className="text-2xl font-semibold">KrishiLink</h2>
          </div>
          <p className="text-sm leading-6">
            A social agro network connecting farmers, traders, and consumers.
            Share crops, collaborate, and grow together in one smart digital
            space.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/crops" className="hover:text-white">
                All Crops
              </Link>
            </li>
            <li>
              <Link to="/post" className="hover:text-white">
                Post Crop
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-white">
                Community
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12 border-t border-green-800 pt-5">
        © {new Date().getFullYear()} KrishiLink – Empowering Farmers, Growing
        Together
      </div>
    </footer>
  );
};

export default Footer;

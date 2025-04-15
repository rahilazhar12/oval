import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/Images/logo.png'

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 md:px-8 lg:px-16 flex flex-wrap items-center justify-between shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-auto" />
        <span className="text-xl font-bold text-black">Oval Industrials</span>
      </div>

      {/* Nav links + Search + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-4 sm:mt-0 w-full sm:w-auto">
        {/* Links */}
        <div className="flex justify-center gap-4 text-sm text-red-800 font-semibold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Search */}
        <div className="relative mt-4 sm:mt-0 sm:ml-6">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pl-4 pr-10 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>

        {/* Button */}
        <button className="mt-4 sm:mt-0 sm:ml-6 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-full text-sm">
          Request Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

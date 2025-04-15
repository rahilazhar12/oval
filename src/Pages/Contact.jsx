import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-green-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-10">
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          We’re happy to assist with any questions about our printing machinery,
          supplies, or services. Feel free to reach out through any of the
          options below.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Address</h3>
              <p>
                3040 Oak Hampton way, Duluth USA
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
            <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Phone</h3>
              <p>+1 617-682-6354</p>
              <p>+1 305-924-5585</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Email</h3>
              <p>ovalindustrials1@gmail.com</p>
            </div>
          </div>
{/* 
          <a
            href="https://wa.me/31612345678" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:bg-green-50 transition"
          >
            <FaWhatsapp className="text-green-500 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">WhatsApp</h3>
              <p>Chat with us directly on WhatsApp</p>
              <span className="text-green-600 font-medium">
                +31 612 345 678
              </span>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

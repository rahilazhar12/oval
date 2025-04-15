import React from 'react';

const Ceo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8 md:flex md:items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WEW-QC4EeZuXcCEXGHU5CfpvaEVEMs3sjw&s"
          alt="Sheikh Ali Amjad"
          className="w-40 h-40 rounded-full object-cover mx-auto md:mx-0 md:mr-8 shadow-md"
        />
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sheikh Ali Amjad</h1>
          <h2 className="text-xl text-gray-600 mb-4">Chief Executive Officer</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our organization. At the heart of our mission is a commitment to innovation,
            excellence, and a dedication to serving our clients and community with integrity. As we
            continue to grow and evolve, we remain focused on delivering meaningful solutions and
            fostering a culture of collaboration and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ceo;

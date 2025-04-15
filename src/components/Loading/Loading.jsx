// components/Loading.js
import React from "react";
import Logo from '../../assets/Images/logo.png'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-ring">
        <img src={Logo} alt="Loading..." className="logo" />
      </div>
    </div>
  );
};

export default Loading;

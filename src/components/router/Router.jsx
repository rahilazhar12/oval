// Router.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import ProductDetail from "../../Pages/Productdetails";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Loading from "../Loading/Loading";

const Router = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., API call, assets loading, etc.)
    const timer = setTimeout(() => setLoading(false), 1000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />; // 👈 show loading screen

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default Router;

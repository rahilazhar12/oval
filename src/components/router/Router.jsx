import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import ProductDetail from "../../Pages/Productdetails";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";

const Router = () => {
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

import React from "react";
import Router from "./components/router/Router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scrolltotop/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Router />
      <Footer />
    </>
  );
};

export default App;

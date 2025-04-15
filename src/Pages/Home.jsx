import React from "react";
import Carousal from "../components/Home/Carousal/Carousal";
import ProductSection from "../components/Home/Productsection/Productsection";
import ProductCategorySection from "../components/Home/Productctaegory/Productcategory";

const Home = () => {
  return (
    <>
      <Carousal />
      <ProductSection />
      <ProductCategorySection />
    </>
  );
};

export default Home;

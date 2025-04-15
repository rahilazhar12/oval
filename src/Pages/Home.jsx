import React from "react";
import Carousal from "../components/Home/Carousal/Carousal";
import ProductSection from "../components/Home/Productsection/Productsection";
import ProductCategorySection from "../components/Home/Productctaegory/Productcategory";
import Ceo from "./Ceo";

const Home = () => {
  return (
    <>
      <Carousal />
      <ProductSection />
      <ProductCategorySection />
      <Ceo/>
    </>
  );
};

export default Home;

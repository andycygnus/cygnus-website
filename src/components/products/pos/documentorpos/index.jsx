import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import Banner from "./banner";
import ProductDetailsArea from "./product-details-area";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default ProductDetails;

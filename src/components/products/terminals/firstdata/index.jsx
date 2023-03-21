import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import ProductArea from "./product-area";
import ProductBanner from "./product-banner";

const Product = () => {
  return (
    <>
      <Header />
      <ProductBanner />
      <ProductArea />
      <Footer />
    </>
  );
};

export default Product;

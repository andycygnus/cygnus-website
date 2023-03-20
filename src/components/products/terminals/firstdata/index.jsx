import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import ShopArea from "./shop-area";
import ShopBanner from "./shop-banner";

const Shop = () => {
  return (
    <>
      <Header />
      <ShopBanner />
      <ShopArea />
      <Footer />
    </>
  );
};

export default Shop;

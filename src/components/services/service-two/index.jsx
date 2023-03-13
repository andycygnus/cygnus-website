import PricingArea from "@/common/pricing-area";
import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";
import Video from "./video";

const ServiceTwo = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServiceArea />
      <Video />
      <PricingArea p_bottom={true} />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ServiceTwo;

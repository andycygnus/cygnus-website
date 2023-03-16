import Brands from "@/common/brands";
import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Choose from "./choose";
import HeroBanner from "./hero-banner";
import Team from "./team";

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Team />
      <Counter cls="pt-40 pb-50 mr-30 ml-30" />
      <Choose />
      <Brands border_style={true} />
    </>
  );
};

export default HomeTwo;

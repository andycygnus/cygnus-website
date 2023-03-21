import SEO from "@/components/seo";
import Product from "@/components/products/terminals/firstdata";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="FirstData" />
      <Product />
    </Wrapper>
  );
};

export default index;

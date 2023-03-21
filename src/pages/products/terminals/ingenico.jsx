import SEO from "@/components/seo";
import Product from "@/components/products/terminals/ingenico";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Ingenico" />
      <Product />
    </Wrapper>
  );
};

export default index;

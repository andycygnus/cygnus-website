import SEO from "@/components/seo";
import Product from "@/components/products/terminals/dejavoo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Dejavoo" />
      <Product />
    </Wrapper>
  );
};

export default index;

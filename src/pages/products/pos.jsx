import Pos from "@/components/products/pos";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Pos" />
      <Pos />
    </Wrapper>
  );
};

export default index;

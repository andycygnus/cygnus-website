import SEO from "@/components/seo";
import Product from "@/components/products/terminals/valorpay";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="ValorPay" />
      <Product />
    </Wrapper>
  );
};

export default index;

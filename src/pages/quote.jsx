import Quote from "@/components/quote/quote";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"quote"} />
      <Quote />
    </Wrapper>
  );
};

export default index;

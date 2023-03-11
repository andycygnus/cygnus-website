import Home from "@/components/home/home/home";
import SEO from "@/components/seo";
import Layout from "@/layout/layout";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <Layout>
      <SEO pageTitle="Home" />
        <Home />
      </Layout>
    </Wrapper>
  );
};

export default index;

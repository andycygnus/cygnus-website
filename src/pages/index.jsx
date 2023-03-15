import React from "react";
import Layout from "@/layout/layout";
import Home from "@/components/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <Home />
      </Layout>
    </Wrapper>
  );
};

export default index;

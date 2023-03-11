import React from "react";
import Layout from "@/layout/layout";
import HomeTwo from "@/components/home/home-2/hometwo";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <HomeTwo />
      </Layout>
    </Wrapper>
  );
};

export default index;

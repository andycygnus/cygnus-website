import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import Banner from "./banner";
import PostBox from "./post-box";

const Blog = () => {
  return (
    <>
      <Header />
      <Banner />
      <PostBox />
      <Footer />
    </>
  );
};

export default Blog;

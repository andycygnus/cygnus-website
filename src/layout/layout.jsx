import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Chat from "@/common/chat";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Chat />
    </>
  );
};

export default Layout;

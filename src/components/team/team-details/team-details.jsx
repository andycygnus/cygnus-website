import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import Banner from "./banner";
import TeamDetailsArea from "./team-details-area";

const TeamDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <TeamDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default TeamDetails;

import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import React from "react";
import BannerTeamTwo from "./banner-team-two";
import TeamArea from "./team-area";

const TeamTwo = () => {
  return (
    <>
      <Header />
      <BannerTeamTwo />
      <TeamArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default TeamTwo;

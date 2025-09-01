import React from "react";
import Banner from "../Component/HomepageComponent/Banner";
import Service from "../Component/HomepageComponent/Service";
import Casestudies from "../Component/HomepageComponent/Casestudies";
import OurTeam from "../Component/HomepageComponent/OurTeam";
import Approach from "../Component/HomepageComponent/Approach";
import TechStack from "../Component/HomepageComponent/TechStack";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Service />
      <Casestudies />
      <OurTeam />
      <Approach />
      <TechStack/>
    </>
  );
};

export default Homepage;

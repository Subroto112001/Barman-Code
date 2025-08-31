import React from "react";
import Banner from "../Component/HomepageComponent/Banner";
import Service from "../Component/HomepageComponent/Service";
import Casestudies from "../Component/HomepageComponent/Casestudies";
import OurTeam from "../Component/HomepageComponent/OurTeam";
import Approach from "../Component/HomepageComponent/Approach";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Service />
      <Casestudies />
      <OurTeam />
      <Approach/>
    </>
  );
};

export default Homepage;

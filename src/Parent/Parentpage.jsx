import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ParentComponent/Header/Header";
import Footer from "../ParentComponent/Footer/Footer";

const Parentpage = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Parentpage;

import React from "react";
import { FaCheck, FaCode } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { GrSecure, GrShieldSecurity } from "react-icons/gr";
import { IoRocket } from "react-icons/io5";

// Import your animation CSS file
import "../../AnimationCss/Approachanimation.css"; // Add this import

const Approach = () => {
  const itemall = [
    {
      id: 1,
      icon: <IoRocket />,
      header: "UX Driven Engineering",
    },
    {
      id: 2,
      icon: <FaCode />,
      header: "Developing Shared Understanding",
    },
    {
      id: 3,
      icon: <GiTechnoHeart />,
      header: "Proven Experience and Expertise",
    },
    {
      id: 4,
      icon: <GrShieldSecurity />,
      header: "Security & Intellectual Property (IP)",
    },
    {
      id: 5,
      icon: <FaCheck />,
      header: "Code Reviews",
    },
    {
      id: 6,
      icon: <GrSecure />,
      header: "Quality Assurance & Testing",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] animate-approach-background">
      <div className="container py-[70px] animate-approach-container">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center animate-approach-header-section">
            <div className="w-[89px] h-[4px] rounded gradient-backgroundtwo mb-[20px] animate-approach-gradient-bar"></div>
            <h3 className="lite-h2 animate-approach-title-light">
              Our Design And{" "}
            </h3>
            <h3 className="headings-h2 animate-approach-title-bold">
              Development Approach{" "}
            </h3>
          </div>
          <div className="mt-[60px] flex flex-wrap gap-y-[40px] justify-between animate-approach-grid">
            {itemall.map((item) => (
              <div
                key={item.id}
                className="w-[604px] h-[237px] bg-white px-[34px] py-[60px] border-2 border-blue-300 rounded-lg flex flex-row gap-[25px] animate-approach-card"
              >
                <div className="font-[34px] bg-red-400 text-white w-[40px] h-[40px] flex items-center justify-center rounded animate-approach-icon-container">
                  <span className="animate-approach-icon">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-[10px] animate-approach-card-content">
                  <h3 className="Headings-h4 text-gray-900 animate-approach-card-title">
                    {item.header}
                  </h3>
                  <p className="max-w-[453px] default text-gray-700 animate-approach-card-description">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

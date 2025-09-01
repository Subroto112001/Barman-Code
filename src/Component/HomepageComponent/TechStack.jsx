import React, { useState } from "react";
import {
  ourTechStuckbackend,
  ourTechStuckFontend,
} from "../../Helpers/Details";
import "../../AnimationCss/TechStackAniamtion.css"

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="container py-[70px]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated bar */}
        <div className="h-[4px] rounded gradient-backgroundtwo mb-[20px] animate-expandWidth"></div>

        {/* Light title */}
        <h3
          className="lite-h2 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          Our
        </h3>

        {/* Bold title */}
        <h3
          className="headings-h2 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "500ms" }}
        >
          Tech Stack
        </h3>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-[25px]">
          <h3
            className={`mb-[20px] font-medium text-xl cursor-pointer ${
              activeTab === "frontend" ? "gradient-text" : "text-black"
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Front-end
          </h3>
          <h3
            className={`mb-[20px] font-medium text-xl cursor-pointer ${
              activeTab === "backend" ? "gradient-textTWO" : "text-black"
            }`}
            onClick={() => setActiveTab("backend")}
          >
            Back-end
          </h3>
        </div>

        {/* Content wrapper with same position */}
        <div className="relative w-full min-h-[250px] flex justify-center items-center">
          {/* Front-end */}
          <div
            className={`stack-content ${
              activeTab === "frontend" ? "show" : "hide"
            }`}
          >
            <div className="flex flex-row flex-wrap gap-[50px] justify-center">
              {ourTechStuckFontend.map((item) => (
                <div
                  className="w-[100px] h-[100px] rounded-full gradient-background border-2 border-blue-500 flex justify-center items-center text-white text-[40px] tech-card cursor-pointer"
                  key={item.id}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div
            className={`stack-content ${
              activeTab === "backend" ? "show" : "hide"
            }`}
          >
            <div className="flex flex-row flex-wrap gap-[50px] justify-center">
              {ourTechStuckbackend.map((item) => (
                <div
                  className="w-[100px] h-[100px] rounded-full gradient-backgroundtwo border-2 border-blue-500 flex justify-center items-center text-white text-[40px] tech-card cursor-pointer"
                  key={item.id}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

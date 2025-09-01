import React, { useState } from "react";
import {
  ourTechStuckbackend,
  ourTechStuckFontend,
} from "../../Helpers/Details";
import "../../AnimationCss/TechStackAniamtion.css";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="container py-[50px] !mb-[100px] sm:!mb-[0px] md:py-[70px] px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated bar */}
        <div className="h-[4px] w-16 md:w-20 lg:w-24 rounded gradient-backgroundtwo mb-[20px] animate-expandWidth"></div>

        <h3
          className="lite-h2 text-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          Our
        </h3>

        <h3
          className="headings-h2 text-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: "500ms" }}
        >
          Tech Stack
        </h3>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[25px] mb-6 md:mb-8">
          <h3
            className={`font-medium text-lg sm:text-xl cursor-pointer transition-colors duration-300 text-center ${
              activeTab === "frontend"
                ? "gradient-text"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Front-end
          </h3>
          <h3
            className={`font-medium text-lg sm:text-xl cursor-pointer transition-colors duration-300 text-center ${
              activeTab === "backend"
                ? "gradient-textTWO"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setActiveTab("backend")}
          >
            Back-end
          </h3>
        </div>

        {/* Content wrapper with same position */}
        <div className="relative w-full min-h-[100px] flex justify-center items-center">
          {/* Front-end */}
          <div
            className={`stack-content ${
              activeTab === "frontend" ? "show" : "hide"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-[50px] justify-items-center max-w-full">
              {ourTechStuckFontend.map((item) => (
                <div
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full gradient-background border-2 border-blue-500 flex justify-center items-center text-white text-[28px] sm:text-[32px] md:text-[40px] tech-card cursor-pointer hover:scale-110 transition-transform duration-300"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-[50px] justify-items-center max-w-full">
              {ourTechStuckbackend.map((item) => (
                <div
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full gradient-backgroundtwo border-2 border-blue-500 flex justify-center items-center text-white text-[28px] sm:text-[32px] md:text-[40px] tech-card cursor-pointer hover:scale-110 transition-transform duration-300"
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

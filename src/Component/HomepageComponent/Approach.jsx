import React from "react";


// Import your animation CSS file
import "../../AnimationCss/Approachanimation.css"; // Add this import
import { itemall } from "../../Helpers/Details";

const Approach = () => {
 

  return (
    <div className="bg-[#f7f7f7] animate-approach-background">
      <div className="container py-[50px] md:py-[70px] px-4 md:px-6 lg:px-8 animate-approach-container">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center animate-approach-header-section">
            <div className="w-[89px] h-[4px] rounded gradient-backgroundtwo mb-[20px] animate-approach-gradient-bar"></div>
            <h3 className="lite-h2 text-center animate-approach-title-light">
              Our Design And{" "}
            </h3>
            <h3 className="headings-h2 text-center animate-approach-title-bold">
              Development Approach{" "}
            </h3>
          </div>
          <div className="mt-[40px] md:mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 animate-approach-grid">
            {itemall.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[604px] mx-auto lg:mx-0 bg-white px-4 sm:px-6 md:px-[34px] py-8 md:py-[60px] border-2 border-blue-300 rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-[25px] animate-approach-card"
              >
                <div className="font-[34px] gradient-background text-white w-[40px] h-[40px] flex items-center justify-center rounded flex-shrink-0 mx-auto sm:mx-0 animate-approach-icon-container">
                  <span className="animate-approach-icon">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-[10px] text-center sm:text-left animate-approach-card-content">
                  <h3 className="Headings-h4 text-gray-900 animate-approach-card-title">
                    {item.header}
                  </h3>
                  <p className="default text-gray-700 animate-approach-card-description">
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

export default React.memo(Approach);

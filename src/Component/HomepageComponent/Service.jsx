import React from "react";
import { serviceIcon } from "../../Helpers/Icon";
import { servicedetails, serviceitem } from "../../Helpers/Details";

// Import CSS animation
import "../../AnimationCss/service.animation.css";

const Service = () => {
  return (
    <div className="container py-[70px]">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[89px] h-[4px] rounded gradient-backgroundtwo mb-[20px]"></div>
        <h3 className="lite-h2 animate-approach-title-light">Service</h3>
        <h3 className="headings-h2 animate-approach-title-bold">We Provide</h3>
      </div>

      {/* Services */}
      <div className="flex justify-center gap-[80px] items-center flex-wrap mt-[40px]">
        {serviceitem.map((item, index) => (
          <div
            key={item.id}
            className={`w-[333px] h-[280px] cursor-pointer justify-center rounded-md border-2 border-pink py-[25px] px-[20px] flex flex-col gap-[15px] service-card fade-up`}
            style={{ animationDelay: `${index * 0.2}s` }} // 👈 stagger effect
          >
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-pink text-blue-400">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <h3 className="Headings-h4 gradient-second-text">{item.heading}</h3>
            <p className="default text-gray-700">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Service);

import React from "react";
import hero from "../../assets/Banner/Herro.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="py-5 md:py-[20px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-4">
          {/* Content Section */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 order-2 lg:order-1">
            <h1 className="lite-h1 max-w-full lg:max-w-[520px] text-center lg:text-left ">
              <span className="lite-h1 text-gray-900">Great</span>{" "}
              <span className="lite-h1-small md:lite-h1 gradient-second-text ">
                web & software is
              </span>
             
              <span className=" Dilplay-h1-bold-small md:Dilplay-h1-bold text-gray-900">
                built by great 
              </span>
              <span className="Dilplay-h1-bold gradient-second-text">
                {" "}
                teams
              </span>
            </h1>

            <p className="max-w-full lg:max-w-[520px] text-gray-700 default-lg text-center lg:text-left px-4 sm:px-0">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="h-[52px] w-[175px] rounded btn-lg text-white bg-primary cursor-pointer hover:bg-primary/90 transition-colors">
                Let's get started!
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-[748px] lg:h-[561px] order-1 lg:order-2">
            <img
              src={hero}
              alt="Hero banner"
              className="w-full h-auto lg:h-full object-cover rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);

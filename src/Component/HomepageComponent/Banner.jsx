import React from 'react'
import hero from "../../assets/Banner/Herro.png";
const Banner = () => {
  return (
    <div className="container">
      <div className="py-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-7">
            <h1 className="lite-h1 max-w-[520px]">
              <span className="lite-h1 text-gray-900">Great</span>{" "}
              <span className="lite-h1 gradient-second-text">
                web & software
              </span>{" "}
              is &nbsp;
              <span className="Dilplay-h1-bold text-gray-900">
                built by great &nbsp;
              </span>
              <span className="Dilplay-h1-bold gradient-second-text">
                {" "}
                teams
              </span>
            </h1>
            <p className="max-w-[520px] text-gray-700 default-lg ">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>

            <button className="h-[52px] w-[175px] rounded btn-lg text-white bg-primary cursor-pointer">
              Let’s get started!
            </button>
          </div>
          <div className="w-[748px] h-[561px]">
            <img src={hero} alt={hero} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
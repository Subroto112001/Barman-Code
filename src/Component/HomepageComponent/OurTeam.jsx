import React from "react";
import barman from "../../assets/Ourteam/Ceo.JPG";
import Ranojit from "../../assets/Ourteam/Ranojit.jpg";
import Evan from "../../assets/Ourteam/evan.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../AnimatonOurteam.css'
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const OurTeam = () => {
  const ourteam = [
    {
      id: 1,
      image: barman,
      name: "Subroto Kumar Barman",
      designation: "CEO - Barman&Code",
    },
    {
      id: 2,
      image: Ranojit,
      name: "Ranojit Kumar Mohonto",
      designation: "CEO - Ranocode",
    },
    {
      id: 3,
      image: Evan,
      name: "Shahriar Azad Evan",
      designation: "SEO Specialist - Barman&Code",
    },
  ];

  return (
    <div className="container py-[70px] relative animate-container">
      <div className="flex flex-col justify-center items-center gap-5 animate-header-section">
        <div className="w-[89px] h-[4px] rounded gradient-backgroundtwo animate-gradient-bar"></div>
        <h3 className="headings-h2 text-gray-800 animate-header-title">
          Meet With Our Team
        </h3>
      </div>

      <Swiper
        className="animate-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
      >
        {ourteam.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col justify-center items-center mt-[70px] gap-3.5 animate-team-card">
              <div className="w-[300px] h-[300px] rounded-full border-4 border-blue-500 animate-team-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded-full w-full h-full animate-team-image"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="Headings-h3 gradient-second-text animate-team-name">
                  {item.name}
                </h3>
                <h3 className="Headings-h4 gradient-text animate-team-designation">
                  {item.designation}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom buttons */}
      <div className="custom-prev w-8 h-8 sm:w-10 sm:h-10 gradient-background text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 left-[300px] -translate-y-1/2 z-10 animate-nav-button">
        <GrFormPrevious />
      </div>
      <div className="custom-next w-8 h-8 sm:w-10 sm:h-10 gradient-backgroundtwo text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 right-[300px] -translate-y-1/2 z-10 animate-nav-button">
        <MdOutlineNavigateNext />
      </div>

      <div className="flex justify-center items-center animate-see-more-container">
        <button className="btn-lg text-white w-[124px] h-[42px] flex justify-center items-center rounded gradient-backgroundtwo cursor-pointer mt-[30px] animate-see-more-btn">
          {" "}
          See More
        </button>
      </div>
    </div>
  );
};

export default OurTeam;

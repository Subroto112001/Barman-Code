import React from "react";
import barman from "../../assets/Ourteam/Ceo.JPG";
import Ranojit from "../../assets/Ourteam/Ranojit.jpg";
import Evan from "../../assets/Ourteam/evan.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../AnimationCss/AnimatonOurteam.css";
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
    <div className="container py-[50px] md:py-[70px] px-4 md:px-6 lg:px-8 relative animate-container">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-5 animate-header-section">
        <div className="w-[60px] sm:w-[75px] md:w-[89px] h-[4px] rounded gradient-backgroundtwo animate-gradient-bar"></div>
        <h3 className="headings-h2 text-gray-800 text-center animate-header-title">
          Meet With Our Team
        </h3>
      </div>

      <div className="mt-10 md:mt-12 lg:mt-16">
        <Swiper
          className="animate-swiper pb-12 md:pb-16"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
        >
          {ourteam.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-center items-center gap-3 h-[290px] sm:h-[490px] md:gap-4 animate-team-card px-2 sm:px-4">
                <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] rounded-full border-4 border-blue-500 animate-team-image-container overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-full w-full h-full animate-team-image hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center max-w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-second-text animate-team-name leading-tight">
                    {item.name}
                  </h3>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium gradient-text animate-team-designation leading-tight">
                    {item.designation}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons - Hidden on mobile and tablet */}
      <div className="custom-prev hidden xl:flex w-10 h-10 2xl:w-12 2xl:h-12 gradient-background text-white rounded-full items-center justify-center cursor-pointer absolute top-1/2 left-4 2xl:left-8 -translate-y-1/2 z-10 animate-nav-button hover:scale-110 transition-transform duration-300">
        <GrFormPrevious className="text-lg 2xl:text-xl" />
      </div>
      <div className="custom-next hidden xl:flex w-10 h-10 2xl:w-12 2xl:h-12 gradient-backgroundtwo text-white rounded-full items-center justify-center cursor-pointer absolute top-1/2 right-4 2xl:right-8 -translate-y-1/2 z-10 animate-nav-button hover:scale-110 transition-transform duration-300">
        <MdOutlineNavigateNext className="text-lg 2xl:text-xl" />
      </div>

      {/* See More Button */}
      <div className="flex justify-center items-center animate-see-more-container mt-6 md:mt-8">
        <button className="btn-lg text-white w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] h-[40px] sm:h-[42px] md:h-[44px] flex justify-center items-center rounded gradient-backgroundtwo cursor-pointer animate-see-more-btn hover:scale-105 transition-transform duration-300 text-sm sm:text-base md:text-lg">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurTeam;

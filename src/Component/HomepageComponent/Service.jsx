import React from "react";
import { FaCode } from "react-icons/fa";
import { serviceIcon } from "../../Helpers/Icon";
import { servicedetails } from "../../Helpers/Details";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Service = () => {
  const serviceitem = [
    {
      id: 1,
      icon: serviceIcon.code,
      heading: servicedetails.heading1,
      para: servicedetails.para1,
    },
    {
      id: 2,
      icon: serviceIcon.software,
      heading: servicedetails.heading2,
      para: servicedetails.para2,
    },
    {
      id: 3,
      icon: serviceIcon.mobileapp,
      heading: servicedetails.heading3,
      para: servicedetails.para3,
    },
    {
      id: 4,
      icon: serviceIcon.softTest,
      heading: servicedetails.heading4,
      para: servicedetails.para4,
    },
  ];
  return (
    <div className="container">
      <div className="flex justify-center items-center py-[70px]">
        <div className="w-full flex flex-row relative">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={150}
                      slidesPerView={3}
                         
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
          >
            <div className=" ">
              {serviceitem.map((item) => (
                <SwiperSlide>
                  <div className="w-[333px] h-[280px] cursor-pointer  justify-center rounded-md border-2 border-pink py-[25px] px-[20px] flex flex-col gap-[15px]">
                    <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-pink  text-blue-400">
                      <span className="text-2xl ">
                       {item.icon}
                      </span>
                    </div>

                    <h3 className="Headings-h4 gradient-second-text">
                     {item.heading}
                    </h3>
                    <p className="default text-gray-700">
                    {item.para}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* Custom buttons */}
          <div className="custom-prev w-8 h-8 sm:w-10 sm:h-10 gradient-background text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 left-[32px] sm:left-[-19px] -translate-y-1/2 z-10">
            {<GrFormPrevious />}
          </div>
          <div className="custom-next w-8 h-8 sm:w-10 sm:h-10 bg-node gradient-backgroundtwo hover:bg-primary-400 text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 right-[32px] sm:right-[-19px] -translate-y-1/2 z-10">
            {<MdOutlineNavigateNext />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

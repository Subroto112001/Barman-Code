import React from 'react'
import { FaCheck, FaCode } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';
import { GrSecure, GrShieldSecurity } from 'react-icons/gr';
import { IoRocket } from 'react-icons/io5';

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
      <div className=" bg-[#f7f7f7]">
        <div className="container py-[70px]">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[89px] h-[4px] rounded gradient-backgroundtwo mb-[20px] "></div>
              <h3 className="lite-h2">Our Design And </h3>
              <h3 className="headings-h2">Development Approach </h3>
            </div>
            <div className="mt-[60px] flex flex-wrap gap-y-[40px] justify-between">
              {itemall.map((item) => (
                <div className="w-[604px] h-[237px] bg-white px-[34px] py-[60px] border-2 border-blue-300 rounded-lg flex flex-row gap-[25px]">
                  <div className="font-[34px] bg-red-400 text-white w-[40px] h-[40px] flex items-center justify-center rounded">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="Headings-h4 text-gray-900">{item.header}</h3>
                    <p className="max-w-[453px] default text-gray-700">
                      Unlike other companies, we are a UX first development
                      company. Projects are driven by designers and they make
                      sure design and experiences translate to code.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Approach
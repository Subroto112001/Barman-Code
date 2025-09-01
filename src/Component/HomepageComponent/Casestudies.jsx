import React from "react";
import card1 from "../../assets/Case/Case1.png";
import card2 from "../../assets/Case/Case2.png";
import card3 from "../../assets/Case/case3.png";

const Casestudies = () => {
  const caseholde = [
    {
      id: 1,
      image: card1,
      class: "bg-[#F1F2FF]",
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      id: 2,
      image: card2,
      class: "bg-[#F0FFF7]",
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      id: 3,
      image: card3,
      class: "bg-[#FFF4F4]",
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
  ];

  return (
    <div className="bg-[#F7F7FA]">
      <div className="container py-[50px] md:py-[70px] lg:py-[89px] px-4 md:px-6 lg:px-8">
        <div>
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-[60px] sm:w-[75px] md:w-[89px] h-[4px] rounded gradient-backgroundtwo mb-[20px]"></div>
            <h3 className="lite-h2 text-center">Our recent</h3>
            <h3 className="headings-h2 text-center">Case studies</h3>
          </div>

          {/* Case Studies Grid */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px] mt-8 md:mt-12 lg:mt-[89px]">
            {caseholde.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } justify-between items-center rounded-lg p-4 md:p-6 lg:p-8 ${
                  item.class
                } gap-6 lg:gap-8`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 max-w-[601px] aspect-[601/416] lg:aspect-auto lg:h-[300px] xl:h-[350px] 2xl:h-[416px]">
                  <img
                    src={item.image}
                    alt={`Case study ${item.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-[30px] text-center lg:text-left max-w-[529px]">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {item.header}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.para}
                    </p>

                    {/* Optional: Add a "Read More" button */}
                    <div className="mt-4 lg:mt-6">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300 text-sm md:text-base">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudies;

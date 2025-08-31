import React from "react";
import card1 from "../../assets/Case/Case1.png";
import card2 from "../../assets/Case/Case2.png";
import card3 from "../../assets/Case/case3.png";

const Casestudies = () => {
  const caseholde = [
    {
      id: 1,
      image: card1,
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      id: 2,
      image: card2,
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      id: 3,
      image: card3,
      header: "Website Design for SCFC Canada",
      para: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
  ];
  return (
    <div className="bg-[#F7F7FA]">
      <div className="container py-[89px]">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="lite-h2">Our recent </h3>
            <h3 className="headings-h2"> Case studies </h3>
          </div>
          <div className="flex flex-col gap-[40px]">
            {caseholde.map((item) => (
              <div className="flex flex-row justify-between items-center mt-[89px]!  rounded-lg bg-[#F1F2FF] ">
                <div className="w-[601px] h-[416px]">
                  <img src={item.image} alt={card1} className="w-full h-full" />
                </div>
                <div className=" rounded-lg">
                  <div className="!px-[51px] h-[416px] flex justify-center flex-col gap-[30px] ">
                    <h3 className="Headings-h3 text-text-gray-900">
                      {item.header}
                    </h3>
                    <p className="default text-text-gray-700 w-[529px]">
                     {item.para}
                    </p>
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

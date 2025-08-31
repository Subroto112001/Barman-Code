import React from "react";
import Logo from "../../assets/Logo.png";
const Header = () => {
  const headersItem = [
    {
      id: 1,
      name: "About Us",
    },
    {
      id: 2,
      name: "Service",
    },
    {
      id: 3,
      name: "Case Studies",
    },
    {
      id: 4,
      name: "Blog",
    },
    {
      id: 3,
      name: "How It Works",
    },
  ];
  return (
    <div className="container shadow-md">
      <div className="flex py-5  flex-row items-center justify-between ">
        <div className="text-primary default-lg font-bold!">
          {"</Barman&Code>"}
        </div>
        <div className="flex gap-[48px] cursor-pointer">
          {headersItem.map((item) => (
            <span key={item.id} className="Headings-h6 text-gray-700">
              {item.name}
            </span>
          ))}
        </div>
        <div>
          <button className="py-[14px] px-[25px] rounded fbg-gradient-primary btn-lg text-white cursor-pointer">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

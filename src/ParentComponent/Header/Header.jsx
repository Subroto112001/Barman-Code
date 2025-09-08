import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { headericon } from "../../Helpers/Icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headersItem = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: headericon.home,
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
      icon: headericon.about,
    },
    {
      id: 3,
      name: "Service",
      path: "/service",
      icon: headericon.service,
    },
    {
      id: 4,
      name: "Case Studies",
      path: "/case-study",
      icon: headericon.case,
    },
    {
      id: 5,
      name: "Pricing",
      path: "/pricing",
      icon: headericon.price,
    },
    {
      id: 6,
      name: "Blog",
      path: "/blog",
      icon: headericon.blog,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container shadow-md">
      <div className="flex py-3 md:py-5 flex-row items-center justify-between relative">
        {/* Logo */}
        <NavLink
          to={"/"}
          className="text-primary default-lg font-bold cursor-pointer"
        >
          {"</Barman&Code>"}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-[48px] cursor-pointer">
          {headersItem.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className="Headings-h6 text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <button className="py-[14px] px-[25px] rounded fbg-gradient-primary btn-lg text-white cursor-pointer hover:opacity-90 transition-opacity">
            Contact US
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden z-20 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-gray-700 transform transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 transform transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50  z-10 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={`
          fixed top-0 right-0 h-full w-80 max-w-[55vw] bg-white shadow-xl z-15 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col pt-20 px-6">
            {/* Mobile Navigation Items */}
            <div className="flex flex-col  gap-6 mb-8">
              {headersItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-center gap-2 Headings-h6 text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <span className="">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <button
              className="py-[14px] px-[25px] rounded fbg-gradient-primary btn-lg text-white cursor-pointer hover:opacity-90 transition-opacity w-full"
              onClick={toggleMenu}
            >
              Contact US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

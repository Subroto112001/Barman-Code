import React from "react";
import { footeritem } from "../../Helpers/Details";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footericon = [
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 2,
      icon: <FaFacebook />,
    },
    {
      id: 3,
      icon: <FaFacebook />,
    },
    {
      id: 4,
      icon: <FaFacebook />,
    },
    {
      id: 5,
      icon: <FaFacebook />,
    },
  ];

  return (
    <div className="bg-[rgb(243,240,240)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 md:py-16 lg:py-[70px]">
          {/* Mobile Layout (stacked columns) */}
          <div className="flex flex-col space-y-8 md:hidden">
            {/* Company Info */}
            <div className="flex flex-col gap-5 text-center sm:text-left">
              <div className="text-primary default-lg !font-bold z-20">
                {"</Barman&Code>"}
              </div>
              <p className="para-1 text-gray-600 max-w-md mx-auto sm:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex flex-row gap-4 justify-center sm:justify-start">
                {footericon.map((item) => (
                  <span
                    className="text-xl sm:text-2xl text-gray-600 hover:text-primary transition-colors cursor-pointer"
                    key={item.id}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-gray-800 Headings-h5">Links</h3>
              <nav className="flex flex-col gap-2 sm:gap-3">
                {footeritem.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="block text-gray-500 hover:text-gray-700 text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-gray-800 Headings-h5">Contact us</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto sm:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-gray-600 text-sm font-medium">
                +908 89097 890
              </p>
            </div>
          </div>

          {/* Tablet Layout (2 columns) */}
          <div className="hidden md:flex lg:hidden flex-wrap gap-8">
            {/* Left Column */}
            <div className="flex-1 min-w-[300px]">
              <div className="flex flex-col gap-5">
                <div className="text-primary default-lg !font-bold z-20">
                  {"</Barman&Code>"}
                </div>
                <p className="para-1 text-gray-600 max-w-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex flex-row gap-4">
                  {footericon.map((item) => (
                    <span
                      className="text-2xl text-gray-600 hover:text-primary transition-colors cursor-pointer"
                      key={item.id}
                    >
                      {item.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-1 gap-8 justify-between min-w-[300px]">
              {/* Links */}
              <div className="flex flex-col gap-5">
                <h3 className="text-gray-800 Headings-h5">Links</h3>
                <nav className="flex flex-col gap-3">
                  {footeritem.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className="block text-gray-500 hover:text-gray-700 text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-5">
                <h3 className="text-gray-800 Headings-h5">Contact us</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  +908 89097 890
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout (3 columns) */}
          <div className="hidden lg:flex flex-row justify-between items-start">
            {/* Column 1 - Company Info */}
            <div className="flex flex-col gap-5 flex-1 max-w-md">
              <div className="text-primary default-lg !font-bold z-20">
                {"</Barman&Code>"}
              </div>
              <p className="para-1 w-full max-w-[372px] text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex flex-row gap-6">
                {footericon.map((item) => (
                  <span
                    className="text-2xl text-gray-600 hover:text-primary transition-colors cursor-pointer"
                    key={item.id}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2 - Links */}
            <div className="flex flex-col gap-5 flex-1 max-w-xs">
              <h3 className="text-gray-800 Headings-h5">Links</h3>
              <nav className="flex flex-col gap-3">
                {footeritem.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="block text-gray-500 hover:text-gray-700 text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3 - Contact */}
            <div className="flex flex-col gap-6 flex-1 max-w-xs">
              <h3 className="text-gray-800 Headings-h5">Contact us</h3>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-gray-600 text-sm font-medium">
                +908 89097 890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border/Copyright Section (optional) */}
        <div className="border-t border-gray-300 pt-6 pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 Barman&Code. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

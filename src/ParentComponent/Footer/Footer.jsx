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
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 1,
      icon: <FaFacebook />,
    },
  ];
  return (
    <div className="bg-[#f7f7f7]">
      <div className="container">
        <div className="py-[70px] flex flex-row justify-between ">
          {/* colum 1 */}

          <div className=" flex flex-col gap-[20px] ">
            <div className="text-primary default-lg !font-bold z-20">
              {"</Barman&Code>"}
            </div>
            <p className="para-1 w-[372px] text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <div className="flex flex-row gap-6">
              {footericon.map((item) => (
                <span className="text-2xl " key={item.id}>
                  {item.icon}
                </span>
              ))}
            </div>
          </div>
          {/* colum 1 */}
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-gray-800 Headings-h5">Links</h3>
            <nav className="flex flex-col gap-[10px]">
              {footeritem.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block text-gray-500 hover:text-gray-700 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          {/* coloum 2 */}
          {/* coloum 3 */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-gray-800 Headings-h5">Contact us</h3>

            <p className="text-gray-500 text-sm max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600 text-sm font-medium">+908 89097 890</p>
          </div>
          {/* coloum 3 */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

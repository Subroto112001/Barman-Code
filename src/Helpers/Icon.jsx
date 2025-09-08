import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger, FaCode } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { IoPricetags } from "react-icons/io5";
import { LuPcCase } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { SiBmcsoftware } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";

export const serviceIcon = {
    code: <FaCode />,
    software: <SiBmcsoftware />,
    softTest: <GrTestDesktop />,
    mobileapp : <IoLogoAndroid />
}

export const headericon = {
  home: <AiOutlineHome />,
  about: <TbListDetails />,
  service: <MdMiscellaneousServices />,
  case: <LuPcCase />,
  price: <IoPricetags />,
  blog: <FaBlogger />,
};
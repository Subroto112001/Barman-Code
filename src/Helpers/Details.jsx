import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCheck, FaCode, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoRocket } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import card1 from "../assets/Case/Case1.png";
import card2 from "../assets/Case/Case2.png";
import card3 from "../assets/Case/case3.png";
import { GiTechnoHeart } from "react-icons/gi";
import { GrSecure, GrShieldSecurity } from "react-icons/gr";
import { serviceIcon } from "./Icon";


// service
export const servicedetails = {
  heading1: "Web Design & Development",
  para1:
    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  heading2: "Software Development",
  para2:
    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  heading3: "Mobile App Development",
  para3:
    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  heading4: "Software Testing Service",
  para4:
    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
};





// approach

export const itemall = [
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


// techstuck
export const ourTechStuckFontend = [
  {
    id: 1,
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    icon: <FaBootstrap />,
  },
  {
    id: 4,
    icon: <RiTailwindCssFill />,
  },
  {
    id: 5,
    icon: <FaReact />,
  },
  {
    id: 6,
    icon: <BiLogoTypescript />,
  },
];
export const ourTechStuckbackend = [
  {
    id: 1,
    icon: <FaNodeJs />,
  },
  {
    id: 2,
    icon: <SiExpress />,
  },
  {
    id: 3,

    icon: <IoLogoFirebase />,
  },
  {
    id: 4,
    icon: <SiMongodb />,
  },
];
// case
export const caseholde = [
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

// footer
export const footeritem = [
  {
    id: 1,
    name: "About Us",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Case Studies",
  },
  {
    id: 4,
    name: "How it works",
  },
  {
    id: 5,
    name: "Blog",
  },
  {
    id: 6,
    name: "Careers",
  },
  {
    id: 7,
    name: "Areas We Serve",
  },
];

// sevice
export  const serviceitem = [
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
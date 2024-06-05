import { twitter, instagram, facebook, linkedin } from '@public/assets';


import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TbBuildingPavilion, TbBuildingCottage  } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";


export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "about",
    title: "About Us",
    route: "/about",
  },
  {
    id: "properties",
    title: "Properties",
    route: "/properties",
  },
  {
    id: "agents",
    title: "Agents",
    route: "/agents",
  },
  {
    id: "contact",
    title: "Contact Us",
    route: "/contact",
  },
];

export const SearchBtns = [
  {
    id: "office",
    name: "Office",
    Icon: FaRegBuilding,
    link: "properties/office"
  },
  {
    id: "investment",
    name: "Investment Sales",
    Icon: HiOutlineBuildingLibrary,
    link: "properties/investmentsales"
  },
  {
    id: "resources",
    name: "Resources",
    Icon: TbBuildingPavilion,
    link: "properties/resources"
  },
  {
    id: "modern",
    name: "Modern",
    Icon: RiBuilding2Line,
    link: "properties/modern"
  },
  {
    id: "apartment",
    name: "Apartment",
    Icon: BsBuildings,
    link: "properties/apartment"
  },
];

export const socialMedia = [
  {
    id: "twitter",
    Icon: twitter,
    link: ""
  },
  {
    id: "instagram",
    Icon: instagram,
    link: ""
  },
  {
    id: "facebook",
    Icon: facebook,
    link: ""
  },
  {
    id: "linkedin",
    Icon: linkedin,
    link: ""
  }
];

export const footerLinks =[
  {
    id: "about",
    name: "About Us",
    route: "/about",
  },
  {
    id: "properties",
    name: "Properties",
    route: "/properties",
  },
  {
    id: "agents",
    name: "Agents",
    route: "/agents",
  },
  {
    id: "contact",
    name: "Contact Us",
    route: "/contact",
  },
  {
    id: "privacy",
    name: "Privacy Policy",
    route: "/privacy",
  },
  {
    id: "terms",
    name: "Terms of Usage",
    route: "/terms",
  },
];
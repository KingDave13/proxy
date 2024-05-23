import { twitter, instagram, facebook, whatsapp, youtube, tiktok } from '@public/assets';


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
    id: "listings",
    title: "Listings",
    route: "/listings",
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
    id: "studio",
    name: "Studio",
    Icon: FaRegBuilding,
    link: "listings/studio"
  },
  {
    id: "historic",
    name: "Historic",
    Icon: HiOutlineBuildingLibrary,
    link: "listings/historic"
  },
  {
    id: "unique",
    name: "Unique",
    Icon: TbBuildingPavilion,
    link: "listings/unique"
  },
  {
    id: "modern",
    name: "Modern",
    Icon: RiBuilding2Line,
    link: "listings/modern"
  },
  {
    id: "family",
    name: "Family House",
    Icon: TbBuildingCottage,
    link: "listings/familyhouse"
  },
  {
    id: "apartment",
    name: "Apartment",
    Icon: BsBuildings,
    link: "listings/apartment"
  },
];

export const socialMedia = [
  {
    id: "facebook",
    image: facebook,
    link: ""
  },
  {
    id: "instagram",
    image: instagram,
    link: ""
  },
  {
    id: "twitter",
    image: twitter,
    link: ""
  },
  {
    id: "whatsapp",
    image: whatsapp,
    link: ""
  },
  {
    id: "youtube",
    image: youtube,
    link: ""
},
  {
    id: "tiktok",
    image: tiktok,
    link: ""
  },
];

export const footerLinks =[
  {
    id: "about",
    name: "About Us",
    route: "/about",
  },
  {
    id: "listings",
    name: "Listings",
    route: "/listings",
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
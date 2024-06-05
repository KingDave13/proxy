'use client';

import { IoArrowUp } from "react-icons/io5";

const ContactButton = () => {
  return (
    <div className={`bg-main py-3 px-3 fixed cursor-pointer
    md:right-10 ss:right-8 right-6 rounded-full
    grow2 z-50
    top-1/2 transform -translate-y-1/2`}
    >
      <IoArrowUp className='text-white md:text-[22px] ss:text-[20px] text-[16px]'/>
    </div>
  );
};

export default ContactButton;
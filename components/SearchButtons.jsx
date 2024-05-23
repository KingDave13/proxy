'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/motion';
import { SearchBtns } from "@constants";
import Image from "next/image";

const ButtonCard = ({ item, index }) => {
    return (
        <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='cursor-pointer grow2 bg-white shadow-md'>
            <div className='flex items-center justify-center relative
            gap-2 flex-col'
            >
                {/* <Image
                    src={Btn.Icon}
                    alt={Btn.name}
                    height={150}
                    width={150}
                    className='rounded-md'
                /> */}
                <p className="text-main text-[14px]">
                    {item.name}
                </p>
            </div>
        </motion.div>
    )
};

const SearchButtons = () => {
  return (
    <section className="md:min-h-[300px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex 
        max-w-[86rem]'>
            <div className="flex items-center w-full">
                <div className='flex gap-3'>
                    {SearchBtns.map((item, index) => (
                      <ButtonCard 
                        key={item.id}
                        index={index}
                        {...item}
                      />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(SearchButtons, '');
'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn } from '@utils/motion';
import { SearchBtns } from "@constants";
import Image from "next/image";

const SearchButtons = () => {
  return (
    <section className="md:min-h-[300px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex 
        max-w-[86rem] md:mb-0 ss:mb-0'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-12 ss:mb-8 
            mb-8">
                <h1 className="text-secondary font-manierMedium md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    What is Nuude!?
                </h1>
                <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-secondary w-full h-[1px]' />
                </motion.div>
            </motion.div>
            
           
        </div>
    </section>
  )
};

export default SectionWrapper(SearchButtons, '');
'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/motion';
import { SearchBtns } from "@constants";

const ButtonCard = ({ name, Icon, index }) => {
    return (
        <motion.div
            variants={fadeIn('', 'spring', index * 0.5, 0.75)}
            className='cursor-pointer grow4 bg-white shadow-md pt-6 pb-6 pl-16 pr-16'>
            <div className='flex items-center justify-center relative gap-5 flex-col'>
                <Icon size={30} className='rounded-md' />
                <p className="text-main text-[15px] font-semibold">
                    {name}
                </p>
            </div>
        </motion.div>
    );
};


const SearchButtons = () => {
  return (
    <section className="md:min-h-[300px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex 
        max-w-[86rem]'>
            <div className="flex items-center w-full justify-center">
                <div className='flex gap-6 items-center'>
                    {SearchBtns.map((item, index) => (
                      <ButtonCard 
                        key={item.id}
                        index={index}
                        name={item.name}
                        Icon={item.Icon}
                      />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(SearchButtons, '');
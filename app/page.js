'use client';

import About from "@components/About";
import Search from "@components/Search";
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/motion';

const Home = () => {

  return (
    <section className="relative w-full">
      <div className="flex sm:px-16 px-6 hero">
        <div className='justify-center w-full mx-auto
          max-w-[86rem] flex md:pt-12 ss:pt-20 pt-20' 
          >
            <div className="flex flex-col w-full justify-center">
              <h1 className='text-black md:text-[80px] ss:text-[70px] 
              text-[52px] md:leading-[90px] fade-in-from-bottom
              ss:leading-[70px] leading-[55px] font-bold'>
                PROXY- <span className="text-primaryalt">
                <br className="ss:flex hidden"></br>
                Reinventing the </span> <br className="ss:flex hidden"></br>
                real estate business.
              </h1>

              <p className='md:mt-6 ss:mt-5 mt-6 md:text-[18px] ss:text-[18px]
              text-[16px] text-main md:leading-[25px] ss:leading-[25px] 
              leading-[20px] fade-in-from-bottom md:max-w-[600px] 
              ss:max-w-[480px] max-w-[320px]'
              style={{ opacity: 0, animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Armed with two decades of industry wisdom, we are focused 
                on combining these insights with the prowess of modern 
                technology, delivering outcomes that not only meet but 
                exceed your expectations.
              </p>

              <div className='flex md:mt-6 ss:mt-8 mt-6 items-center 
              buttonfull fade-in-from-bottom2'
              style={{ opacity: 0, animationDelay: '1s', animationFillMode: 'forwards' }}>
                <button
                  className='grow4 bg-primaryalt border-none buttonhalf
                  md:text-[18px] ss:text-[17px] text-[14px] md:py-4
                  ss:py-3 py-3 md:px-24 ss:px-7 px-3 text-white 
                  md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                  font-medium cursor-pointer'
                >
                  Join Us
                </button>
              </div>
            </div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)} 
              className='flex relative items-center justify-center
              w-2/4'>
                <div className="">
                    <Search />
                </div>
            </motion.div>      
        </div>
      </div>
      
      <About />

    </section>
  );
};

export default Home;
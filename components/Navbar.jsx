'use client';

import { useState, useEffect, useRef } from 'react';
import { BsX } from 'react-icons/bs';
import styles from '@styles/styles';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@constants';
import { logo } from '@public/assets';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed 
      md:py-4 ss:py-4 py-3 top-0 z-20 navsmooth backdrop-blur-md bg-opacity-90
      ${ isScrolled ? 'bg-main2 shadow-lg' : '' }`}
    >
      <div className="w-full flex justify-between items-center 
      max-w-[86rem] mx-auto">
        <Link href='/'
          onClick={() => {
          setActive('Home');
          window.scrollTo(0, 0);
          }}>
          <Image 
            src={logo} 
            alt='logo'
            height={'auto'}
            width={180}
          />
        </Link>

        <div className="hidden md:flex items-center justify-end w-full
        gap-16">
          <ul className="list-none flex gap-12">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-primary'
                    : 'text-main'
                } hover:text-textalt grow4 text-[18px] text-decoration-none 
                cursor-pointer font-medium`}
                onClick={() => {
                  setActive(link.title);
                  if (link.special) {
                    router.push(link.route);
                  }
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          
          <div className='flex items-center gap-5'>
            <button className='bg-main grow4 justify-center
              text-[16px] py-2 px-10 text-white rounded-md'
              >
                Sign In
            </button>

            <button className='bg-main grow4 justify-center
              text-[16px] py-2 px-10 text-white rounded-md'
              >
                Register
            </button>
          </div>
          
        </div>


        {/* FOR MOBILE */}
        
        <div className="md:hidden flex justify-end flex-1 items-center
        mt-3">
          <div className="flex items-center z-20">
            {toggle ? (
              <BsX
                size={40}
                className="object-contain cursor-pointer"
                style={{ color: isScrolled ? '#000' : '#021e31' }}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <HiOutlineMenuAlt3
                size={40}
                className="object-contain cursor-pointer"
                style={{ color: isScrolled ? '#000' : '#021e31' }}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          
          <div
            ref={menuRef}
            className={`p-6 ss:mt-28 mt-24 bg-primaryalt absolute top-0 right-0 
            z-10 flex-col w-full shadow-xl
            ${toggle ? 'menu-slide-enter menu-slide-enter-active' 
            : 'menu-slide-exit menu-slide-exit-active'}`}
          >
            <ul className="list-none flex justify-end 
            flex-col">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-secondary'
                      : 'text-primary'
                  } font-medium cursor-pointer ss:text-[20px] text-[17px] 
                  w-full
                  ${index !== navLinks.length - 1 ? 'border-b-[1px] pb-1.5 pt-1.5' : 'pt-1.5'}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    if (link.special) {
                      router.push(link.route);
                    }
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            <button className='bg-main text-[16px] py-2 px-4
              text-white rounded-[5px] mt-5 ss:text-[20px] text-[14px]'
              onClick={() => {
                setToggle(!toggle);
              }}
              >
                Our Newsletter
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
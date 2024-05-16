
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-auto flex flex-col md:flex-row justify-evenly items-center p-4'>
      <img className='w-[106px] h-[30px]' src='./imgs/navbar1.png' alt="img" />
      <button 
        className='md:hidden text-black'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`flex-col md:flex-row gap-2 md:gap-8 text-[15px] font-medium mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <ScrollLink to="class" smooth={true} duration={500}>CLASS 5-12</ScrollLink>
        <ScrollLink to="skill" smooth={true} duration={500}>SKILL</ScrollLink>
        <ScrollLink to="admission" smooth={true} duration={500}>ADMISSION</ScrollLink>
        <ScrollLink to="preparation" smooth={true} duration={500}>PREPARATION</ScrollLink>
        <ScrollLink to="batch" smooth={true} duration={500}>BATCH 2023</ScrollLink>
      </div>
      <div className={`flex-col md:flex-row gap-2 md:gap-6 items-center mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <button className='border-[1px] border-[black] text-[15px] font-medium px-3'>EN</button>
        <button className='flex text-[22px] text-[#09F7F7] font-medium items-center gap-3'>
          <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5152 15.1664L12.7964 13.1542C12.6375 13.0687 12.461 13.0507 12.2933 13.1029C12.1256 13.155 11.9759 13.2746 11.8667 13.4435L10.2198 15.9838C7.63511 14.4453 5.55505 11.8191 4.3364 8.55597L6.34855 6.47672C6.48258 6.33909 6.57745 6.15007 6.61879 5.93828C6.66013 5.72649 6.64569 5.50346 6.57765 5.30295L4.98388 0.607883C4.90921 0.391746 4.77714 0.215277 4.61045 0.108905C4.44376 0.00253414 4.2529 -0.0270723 4.07077 0.0251913L0.617589 1.03128C0.441997 1.08247 0.285334 1.20729 0.173169 1.38537C0.0610036 1.56345 -4.04491e-05 1.78427 2.01088e-08 2.01179C2.01088e-08 12.7643 6.90305 21.4628 15.4065 21.4628C15.5868 21.4629 15.7618 21.3859 15.9029 21.2443C16.044 21.1027 16.1429 20.9048 16.1835 20.6831L16.9804 16.3234C17.0215 16.0923 16.9976 15.8504 16.9127 15.6392C16.8277 15.428 16.6872 15.2608 16.5152 15.1664Z" fill="black"/>
          </svg>
          16457
        </button>
        <button className='flex items-center gap-1 bg-[#09F7F7] text-white py-2 px-4 font-semibold rounded-md'>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.78376 6.52163C8.90499 6.52163 10.6242 5.0619 10.6242 3.26081C10.6242 1.45972 8.90499 0 6.78376 0C4.66252 0 2.94333 1.45972 2.94333 3.26081C2.94333 5.0619 4.66252 6.52163 6.78376 6.52163ZM9.47205 7.33683H8.97099C8.30492 7.59668 7.56384 7.74443 6.78376 7.74443C6.00367 7.74443 5.26559 7.59668 4.59652 7.33683H4.09546C1.86922 7.33683 0.0630188 8.87043 0.0630188 10.7607V11.8204C0.0630188 12.4955 0.70809 13.0433 1.50318 13.0433H12.0643C12.8594 13.0433 13.5045 12.4955 13.5045 11.8204V10.7607C13.5045 8.87043 11.6983 7.33683 9.47205 7.33683Z" fill="white"/>
          </svg>
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default Navbar;

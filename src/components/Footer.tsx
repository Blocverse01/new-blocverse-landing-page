import React from "react";
import Image from "next/image";
import logo from "@/components/assets/logo.png";
import { Email, Twitter } from "./assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-bv-black-1 px-[22px] lg:px-[95px] flex flex-col space-y-8 font-lato py-[40px] border-t-[0.4px] border-white'>
      <div className='flex flex-col w-[211px] lg:w-full lg:flex-row justify-between'>
        <div className='flex items-center justify-between  w-[300px]'>
          <Image src={logo} width={123} height={56} alt='Logo' />
          <div className='flex lg:hidden space-x-6 '>
            <a href='https://twitter.com/Blocverse_'>
              {" "}
              <Twitter />
            </a>
            <a href='mailto:info@blocverse.com'>
              <Email />
            </a>
          </div>
        </div>
        <nav className=' '>
          <ul className='lg:w-[582px]  lg:flex space-x-3 hidden   justify-between text-white self-center font-medium text-base lg:text-[20px] '>
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About-Us</Link>
            <Link href='/services'>Services</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact-us'>Contact-Us</Link>
          </ul>
          <ul className='lg:w-[582px] mt-[24px] lg:mt-0 flex flex-col space-y-[24px]  lg:hidden   justify-between text-white self-center font-medium text-base lg:text-[20px] '>
            <div className='flex space-x-4'>
              <Link href='/'>Home</Link>
              <Link href='/about-us'>About-Us</Link>
              <Link href='/services'>Services</Link>
            </div>
            <div className='flex space-x-4'>
              <Link href='/blog'>Blog</Link>
              <Link href='/contact-us'>Contact-Us</Link>
            </div>
          </ul>
        </nav>
        <div className=' hidden  lg:flex space-x-6 '>
          <a href='https://twitter.com/Blocverse_'>
            {" "}
            <Twitter />
          </a>
          <a href='mailto:info@blocverse.com'>
            <Email />
          </a>
        </div>
      </div>
      <p className='lg:text-center text-sm lg:text-base text-white font-medium'>
        2024 Blocverse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

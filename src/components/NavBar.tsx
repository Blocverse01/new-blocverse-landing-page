import React, { useState } from "react";
import Image from "next/image";
import logo from "@/components/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-bv-black-1 relative z-20  py-4 px-6 md:px-[101px] flex justify-between items-center font-lato'>
      <Image src={logo} width={123} height={56} alt='Logo' />
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          <span className='block w-6 h-0.5 bg-white mb-1'></span>
          <span className='block w-6 h-0.5 bg-white mb-1'></span>
          <span className='block w-6 h-0.5 bg-white'></span>
        </button>
      </div>
      <ul className='hidden md:flex w-[582px] justify-between text-white self-center font-medium text-[20px]'>
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={router.pathname === link.href ? "text-bv-blue-1 " : ""}
          >
            <Link href={link.href}>
              <span className='relative'>
                {link.label}
                {router.pathname === link.href && (
                  <motion.div
                    layoutId='underline'
                    className='absolute left-0 right-0 -bottom-2 h-[2px] bg-bv-blue-1'
                  />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className='md:hidden w-full bg-bv-black-1 absolute top-16 left-0 right-0 overflow-hidden'
          >
            <ul className='flex flex-col items-center text-white font-medium text-[20px]'>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={
                    router.pathname === link.href
                      ? "text-bv-blue-1 py-2 "
                      : "py-2"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={link.href}>
                    <span className='relative'>
                      {link.label}
                      {router.pathname === link.href && (
                        <motion.div
                          layoutId='underline'
                          className='absolute left-0 right-0 -bottom-2 h-[2px] lg:bg-bv-blue-1'
                        />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

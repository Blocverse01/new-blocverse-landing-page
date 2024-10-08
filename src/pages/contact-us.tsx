import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import earth from "@/components/assets/earth.svg";
import noise2 from "@/components/assets/noise2.svg";

const ContactUs = () => {
  return (
    <div className='bg-bv-black-1 pb-[100px] lg:pb-[200px] pt-[50px] lg:pt-[100px] text-white px-[22px] lg:px-[104px]'>
      <div className='grid lg:grid-cols-2 gap-10'>
        <motion.div
          className='flex flex-col space-y-[40px]'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className='font-clash text-[32px] lg:text-[56px]'>
              Contact Us
            </h1>
            <p className='font-lato mt-2 font-medium text-[20px] lg:text-[24px]'>
              Kindly send a message if you’d like to work with us.
            </p>
          </div>
          <div className='relative hidden lg:block'>
            <Image src={noise2} className='absolute inset-0' alt='Image' />
            <Image src={earth} className='mx-auto' alt='Image' />
          </div>
        </motion.div>
        <motion.div
          className='bg-white text-bv-black-1 font-clash rounded-[20px] p-[42px]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-[24px] lg:text-[40px] font-medium'>
            Send a Message
          </p>
          <div className='mt-10 flex flex-col space-y-[32px] lg:space-y-[72px] font-lato'>
            <motion.input
              placeholder='Your name'
              type='text'
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              placeholder='Your email address'
              type='email'
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.input
              placeholder='Your message'
              type='text'
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.button
              className='bg-bv-blue-1 border text-white border-white rounded-[100px] font-lato text-xl px-8 py-4 max-w-[276px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Send message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

ContactUs.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export default ContactUs;

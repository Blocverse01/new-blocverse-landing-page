import { Rec1, Rec2, Rec3, Rec4 } from "@/components/assets/icons";
import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={stagger}
      className=' bg-bv-black-1 px-[22px]  lg:px-[104px] pt-[50px] lg:pt-[92px] text-white font-clash  '
    >
      <motion.h1
        variants={fadeInUp}
        className=' text-[32px] lg:text-[64px] relative  font-medium leading-[40px] lg:leading-[78.72px]'
      >
        Building Industry Solutions With Blockchain Technology
      </motion.h1>
      <motion.section
        initial='hidden'
        animate='visible'
        variants={stagger}
        className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'
      >
        <motion.div
          variants={fadeInLeft}
          className=' bg-bv-blue-1 overflow-hidden relative rounded-2xl px-[20px] py-[70px] lg:px-[50px] lg:py-[90px] '
        >
          <div className='absolute inset-0'>
            <Rec1 />
          </div>
          <p className=' text-[20px] lg:text-[32px] font-semibold'>
            Our Mission
          </p>
          <p className='font-lato mt-5 text-[16px] lg:text-[24px] leading-[24px] lg:leading-[32px] font-medium'>
            At Blocverse, our mission is to empower individuals and businesses
            through innovative and problem-solving blockchain utility products
            while fostering talent growth and development.
          </p>
          <div className='absolute bottom-0 right-0'>
            <Rec2 />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          className=' text-black bg-white overflow-hidden relative rounded-2xl px-[20px] py-[70px] lg:px-[50px] lg:py-[90px] '
        >
          <div className='absolute inset-0'>
            <Rec3 />
          </div>
          <p className=' text-[20px] lg:text-[32px] font-semibold'>
            Our Vision
          </p>
          <p className='font-lato mt-5 text-[16px] lg:text-[24px] leading-[24px] lg:leading-[32px] font-medium'>
            We envision a world empowered by decentralization and blockchain
            technology, where seamless innovation and widespread blockchain
            adoption drive positive global impact.
          </p>
          <div className='absolute bottom-0 right-0'>
            <Rec4 />
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        variants={fadeInUp}
        whileInView='visible'
        viewport={{ once: true }}
        className=' mt-[220px]  relative bottom-[100px]'
      >
        <p className=' text-[32px] lg:text-[48px] font-medium'>
          Our Core Values
        </p>
        <div className='grid mt-4 grid-cols-1  md:grid-cols-3 gap-6'>
          <div>
            <p className=' text-[20px] lg:text-[28px] font-semibold'>
              Innovation with Purpose
            </p>
            <p className=' mt-2 md:text-[20px]'>
              We challenge the status quo by creating blockchain solutions that
              are not just advanced, but truly useful—simplifying adoption and
              delivering real value to everyday people and businesses.
            </p>
          </div>
          <div>
            <p className=' text-[20px] lg:text-[28px] font-semibold'>
              User-First Approach
            </p>
            <p className=' mt-2 md:text-[20px]'>
              We listen, learn, and design around the needs of our users, making
              blockchain technology seamless, accessible, and impactful in the
              real world.
            </p>
          </div>
          <div>
            <p className=' text-[20px] lg:text-[28px] font-semibold'>
              Talent Growth and Excellence
            </p>
            <p className=' mt-2 md:text-[20px]'>
              We invest in people. By nurturing talent and encouraging
              continuous learning, we build a team capable of driving innovation
              and setting new standards in blockchain technology.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export default About;

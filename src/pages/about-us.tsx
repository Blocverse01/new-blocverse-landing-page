import { Rec1, Rec2, Rec3, Rec4 } from "@/components/assets/icons";
import Layout from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <div className=' bg-bv-black-1 px-[22px]  lg:px-[104px] pt-[50px] lg:pt-[92px] text-white font-clash  '>
      <h1 className=' text-[32px] lg:text-[64px] relative  font-medium leading-[40px] lg:leading-[78.72px]'>
        Building Industry Solutions With Blockchain Technology
      </h1>
      <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className=' bg-bv-blue-1 overflow-hidden relative rounded-2xl px-[20px] py-[70px] lg:px-[50px] lg:py-[90px] '>
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
        </div>
        <div className=' text-black bg-white overflow-hidden relative rounded-2xl px-[20px] py-[70px] lg:px-[50px] lg:py-[90px] '>
          <div className='absolute inset-0'>
            <Rec3 />
          </div>
          <p className=' text-[20px] lg:text-[32px] font-semibold'>
            Our Vision
          </p>
          <p className='font-lato mt-5 text-[16px] lg:text-[24px] leading-[24px] lg:leading-[32px] font-medium'>
            We envision a world empowered by decentralization and blockchain
            technology, where seamless innovation and widespread blockchain
            adoption drive positive global impact. mt-5
          </p>
          <div className='absolute bottom-0 right-0'>
            <Rec4 />
          </div>
        </div>
      </section>
      <section className=' mt-[220px] lg:mt-[120px] relative bottom-[100px]'>
        <p className=' text-[32px] lg:text-[48px] font-medium'>
          Our Core Values
        </p>
        <p className='font-lato mt-5 font-medium text-base leading-[24px] lg:leading-[36px] lg:text-[24px]'>
          At Blocverse, our mission is to empower individuals and businesses
          through innovative and problem-solving blockchain utility products
          while fostering talent growth and development. At Blocverse, our
          mission is to empower individuals and businesses through innovative
          and problem-solving blockchain utility products while fostering talent
          growth and development.At Blocverse, our mission is to empower
          individuals and businesses through innovative and problem-solving
          blockchain utility products while fostering talent growth and
          development.
        </p>
      </section>
    </div>
  );
};
About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export default About;

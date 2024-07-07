import { Block, Finance, Hive, Wallet } from "@/components/assets/icons";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import taas from "@/components/assets/taas.png";
import artizen from "@/components/assets/artizen.png";
import globalChain from "@/components/assets/globachain.png";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Services = () => {
  return (
    <div className='text-white pb-[100px] pt-[50px] lg:pt-[100px]  bg-bv-black-1 font-lato px-[22px] lg:px-[104px]'>
      <motion.div initial='hidden' animate='visible' variants={fadeIn}>
        <p className='font-medium text-sm lg:text-2xl text-bv-blue-1'>
          Choose your universe.
        </p>
        <h1 className='font-clash mt-4 text-[32px] leading-[39.36px] lg:text-[56px] lg:leading-[68.88px]'>
          We Build Scalable Solutions to Meet Your Business Needs
        </h1>
      </motion.div>
      <motion.section
        initial='hidden'
        whileInView='visible'
        variants={stagger}
        className='bg-white text-bv-black-1 mt-10 grid grid-cols-1 lg:grid-cols-3 p-6 lg:p-10 rounded-2xl gap-5'
      >
        <motion.div variants={slideIn} className='flex flex-col space-y-4'>
          <div className='bg-bv-blue-1 rounded-full w-[48px] h-[48px] flex items-center justify-center'>
            <Block />
          </div>
          <p className='font-clash text-[24px] lg:text-[32px]'>
            Digital Assets & Tokenization
          </p>
          <p className=' bg-bv-blue-1 border text-white border-white rounded-[100px] font-lato text-sm lg:text-xl px-8 py-4 w-fit'>
            Enter the multiverse!
          </p>
        </motion.div>
        <motion.div
          variants={slideIn}
          className='flex flex-col w-full font-lato text-white space-y-5 lg:col-span-2'
        >
          <div className='grid max-w-[520px] mx-auto grid-cols-2 gap-x-5'>
            <div className='bg-bv-blue-1 p-3 rounded-lg'>
              <p className=' lg:text-base text-[12px] text-center'>
                Stablecoins (Fiat and RWA Collateralized)
              </p>
            </div>
            <div className='bg-bv-blue-1 p-3 rounded-lg'>
              <p className='text-center lg:text-base text-[12px]'>
                Stablecoins (Cryptocurrency Collateralized)
              </p>
            </div>
          </div>
          <div className='bg-bv-blue-1 p-5 block lg:hidden rounded-lg'>
            <p className='text-center lg:text-base text-[12px]'>
              Venture Capital Tokenization
            </p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-5'>
            <div className='bg-bv-blue-1 p-5 hidden lg:block rounded-lg'>
              <p className='text-center lg:text-base text-[12px]'>
                Venture Capital Tokenization
              </p>
            </div>
            <div className='bg-bv-blue-1 p-5 rounded-lg'>
              <p className='text-center lg:text-base text-[12px]'>
                CBDCs Development
              </p>
            </div>
            <div className='bg-bv-blue-1 p-5 rounded-lg'>
              <p className='text-center lg:text-base text-[12px]'>
                Real Estate Tokenization
              </p>
            </div>
          </div>
          <div className='grid max-w-[520px] mx-auto grid-cols-2 gap-x-5'>
            <div className='bg-bv-blue-1 p-5 rounded-lg'>
              <p className='text-center'>
                Asset-Backed Securities Tokenization
              </p>
            </div>
            <div className='bg-bv-blue-1 p-5 rounded-lg'>
              <p className='text-center'>Art & Collectibles Tokenization</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial='hidden'
        whileInView='visible'
        variants={stagger}
        className='mt-10 text-bv-black-1 grid grid-cols-1 lg:grid-cols-3 gap-10'
      >
        <motion.div
          variants={slideIn}
          className='rounded-2xl flex flex-col space-y-4 bg-white p-5'
        >
          <div className='bg-bv-black-1 rounded-full w-[48px] h-[48px] flex items-center justify-center'>
            <Wallet />
          </div>
          <p className='font-medium leading-[40px] font-clash text-[24px] lg:text-[32px]'>
            Enterprise Blockchain Consultancy
          </p>
          <p className='font-[400px] text-base lg:text-xl'>
            We help you in the process of understanding and adapting blockchain
            technology for your specific business and operational needs.
          </p>
        </motion.div>
        <motion.div
          variants={slideIn}
          className='rounded-2xl flex flex-col space-y-4 bg-bv-blue-1 p-5'
        >
          <div className='bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center'>
            <Hive />
          </div>
          <p className='font-medium leading-[40px] font-clash text-[24px] lg:text-[32px]'>
            Blockchain & Fintech
          </p>
          <ul className='text-base lg:text-[18px] list-disc list-inside'>
            <li>Cryptocurrency on and off ramps rails</li>
            <li>Cross-border settlements</li>
            <li>Digital asset Custody</li>
            <li>Wallet-as-a-service</li>
          </ul>
        </motion.div>
        <motion.div
          variants={slideIn}
          className='rounded-2xl flex flex-col space-y-4 bg-white p-5'
        >
          <div className='bg-bv-blue-1 rounded-full w-[48px] h-[48px] flex items-center justify-center'>
            <Finance />
          </div>
          <p className='font-medium leading-[40px] font-clash text-[24px] lg:text-[32px]'>
            DeFi Solutions
          </p>
          <ul className='text-base lg:text-[18px] list-inside list-disc'>
            <li>Decentralized Exchange NFT marketplace</li>
            <li>Decentralized Staking and Lending protocols</li>
            <li>Yield Farming protocols</li>
            <li>Decentralized Synthetic trading platforms</li>
          </ul>
        </motion.div>
      </motion.section>
      <motion.section
        initial='hidden'
        whileInView='visible'
        variants={stagger}
        className='mt-[120px]'
      >
        <h1 className='font-clash mt-4 text-[32px] lg:text-[48px]'>
          Featured Projects
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-[56px]'>
          <motion.div
            variants={slideIn}
            className='flex flex-col space-y-[32px]'
          >
            <p className=' text-2xl lg:text-[36px] font-semibold'>TAAS</p>
            <Image src={taas} alt='Image' />
            <div className='flex justify-between text-[12px] lg:text-base w-[300px] lg:w-[367px]'>
              <div className='border rounded-full px-5 py-3'>Tokenization</div>
              <div className='border rounded-full px-5 py-3'>Blockchain</div>
              <div className='border rounded-full px-5 py-3'>Assets</div>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn}
            className='flex flex-col space-y-[32px]'
          >
            <p className=' text-2xl lg:text-[36px] font-semibold'>Artizen</p>
            <Image src={artizen} alt='Image' />
            <div className='flex justify-between text-[12px] lg:text-base w-[300px] lg:w-[220px]'>
              <div className='border rounded-full px-5 py-3'>Blockchain</div>
              <div className='border rounded-full px-8 py-3'>NFT</div>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn}
            className='flex flex-col space-y-[32px]'
          >
            <p className=' text-2xl lg:text-[36px] font-semibold'>Globachain</p>
            <Image src={globalChain} alt='Image' />
            <div className='flex justify-between text-[12px] lg:text-base w-[300px] lg:w-[220px]'>
              <div className='border rounded-full px-5 py-3'>Blockchain</div>
              <div className='border rounded-full px-8 py-3'>NFT</div>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn}
            className='flex flex-col space-y-[32px]'
          >
            <p className=' text-2xl lg:text-[36px] font-semibold'>Tixhive</p>
            <Image src={artizen} alt='Image' />
            <div className='flex justify-between text-[12px] lg:text-base w-[300px] lg:w-[337px]'>
              <div className='border rounded-full px-5 py-3 '>NFTs</div>
              <div className='border rounded-full px-5 py-3 '>Blockchain</div>
              <div className='border rounded-full px-5 py-3 '>Assets</div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

Services.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Services;

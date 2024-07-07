import Image from "next/image";
import Layout from "@/components/Layout";
import world from "@/components/assets/world.png";
import heroNoise from "@/components/assets/heroNoise.svg";
import seamlessImg from "@/components/assets/seamlessImg.png";
import innovationImg from "@/components/assets/InnovationImg.png";
import journeyImg from "@/components/assets/journeyImg.png";
import mvpImg from "@/components/assets/mvpImg.png";
import exploreImg from "@/components/assets/exploreImg.png";
import metamap from "@/components/assets/metamap.png";
import web3 from "@/components/assets/web3.png";
import magic from "@/components/assets/magic.png";
import bitpower from "@/components/assets/bitpower.png";
import safeheron from "@/components/assets/safeheron.png";
import alchemy from "@/components/assets/alchemy.png";
import consensys from "@/components/assets/consensys.png";
import base from "@/components/assets/base.png";
import ramp from "@/components/assets/ramp.png";
import abstract from "@/components/assets/abstract.png";

const Home = () => {
  return (
    <div className='w-full '>
      <section className='bg-bv-black-1 overflow-x-hidden   h-[600px] lg:h-[880px] relative overflow-y-hidden text-white'>
        <Image
          src={heroNoise}
          className='z-10 scale-[2.5] lg:scale-100 absolute inset-0'
          alt='Image'
        />

        <div className='max-w-[641px] flex mt-[92px] z-10 relative flex-col gap-y-6 mx-auto'>
          <h1 className=' text-[40px] lg:text-[96px] uppercase text-center leading-[49.2px] lg:leading-[118.08px] font-semibold font-clash'>
            The Blockchain Multiverse
          </h1>
          <p className='text-2xl font-medium font-lato leading-[32px] w-[342px] lg:w-[523px] text-center mx-auto '>
            Helping businesses drive growth by integrating Blockchain technology
            and providing support.{" "}
          </p>
          <button className=' bg-bv-blue-1 border border-white rounded-[100px] font-lato text-xl px-8 py-4 w-fit mx-auto  '>
            Enter the multiverse!
          </button>
        </div>
        <div className=' mt-20'>
          <Image src={world} alt='Image' />
        </div>
      </section>
      <section className=' px-[22px] mt-[32px] lg:mt-[74px] bg-white text-white lg:px-[104px]'>
        <h1 className=' font-clash text-[24px] lg:text-[48px] font-medium text-center text-bv-black-1 '>
          Why Build With Blocverse?
        </h1>
        <div className=' mt-[40px] flex flex-col space-y-10'>
          <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='bg-bv-black-1 overflow-hidden  h-[200px] lg:h-[300px] relative flex items-center justify-center rounded-2xl col-span-1 lg:col-span-2'>
              <p className='font-clash z-10 text-[28px] max-w-[700px] lg:text-[56px] text-center leading-[34.44px] lg:leading-[68.88px]'>
                Seamlessly integrate{" "}
                <span className=' text-bv-blue-2 '>blockchain.</span>
              </p>
              <Image
                className='absolute bottom-0'
                src={seamlessImg}
                alt='Image'
              />
            </div>
            <div className='bg-bv-black-1 overflow-hidden relative rounded-2xl px-[29px] pt-[40px]  h-[200px] lg:h-[300px] '>
              <p className='font-clash text-[24px] leading-[29.52px] lg:text-[32px] lg:leading-[39.36px]'>
                Innovation to stay ahead of the competition.
              </p>
              <Image
                className='absolute  -right-28 -bottom-28  lg:-right-8 lg:-bottom-8'
                src={innovationImg}
                alt='Image'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='bg-bv-black-1 overflow-hidden relative rounded-2xl px-[29px] pt-[40px]  h-[200px] lg:h-[300px] '>
              <p className='font-clash z-10 text-[24px] leading-[29.52px] lg:text-[32px] lg:leading-[39.36px]'>
                Dedicated partners on your{" "}
                <span className=' text-bv-blue-2 '>journey</span> to success.
              </p>
              <Image
                className='absolute  -right-28 -bottom-28  lg:-right-8 lg:-bottom-8'
                src={journeyImg}
                alt='Image'
              />
            </div>
            <div className='bg-bv-black-1 overflow-hidden relative rounded-2xl px-[29px] pt-[40px]  h-[200px] lg:h-[300px] '>
              <p className='font-clash text-[24px] leading-[29.52px] lg:text-[32px] lg:leading-[39.36px]'>
                Explore the endless possibilities of your business or idea.
              </p>
              <Image
                className='absolute  -right-8 -bottom-8  lg:right-0 lg:bottom-0'
                src={exploreImg}
                alt='Image'
              />
            </div>
            <div className='bg-bv-black-1 overflow-hidden relative rounded-2xl px-[29px] pt-[40px]  h-[200px] lg:h-[300px] '>
              <p className='font-clash text-[24px] leading-[29.52px] lg:text-[32px] lg:leading-[39.36px]'>
                Build your mvp in 6 weeks.
              </p>
              <Image
                className='absolute  -right-16 -bottom-24  lg:right-0 lg:bottom-0 lg:relative mx-auto  '
                src={mvpImg}
                alt='Image'
                width={186}
                height={186}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='lg:px-[104px] px-[22px]  pb-[77px] bg-white mt-[74px]'>
        <h1 className=' font-clash text-[24px] lg:text-[48px] font-medium text-center text-bv-black-1 '>
          Strategic Partners
        </h1>
        <div className='mt-[40px] flex flex-col space-y-[24px] lg:space-y-[64px]'>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-6'>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={ramp} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={metamap} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={web3} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={magic} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={bitpower} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex lg:hidden items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={safeheron} alt='Logo' />
            </div>
          </div>
          <div className='grid grid-cols-3 lg:grid-cols-4 lg:w-[900px]  mx-auto gap-6'>
            <div className='px-[17px] py-[10px] hidden lg:flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={safeheron} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={alchemy} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={consensys} alt='Logo' />
            </div>
            <div className='px-[17px] py-[10px]  flex items-center justify-center bg-bv-extras-blue  rounded-2xl'>
              <Image src={base} alt='Logo' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-bv-black-1 px-[22px] py-[74px] flex flex-col space-y-10 text-white lg:px-[104px] '>
        <h1 className=' font-clash text-[32px] lg:text-[48px] font-medium  text-bv-blue-1 '>
          Our Process
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[545px] gap-10'>
            <div className='font-clash flex flex-col gap-2'>
              <p className='text-bv-blue-1 font-semibold text-xl'>O1</p>
              <p className='text-[28px] font-medium'>Concept Validation</p>
              <p className='font-lato text-base'>
                We will walk you through the process of understanding more
                potential in your business and provide more clarity.
              </p>
            </div>
            <div className='font-clash flex flex-col gap-2'>
              <p className='text-bv-blue-1 font-semibold text-xl'>O2</p>
              <p className='text-[28px] font-medium'>Product Design</p>
              <p className='font-lato text-base'>
                We use interactive, demonstrable prototypes to inspire your
                audience and inform software development.
              </p>
            </div>
            <div className='font-clash flex flex-col gap-2'>
              <p className='text-bv-blue-1 font-semibold text-xl'>O3</p>
              <p className='text-[28px] font-medium'>Implementation</p>
              <p className='font-lato text-base'>
                We help you develop your product, conduct internal product
                testing & user testing, and get you market ready.
              </p>
            </div>
            <div className='font-clash flex flex-col gap-2'>
              <p className='text-bv-blue-1 font-semibold text-xl'>O4</p>
              <p className='text-[28px] font-medium'>Support</p>
              <p className='font-lato text-base'>
                We will support you on your journey to success.
              </p>
            </div>
          </div>
          <Image src={abstract} className='lg:-mt-16' alt='Image' />
        </div>
      </section>
    </div>
  );
};
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;

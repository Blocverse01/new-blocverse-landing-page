import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import earth from "@/components/assets/earth.svg";
import noise2 from "@/components/assets/noise2.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.update(loadingToast, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to send message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='bg-bv-black-1 pb-[100px] lg:pb-[200px] pt-[50px] lg:pt-[100px] text-white px-[22px] lg:px-[104px]'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
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
              Kindly send a message if you&apos;d like to work with us.
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
          <form
            onSubmit={handleSubmit}
            className='mt-10 flex flex-col space-y-[32px] lg:space-y-[72px] font-lato'
          >
            <motion.input
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
              type='text'
              required
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email address'
              type='email'
              required
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.input
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              type='text'
              required
              className='text-[16px] lg:text-[20px] w-full border-b outline-0 py-[20px] border-bv-black-1'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.button
              type='submit'
              className='bg-bv-blue-1 border text-white border-white rounded-[100px] font-lato text-xl px-8 py-4 max-w-[276px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Send message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

ContactUs.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export default ContactUs;

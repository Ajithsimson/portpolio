import React from 'react';
import { HERO_CONTENT } from "../constants";
import Profilepic from "../assets/aji1.jpg";
import { motion } from "framer-motion";
import Typewriter from 'react-typewriter'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='ml-4 border-b border-neutral-900 pb-5 lg:mb-20 lg:p-20 lg:pt-0'>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-4 lg:pt-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className='pb-4 text-3xl lg:text-5xl font-bold text-center lg:text-left'
            >
              Ajith Kumar B
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className='bg-gradient-to-tr from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl font-semibold tracking-tight text-transparent'
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='my-2 text-base sm:text-lg md:text-xl lg:text-lg max-w-xl py-1 mb-10'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex justify-center lg:justify-end ">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='h-100 w-80 lg:h-[480px] lg:w-[400px] rounded-2xl object-cover '
            src={Profilepic}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

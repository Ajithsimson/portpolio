import React from 'react';
import AboutImg from '../assets/aji3.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl md:text-5xl'
      >
        About 
        <span className='text-neutral-500'> Me</span>
      </motion.h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-start lg:pl-28  "
        >
          <img 
            className='rounded-2xl w-[350px] max-w-xs sm:max-w-md md:max-w-lg  h-[400px] m-9  ' 
            src={AboutImg} 
            alt="About" 
          />
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center px-4 lg:px-0  "
        >
          <p className='my-2 text-base sm:text-lg md:text-xl lg:text-lg max-w-xl py-1 mb-10'>
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

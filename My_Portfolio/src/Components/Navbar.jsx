import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const linkedInClick = () => {
  window.open('https://www.linkedin.com/in/ajith-kumar-b-8558b9a6/', '_blank', 'noopener,noreferrer');
};

const instaClick = () => {
  window.open('https://www.instagram.com/ajith.simson/?hl=en', '_blank', 'noopener,noreferrer');
};

const gitHubClick = () => {
  window.open('https://github.com/Ajithsimson', '_blank', 'noopener,noreferrer');
};

const xClick = () => {
  window.open('https://x.com/ajithsimson11?t=JwaW9MxsUDecHNbpaZGIYQ&s=09', '_blank', 'noopener,noreferrer');
};

const cvClick = () => {
  window.open('https://drive.google.com/file/d/13pmHAufrpfvSalXZ5zIjmHHz9_D0VEun/view?usp=sharing', '_blank', 'noopener,noreferrer');
};

const Navbar = () => {
  return (
    <nav className='mb-6 md:mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8'>
      <div className='flex items-center mb-4 md:mb-0'>
        {/* <img className='mx-2 w-12 h-12 rounded ' src={logo} alt="" /> */}
        <motion.h2 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='text-gray-350 text-2xl md:text-3xl font-semibold'>
          A <span>K</span>
        </motion.h2>
      </div>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='flex flex-wrap items-center justify-center gap-4 text-xl text-white'>
        <div 
          onClick={cvClick} 
          className='flex items-center text-xs bg-blue-700 rounded p-2 font-sans cursor-pointer'>
          Download CV <FaDownload className='pl-1 text-lg'/>
        </div>
        <FaLinkedin onClick={linkedInClick} className='cursor-pointer text-lg md:text-2xl' />
        <FaGithub onClick={gitHubClick} className='cursor-pointer text-lg md:text-2xl' />
        <FaInstagram onClick={instaClick} className='cursor-pointer text-lg md:text-2xl' />
        <FaSquareXTwitter onClick={xClick} className='cursor-pointer text-lg md:text-2xl' />
      </motion.div>
    </nav>
  );
}

export default Navbar;

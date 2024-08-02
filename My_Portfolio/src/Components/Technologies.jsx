import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { animate, delay, easeIn, easeInOut, motion } from "framer-motion"

const iconVariants = (duration)=>({
    initial: {y: "0%"},
    animate:{
        y:["0%", "10%", "0%"],
        transition:{
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
        }
    }
})











const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1}} 
      className='text-center my-20 text-4xl '>Technologies </motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration:1.2}} 
      
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <IoLogoHtml5 className='text-7xl text-red-600 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <IoLogoCss3 className='text-7xl text-blue-600 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <TbBrandTailwind className='text-7xl text-blue-400 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <FaBootstrap className='text-7xl text-violet-700 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <IoLogoJavascript className='text-7xl text-yellow-400 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <RiReactjsLine className='text-7xl text-cyan-400 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <FaNode className='text-7xl text-green-500 '/>
        </motion.div>
        < motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <SiExpress className='text-7xl text-blue-600 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <TbBrandMongodb className='text-7xl text-green-500 '/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
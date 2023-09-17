// import React from 'react'
import {ArrowDownTrayIcon,EnvelopeIcon } from "@heroicons/react/24/solid"
import git from "@/assets/github2.png"
import resume from "@/assets/Aamil's Resume.pdf"
import { pages } from '@/Shared/types'
import { motion } from 'framer-motion'
// import mypic from "@/assets/1ss.jpeg"

type Props = {
  setSelectedPage: (value: pages)=> void
}

const Hero = ({setSelectedPage}:Props ) => {
  return (
    <motion.div
      onViewportEnter={()=>setSelectedPage(pages.Home)}
    id='home' className=' py-10  h-full w-full flex flex-col items-center justify-center'>
      {/* <img style={{objectPosition:" 0% 40%"}} className='h-32 w-32 rounded-full object-cover ' src={mypic} alt="" /> */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:1}}
        variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1,x:0}
        }}
        className='flex flex-col justify-center items-center gap-2'>
          <p className='animate-bounce text-white font-bold max-sm:text-2xl text-5xl'>Hi there</p>
          <p className='z-20 text-white font-bold max-sm:text-2xl text-5xl'>My name is</p>
          <p className='z-20 text-white font-bold text-center text-5xl'>Mohd Aamil Shafi</p>
          <p className='z-20 text-white font-bold max-sm:text-2xl text-5xl'>I'm a Software-Engineer</p>
          <p className='z-20 text-white font-bold  text-xl max-sm:max-w-xs max-sm:text-sm text-center'>With Experience in (ReactJS, Redux/toolkit, NodeJS, Express,MongoDB,Firebase)</p>
          <div className='z-40 flex gap-6'>

          <a download href={resume} target='_blank'>
          <p style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='flex items-center z-20 gap-2 px-4 bg-white rounded-lg '>Resume<ArrowDownTrayIcon className='w-4 h-4'/></p>
          </a>
            
            <a href="https://github.com/Aamil13" target='_blank'>
            <p className='flex items-center z-20 gap-2   rounded-full '><img className='w-6 h-6 rounded-full' src={git} alt="" /></p>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aamil.shafi13@gmail.com"  target='_blank'>
            <p className='flex items-center z-20 gap-2   rounded-full '><EnvelopeIcon className='w-6 h-6 rounded-full bg-white p-1'/></p>

            </a>
          </div>
        </motion.div>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:1.2}}
        variants={{
          hidden: {opacity:0, x:-90},
          visible: {opacity:1,x:0}
        }}
        className='z-20 pt-6 max-sm:w-[200px] text-center text-white font-bold  max-sm:text-sm'>Now that you have arived here feel free to look around.</motion.p>

    </motion.div>
  )
}

export default Hero
import frontendcertificate from "@/assets/frontendcertificate.png"
import backendcertificate from "@/assets/backendcertificate.png"
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline"
import Skills from "@/Components/Skills/Skills"
import { pages } from "@/Shared/types"
import { motion } from "framer-motion"

type Props = {
 
    setSelectedPage: (value: pages)=> void
 
}

const About = ({setSelectedPage}: Props) => {
  return (
    <motion.div
    onViewportEnter={()=>setSelectedPage(pages.About)}
     id="about" className='h-full max-sm:h-[1300px] w-full py-6 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative'>
      
      <div className=' rotate absolute w-[50px] h-[50px] rounded-full bottom-10 left-10  shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      <div className=' rotate absolute w-[100px] h-[100px] rounded-full top-8 -left-11  shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      <div className=' rotate absolute w-[200px] h-[200px] rounded-full top-12 -right-20  shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
     
      <div className='w-full h-full flex max-sm:flex-col max-sm:items-center   gap-10'>
        <div className='w-1/2 max-sm:w-11/12 flex flex-col '>
          <div className='flex flex-col justify-start mt-20 items-center text-center gap-6
                            text-white '>
            <p className='z-40 font-bold text-2xl underline underline-offset-4'>About</p>
            <p className='z-40 max-w-md font-thin'>I'm a passionate developer who's currently going through a journey of
              exploring new technologies as well implementing the one's I'm already
              familiar making my skills more robust, fortified and industry-ready.
            </p>
            
            <p className='z-40 max-w-md font-thin'>I completed my Bachelors in Engineering in Computer Science from Vision Intitude of Technology(VIT) <br /><span>(Currently Awaiting result)</span></p>
            <p className=' z-40 max-w-md font-thin'>In my free time I tend to read novels and play video-games.</p>
          </div>

          <div className='flex flex-col justify-start mt-10 items-center text-center gap-6
                            text-white '>
            <p className='font-bold text-2xl underline underline-offset-4 z-40'>Certificates</p>
            <div className="flex justify-center items-center gap-4">
              <div className="relative overflow-hidden">
                <img className="w-[197px]" src={frontendcertificate} alt="" />
                <div className="absolute bg-black/40 w-full h-full top-10 opacity-0 hover:opacity-100  transition-all duration-300 hover:top-0
                                flex items-center justify-center">
                  <button onClick={()=>window.open('https://www.freecodecamp.org/certification/fcc88fba7b7-32b5-475a-b18a-cc5d9d2c74ff/front-end-development-libraries', '_blank')}><ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" /></button>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img className="w-[200px]" src={backendcertificate} alt="" />
                <div className="absolute bg-black/40 w-full h-full top-10 opacity-0 hover:opacity-100  transition-all duration-300 hover:top-0
                                flex items-center justify-center">
                  <button onClick={()=>window.open('https://www.freecodecamp.org/certification/fcc88fba7b7-32b5-475a-b18a-cc5d9d2c74ff/back-end-development-and-apis', '_blank')}><ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='w-1/2 max-sm:w-11/12'>
          <Skills/>
        </div>
      </div>
    </motion.div>
  )
}

export default About
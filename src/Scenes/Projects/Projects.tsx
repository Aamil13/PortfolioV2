import ProjectCard from '@/Components/Projects/ProjectCard'
import { pages } from '@/Shared/types'
import {useState} from 'react'
import { motion } from "framer-motion"
type Props = {
  setSelectedPage: (value: pages)=> void
}



const Projects = ({setSelectedPage}:Props) => {
  const [filterstack, setFilterStack] = useState<string>("Featured")
  return (
    <motion.div
    onViewportEnter={()=>setSelectedPage(pages.Project)}
    id='project' className='min-h-1/2 w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative'>

                <div className='flex flex-col items-center w-full gap-3'>
                    <p className='font-bold text-2xl underline underline-offset-4 text-white'>Projects</p>
                    <div className='flex gap-10 flex-wrap justify-center'>
                    <div onClick={()=>setFilterStack("Featured")} style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='px-4 bg-white rounded-lg font-semibold max-sm:px-2 '>Featured</div>
                    <div onClick={()=>setFilterStack("Fullstack")} style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='px-4 bg-white rounded-lg font-semibold max-sm:px-2 '>FullStack</div>
                    <div onClick={()=>setFilterStack("Frontend")} style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='px-4 bg-white rounded-lg font-semibold max-sm:px-2 '>Front-End</div>
                    <div onClick={()=>setFilterStack("All")} style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='px-4 bg-white rounded-lg font-semibold max-sm:px-2 '>ALL</div>
                    </div>

                    <div>
                        <ProjectCard filterstack={filterstack} />
                    </div>
                </div>

        </motion.div>
  )
}

export default Projects
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import git from "@/assets/github2.png"
import netflix from "@/assets/Projects/netflix.webp"
import anotes from "@/assets/Projects/anotes.webp"
import merngoals from "@/assets/Projects/merngoals.webp"
import Dashbaord from "@/assets/Projects/Dashboard.webp"
import firechat from "@/assets/Projects/firechat.webp"
import shopihy from "@/assets/Projects/shopihy.webp"
import blog from "@/assets/Projects/blog.webp"
import restlogo from "@/assets/restlogo.png" 
import LandingPage from "@/assets/Projects/saiyangym.webp" 
import booking from "@/assets/Projects/booking.webp" 
import codigo from "@/assets/Projects/codigo.webp" 
import aesop from "@/assets/Projects/aesop.webp" 
import recipe from "@/assets/Projects/dinewithus.webp" 
import { motion } from "framer-motion"
import {useState} from 'react'

type prop ={
    img: string,
    title: string,
    description: string,
    link:string,
    git:string,
    stack: Array<string>,
    type: string
}


const data:Array< prop> = [
  {img:booking,
    title: "Booking-APP",
    description: "Hotel reservation web-application",
    link: "https://nextbookingappmern.vercel.app/",
    git:"hhttps://github.com/Aamil13/Booking_app_Frontend",
    stack:["Typescript","JavaScript","NodeJS","Express","Mongo","ReactJS","NextJS","Redux/toolkit","tailwindCSS"],
    type:'All Fullstack Featured'
  },
 
  {img:LandingPage,
    title: "SAIYAN GYM",
    description: "Saiyan Gym join the intergalactic aliens in defending Earth from Freeza. ",
    link: "https://saiyangym.netlify.app/",
    git:"https://github.com/Aamil13/Landing",
    stack:["TypeScript","ReactJS","Redux/toolkit","Vite","TailwindCSS"],
    type:'All  Featured Frontend'
  },
  {img:blog,
    title: "Blog",
    description: "Blog with Authentication, Pagination and Cloudinary for image Uploading.",
    link: "https://wordsinc.netlify.app/",
    git:"https://github.com/Aamil13/Blog-FrontendV1",
    stack:["JavaScript","NodeJS","Express","Mongo","ReactJS","Redux/toolkit","MaterialUI"],
    type:'All Fullstack Featured'
  },
  {img:recipe,
    title: "Recipe App",
    description: "Recipe sharing website with image upload.",
    link: "https://steady-phoenix-feaa2b.netlify.app/",
    git:"https://github.com/Aamil13/Fleska-Frontend",
    stack:["Typescript","NodeJS","Express","Mongo","ReactJS","Redux/toolkit","tailwindCSS"],
    type:'All Fullstack Featured'
  },
  {img:codigo,
    title: "Service Landing Page",
    description: "Landing page for service providers.",
    link: "https://preeminent-jalebi-838daa.netlify.app/",
    git:"https://github.com/Aamil13/Codigo",
    stack:["JavaScript","ReactJS","tailwindCSS","DaisyUI"],
    type:'All  Featured Frontend'
  },

  {img:aesop,
    title: "Product Landing page",
    description: "A Landing page for products with complex carousels.",
    link: "https://ae-land.vercel.app/",
    git:"https://github.com/Aamil13/AeLand",
    stack:["TypeScript","ReactJS","tailwindCSS","DaisyUI"],
    type:'All  Featured Frontend'
  },
 
   
    {img:shopihy,
      title: "E-commerce",
      description: "E-commerce website with pagination, shopping and filtration",
      link: "https://shopihy.netlify.app/",
      git:"https://github.com/Aamil13/Shopihy2",
      stack:["JavaScript","NodeJS","Express","ReactJS","Redux/toolkit","Bootstrap"],
      type:'All Fullstack '
    },

    {img:firechat,
      title: "Chat-App",
      description: "Realtime-Chat application with Responsive UI ",
      link: "https://firechat122.netlify.app/",
      git: "https://github.com/Aamil13/Chat-app-fb",
      stack:["JavaScript","ReactJS","Bootstrap","Firebase"],
      type:'All Frontend '
    },
    {img:restlogo,
      title: "REST API",
      description: "REST API, developed using NodeJS, ExpressJs and JavaScript. ",
      link: "https://documenter.getpostman.com/view/24015041/2s93XsZSBD",
      git: "https://github.com/Aamil13/fakestore_api",
      stack:["JavaScript","NodeJS","Express"],
      type:'All Backend'
    },
    {img:netflix,
      title: "Netflix-Clone",
      description: "Clone of Netflix with sign-up and Log-In functionality using Firebase Auth Have used TMDB api to fetch and populate the genres.",
      link: "https://netflixclone13.netlify.app/",
      git: "https://github.com/Aamil13/netflixclonef/tree/master",
      stack:["JavaScript","ReactJS","Bootstrap","Firebase"],
      type:'All Frontend'
    },
   
      {img:Dashbaord,
      title: "Dashboard",
      description: "A Beautifull and Responsive Dashboard with Chart from ApexCharts and Animation using Framer-Motion and Lastly Table by MUI.",
      link: "https://dapper-chimera-d38628.netlify.app/",
      git:"https://github.com/Aamil13/GlassDashboard",
        stack:["JavaScript","ReactJS","SCSS","FramerMotion"],
        type:'All Frontend Featured'
    },
    {img:merngoals,
      title: "Full-Stack Goal App",
      description: "Mern Stack Goals App with user Registration and Authorization with JWT",
      link: "https://concerned-life-jacket-fox.cyclic.app/",
      git:"https://github.com/Aamil13/Mern-GoalApp",
        stack:["JavaScript","Mongo","Express","ReactJS","NodeJS","Redux/toolkit","Bootstrap"],
        type:'All Fullstack all',
    },
     
      
      {img:anotes,
          title: "Advance Notes App",
          description: "Advanced Notes app with sorting , searching, priority function.",
          link:"https://subtle-rolypoly-d92d8b.netlify.app/",
          git: "https://github.com/Aamil13/Anotes",
          stack:["JavaScript","ReactJS","Bootstrap"],
          type:'All Frontend'
        },
      
  ]

  type props ={
    filterstack: string,
    
  }

const ProjectCard = ({filterstack}:props) => {

        const [discriptiontrue, setDiscriptiontTrue] = useState<{state:boolean,index:number}>({state:false,index:0})
        
  return (
    <motion.div
   
    className="flex flex-wrap justify-center gap-10 my-5">
        {data.filter((stack)=>stack.type.includes(filterstack)).map((item,key)=>(
            <motion.div key={key} className='glasss relative z-30  overflow-hidden hover:scale-105 transition-all duration-150 ease-in hover:shadow-xl w-96 h-80 max-sm:w-11/12 max-sm:h-96 flex flex-col items-center justify-between p-2 '>
            <img className="absolute -z-10 " src={item.img} alt="" />
            
            <div className="flex justify-between items-center w-full p-4">
            {/* <p className="font-bold text-purple-900 text-start text-2xl">{item.title}</p> */}
            <div className="flex items-center gap-3">
              <a href={item.git} target="_blank">
              <img className="w-6 h-6 rounded-full animate-pulse cursor-pointer" src={git} alt="" />

              </a>
            <a href={item.link} target="_blank">
            <ArrowTopRightOnSquareIcon className="w-6 h-6 animate-pulse bg-white rounded-full p-1 cursor-pointer"/>

            </a>
            <span onClick={()=>setDiscriptiontTrue({state:true,index:key})} className="cursor-pointer bg-white w-6 h-6 text-center font-bold rounded-full">?</span>
            </div>
            </div>
            
            <div className="flex flex-wrap gap-3 text-white px-4">
                {item.stack.map((item,key)=>(
                    <span key={key} className="bg-purple-800 p-1 rounded-lg">{item}</span>
                ))}
            </div>
            
            {
                discriptiontrue.state && discriptiontrue.index == key &&  <div className="w-full h-3/4 bottom-0 rounded-lg absolute bg-white
                             
                font-medium text-gray-600 text-xl text-center p-4">
                    <p onClick={()=>setDiscriptiontTrue({state:false,index:key})} className="cursor-pointer absolute top-0 right-2">x</p>
                {item.description}
                </div>
            }
           
          
        </motion.div>
        ))}
        
    </motion.div>
  )
}

export default ProjectCard
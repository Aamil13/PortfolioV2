import bootstrap from "@/assets/bt.png"
import html from "@/assets/htlogo.png"
import css from "@/assets/csslogo.png"
import reactjs from "@/assets/rlogo.png"
import redux from "@/assets/redux.png"
import scss from "@/assets/sass.png"
import mui from "@/assets/mui.png"
import vite from "@/assets/vite.png"
import framermotion from "@/assets/framerm.png"
import firebase from "@/assets/firebase.png"
import nodejs from "@/assets/node.png"
import express from "@/assets/express.png"
import restapi from "@/assets/restlogo.png"
import postmant from "@/assets/postman.png"
import mongodb from "@/assets/mongo.png"
import tailwindcss from "@/assets/tailwind.png"
import github from "@/assets/github2.png"
import javascript from "@/assets/js.png"
import typescript from "@/assets/typescript.png"
import { motion } from "framer-motion"

const technologies: Array<{logo:string,name:string}> = [
    {logo: html,name:"HTML"},
    {logo: css,name:"CSS"},
    {logo: bootstrap,name: "Bootstrap"},
    {logo: tailwindcss,name: "TailwindCSS"},
   
    {logo: javascript,name: "JavaScript"},
    {logo: typescript,name: "TypeScript"},
    {logo: vite,name:"VITE"},
    {logo: reactjs,name:"ReactJS"},
    {logo: redux,name:"REDUX/Toolkit"},
    {logo: scss,name:"SCSS"},
    {logo: mui,name:"MaterialUI"},
    {logo: framermotion,name:"FramerMotion"},
    {logo: firebase,name:"Firebase"},
    {logo: nodejs,name:"NodeJS"},
    {logo: express,name:"Express"},
    {logo: mongodb,name:"MongoDB"},
    {logo: postmant,name:"Postman"},
    {logo: github,name: "Github"},
    {logo: restapi,name:"REST API"},
    
]
const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };



const Skills = () => {
  return (
    <div className=" h-3/4 flex flex-col  items-center">
    <p className='z-40 mt-20 font-bold text-2xl underline underline-offset-4 text-white text-center'>Technologies I've Worked with</p>

    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    variants={container}
    className="mt-16 gap-5 flex justify-center items-center  max-w-xs flex-wrap ">
        {
            technologies.map((item)=>(
                <motion.div
                variants={childVariant}
                className=" group flex relative p-1"
                >
                    <img className="w-14 h-14 max-sm:w-10 max-sm:h-10 max-sm:p-1 rounded-full bg-white p-2 group-hover:shadow-xl shadow-white " src={item.logo} alt="" />
                    <p className=" absolute -top-6 ml-[50%] translate-x-[-50%] left-0 transition-all duration-500 opacity-0 group-hover:opacity-100 
                        font-medium text-white bg-black px-2 rounded-xl
                    ">{item.name}</p>
                </motion.div>
               
                
            ))
        }
    </motion.div>

    </div>
  )
}

export default Skills
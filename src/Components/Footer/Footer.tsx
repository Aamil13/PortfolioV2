
import {AtSymbolIcon} from  "@heroicons/react/24/solid"
import git from "@/assets/github2.png"
import linkin from "@/assets/linkedin-logo.png"




const Footer = () => {
  return (
    <div  className='w-full h-20  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div style={{background:"rgba(255, 255, 255,  0.11)"}} className='h-full flex flex-col'>
        <div  className='w-full flex justify-center gap-10 p-4 '>
          <a href="https://github.com/Aamil13" target='_blank'>
          <img className='h-6 w-6 rounded-full' src={git} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mohd-aamil-shafi-113898283/" target='_blank'>
          <img className='h-6 w-6 rounded-full ' src={linkin} alt="" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aamil.shafi13@gmail.com"  target='_blank'>
          <AtSymbolIcon className='h-6 w-6 bg-white rounded-full'/>

          </a>
            </div>
            <p className='mx-auto text-white '>&copy; Mohd Aamil Shafi</p>
        </div>
        
    </div>
  )
}

export default Footer
import './App.css'
import { pages } from '@/Shared/types'
import Nav from '@/Components/Nav/Nav'
import { useState } from 'react'
import Hero from '@/Scenes/Hero/Hero'
import About from './Scenes/About/About'
import Projects from './Scenes/Projects/Projects'
import Contact from './Scenes/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
 const [selectedPage, setSelectedPage ] = useState<pages>(pages.Home)

  return (
    <>
    <div className='h-screen bg-gray-50  relative'>
      <div className='overflow-hidden h-full w-full absolute backdrop-blur-lg '>
      <div className=' h-full w-full absolute  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      <div className=' rotate absolute w-[200px] h-[200px] rounded-full -bottom-0 -left-28  shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      <div className=' rotate absolute w-[200px] h-[200px] rounded-full top-0 -right-20  shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      </div>
      
    <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
    
    <Hero setSelectedPage={setSelectedPage} />
    <About setSelectedPage={setSelectedPage}/>
    <Projects setSelectedPage={setSelectedPage}/>
    <Contact setSelectedPage={setSelectedPage}/>
    <Footer/>
    </div>
      
        
    </>
  )
}

export default App

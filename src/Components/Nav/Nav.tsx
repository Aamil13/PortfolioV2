import { pages } from '@/Shared/types'
import  { useState } from 'react'
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Link from '../Link';
import useMediaQuery from '@/Hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';



type Props = {
    selectedPage: pages;
    setSelectedPage: (value:pages) => void;
}

const Nav = ({selectedPage,setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:750px)")
  const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false)
  
  
  return (
    <nav className='z-50'>
        <div className='z-50 fixed w-full flex justify-between px-10 py-2 backdrop-blur-3xl  shadow-lg items-center'>
            <div className='text-white font-bold'>Aamil's Port</div>

            {/* //links Starrt */}
            {
              isAboveMediumScreens ?
                <div className='flex gap-6 pe-4'>
              <div className=' flex gap-6'>
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                {/* <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
                <Link page="Project" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div style={{boxShadow:"-4px 4px 0px 1px rgba(0,0,0,0.75)"}} className='px-4 bg-white rounded-lg '>
                  <AnchorLink
                   onClick={()=>setSelectedPage(pages.Contact)} 
                   href={`#${pages.Contact}`}>
                  Contact Me!
                  </AnchorLink>
                  </div>
            </div> 
            : (
              <button
                  className="bg-secondary-500 p-2 rounded-full"
                  onClick={()=> setIsMenuToggled(!isMenuToggled)}
              >
                  <Bars3Icon className="h-6 w-6 text-white" />
                  
              </button>
          )
            }
            

            {/* //links End */}

        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed backdrop-blur-lg shadow-lg right-0 bottom-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl">

                <div className="flex justify-end p-12 pt-5 ">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                    </div>
                    {/* Menu items //// */}
                    <div className="ml-[33%] flex flex-col text-2xl gap-10 ">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    {/* <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
                    <Link page="Project" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                
                </div>
                
            </div>
           )}
    </nav>
  )
}

export default Nav
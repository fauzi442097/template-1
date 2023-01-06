import React, { useState, useRef } from 'react'

import { BiMenu } from 'react-icons/bi'
import ToggleSidebar from '../ToggleSidebar';
import Logo from './Logo';
import Topbar from './Topbar';
import { AnimatePresence } from 'framer-motion'
import { useGlobalContext } from '../../../context';

const Header = () => {

  const btnRef = useRef<HTMLButtonElement>(null);
  const { activeSidebar, setActiveSidebar } = useGlobalContext();

  return (
    <div className='header'> 
      <div className='flex justify-between items-stretch w-full py-0 px-[15px] lg:px-[30px]'>
        {/* Logo */}
        <div className='flex justify-between items-center mr-5'> 

            {/* Aside Toggle */}
            <div className='flex items-center lg:hidden mr-2'> 
               <button 
                  ref={btnRef}
                  onClick={() => setActiveSidebar((prev:any) => !prev)}
                  className='hover:text-red-200 text-white  transition-colors duration-300 inline-flex items-center justify-center p-0 outline-none w-[30px] h-[30px] '>
                  <BiMenu className='text-2xl md:text-3xl font-light'/>
               </button>
            </div>

            <Logo />
        </div>

        {/* Topbar */}
        <Topbar/>

        <AnimatePresence>
          { activeSidebar && <ToggleSidebar setActiveSidebar={setActiveSidebar} btnRef={btnRef}/>}
        </AnimatePresence>
        

      </div>
    </div>
  )
}

export default Header
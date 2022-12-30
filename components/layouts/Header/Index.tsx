import React from 'react'

import { BiMenu } from 'react-icons/bi'
import Logo from './Logo';
import Topbar from './Topbar';

const Header = () => {

  return (
    <div className='header'> 
      <div className='flex justify-between items-stretch w-full py-0 px-[15px] lg:px-[30px]'>
        {/* Logo */}
        <div className='flex justify-between items-center mr-5'> 

            {/* Aside Toggle */}
            <div className='flex items-center lg:hidden mr-2'> 
               <button className='hover:text-red-200 text-white  transition-colors duration-300 inline-flex items-center justify-center p-0 outline-none w-[30px] h-[30px] '>
                  <BiMenu className='text-2xl md:text-3xl font-light'/>
               </button>
            </div>

            <Logo />
        </div>

        {/* Topbar */}
        <Topbar/>
        

      </div>
    </div>
  )
}

export default Header
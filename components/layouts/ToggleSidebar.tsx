import React, { useRef, useEffect, useState } from 'react'
import { Menus } from '../../config/menu'
import { useClickOutside } from './Header/Topbar';
import MenuItem from './MenuItem'
import { motion } from 'framer-motion'

const ToggleSidebar = ({ setActiveSidebar, btnRef }: any) => {

   let sidebarRef = useClickOutside(() => {
    setActiveSidebar(false);
  }, btnRef);

  return (
    <>
      {/* Backdrop */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ 
            default: { ease: "linear"},
            duration: 2
         }}
         className='backdrop z-30'>
      </motion.div>

      {/* Menu */}
      <motion.div  
         initial={{ x: "-100vw" }}
         animate={{ x: 0 }}
         exit={{ x: "-100vw" }}
         transition={{ 
            default: { ease: "linear"},
            duration: 3
         }}
         ref={sidebarRef} 
         className='fixed z-40 left-0 top-0 bottom-0 overflow-auto flex flex-col py-9 w-[250px] dark:bg-dark-dept-1 bg-white shadow-lg dark:shadow-none'> 
         <div className='flex w-full flex-grow flex-shrink-0 pl-5 pr-3 mb-7'> 
            <div className='w-full overflow-y-auto relative pr-2 flex'>
               <div className='flex p-0 m-0 list-none flex-col w-full gap-1'>
                  {
                     Menus.map(( value, index ) => {
                        return (
                           <MenuItem
                              key={value.id}
                              icon={value.icon}
                              url={value.url}
                              title={value.title}
                              subMenu={value.subMenu}
                           />
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </motion.div>
    </>
  )
}

export default ToggleSidebar
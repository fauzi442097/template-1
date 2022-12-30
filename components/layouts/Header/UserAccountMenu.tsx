import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import { FiLogOut } from 'react-icons/fi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { useClickOutside } from './Topbar';
import { motion } from 'framer-motion'


const UserAccountMenu = ({setShowDropdownTopbar, divRef, className, ...props} : any) => {

  let userAccountRef = useClickOutside(() => {
    setShowDropdownTopbar((prev:any) => ({ ...prev, UserAccountMenu: false}));
  }, divRef);

   return (
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
               default: { ease: "linear"},
               duration: 3
            }}
            ref={userAccountRef} 
            className={`bg-white dark:topbar-content-bg-dark dark:topbar-box-shadow-dark w-[275px] absolute rounded-lg top-14 right-3 md:top-20 md:right-3 lg:top-20 lg:right-10 shadow-lg py-4 flex flex-col z-20 ${className || ''}`} {...props}>
         <div className='px-3'> 
            <div className='flex items-center gap-4 px-3 py-3'> 
               <div className='h-9 w-9 sm:h-11 sm:w-11 rounded-md flex-none overflow-hidden'>
                  <Image src={avatar} alt="avatar" className='bg-cover'/>
               </div>
               <div className='flex flex-col overflow-hidden'>
                  <p className='m-0  dark:text-gray-300 text-base'> Ahmad Fauzi </p>
                  <p className='m-0 text-xs break-all'>fauzi442097@gmail.com </p>
               </div>
            </div>
         </div>
         <div className='separator my-2'></div>
         <div className='px-3'>
            <ul className='flex flex-col gap-1.5 text-sm'>
               <ItemUserAccountMenu>
                  <RiUserSettingsLine/>
                  <span> Profile  </span>
               </ItemUserAccountMenu>
               <ItemUserAccountMenu>
                  <FiLogOut/>
                  <Link href={'/login'}> Logout </Link>
               </ItemUserAccountMenu>
            </ul>
         </div>
      </motion.div>
   )
}

const ItemUserAccountMenu = ({ children } : any ) => {
   return (
      <li className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-light dark:hover:bg-[#424242] hover:text-primary dark:hover:text-red-700 hover:cursor-pointer transition group'> 
         {children}
      </li>
   )
}

export default UserAccountMenu
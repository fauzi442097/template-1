import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import { FiLogOut } from 'react-icons/fi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { useClickOutside } from './Topbar';


const UserAccountMenu = ({setShowDropdownTopbar, divRef, className, ...props} : any) => {

  let userAccountRef = useClickOutside(() => {
    setShowDropdownTopbar((prev:any) => ({ ...prev, UserAccountMenu: false}));
  }, divRef);

   return (
      <div ref={userAccountRef} className={`bg-white dark:bg-dark-depth-2 w-[275px] absolute rounded-lg top-14 right-3 md:top-20 md:right-3 lg:top-20 lg:right-10 shadow-lg py-4 flex flex-col z-20 ${className || ''}`} {...props}>
         <div className='px-3'> 
            <div className='flex items-center gap-4 px-3 py-3'> 
               <div className='h-9 w-9 sm:h-11 sm:w-11 rounded-md flex-none overflow-hidden'>
                  <Image src={avatar} alt="avatar" className='bg-cover'/>
               </div>
               <div className='flex flex-col overflow-hidden'>
                  <h4 className='m-0 text-base'> Ahmad Fauzi </h4>
                  <p className='m-0 font-inter-light text-sm break-all'>fauzi442097@gmail.com </p>
               </div>
            </div>
         </div>
         <div className='separator my-2'></div>
         <div className='px-3'>
            <ul className='flex flex-col gap-1.5 text-sm font-inter-light'>
               <ItemUserAccountMenu>
                  <RiUserSettingsLine/>
                  <span className='group-hover:font-inter'> Profile  </span>
               </ItemUserAccountMenu>
               <ItemUserAccountMenu>
                  <FiLogOut/>
                  <Link href={'/login'} className='group-hover:font-inter'> Logout </Link>
               </ItemUserAccountMenu>
            </ul>
         </div>
      </div>
   )
}

const ItemUserAccountMenu = ({ children } : any ) => {
   return (
      <li className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-light dark:hover:bg-dark-depth-1 hover:text-primary dark:hover:text-green-600 hover:cursor-pointer transition group'> 
         {children}
      </li>
   )
}

export default UserAccountMenu
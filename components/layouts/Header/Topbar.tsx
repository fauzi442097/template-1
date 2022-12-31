import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { FiBell } from 'react-icons/fi'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from "framer-motion"

import avatar from '../../../public/avatar.jpg'
import Notification from './Notification'
import UserAccountMenu from './UserAccountMenu'

interface dropdownTopBarContent {
  notification: Boolean,
  userAccount: Boolean
}

let dropdownTopBar:dropdownTopBarContent  = {
  notification : false,
  userAccount : false
}

export const useClickOutside = (handler: any, btnRef: any) => {
   const domNode:any = useRef();

   useEffect(() => {
      let handleClick = (e:any) => {
         if ( !domNode.current.contains(e.target) && !btnRef.current.contains(e.target)) {
            handler();
         }
      }
      document.addEventListener('click', handleClick);
      return () => { document.removeEventListener('click', handleClick);}
   });

   return domNode;
}

const Topbar = () => {

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false)
  const [ showDropdownTopbar, setShowDropdownTopbar ] = useState<dropdownTopBarContent|any>(dropdownTopBar);
  
  const btnNotifRef = useRef<HTMLButtonElement>(null);
  const divUserAccountRef = useRef<HTMLDivElement>(null);
  
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleDropdownTopbar = (clicked:string) => {
    const newObject:any = Object.keys(showDropdownTopbar)
          .filter((key) => !key.includes(clicked))
          .reduce((obj, key) => {
              return Object.assign(obj, {
                  [key]: false
              });
      }, {});

    newObject[clicked] = !showDropdownTopbar[clicked];
    setShowDropdownTopbar(newObject);
  }

  const changeTheme = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className='topbar flex items-stretch'> 

      {/* Notification */}
      <div className='topbar-item relative'> 
        <button ref={btnNotifRef} className={`btn btn-icon topbar-btn ${showDropdownTopbar.notification ? 'active' : ''}`} onClick={() => toggleDropdownTopbar('notification')}> 
          <FiBell className='topbar-icon'/>
        </button>
          <AnimatePresence>
            { showDropdownTopbar.notification && <Notification setShowDropdownTopbar={setShowDropdownTopbar} btnRef={btnNotifRef}/>}
        </AnimatePresence>
      </div>

      
      {/* Theme Mode */}
      <div className='topbar-item group'> 
        <button className={`btn btn-icon topbar-btn`} onClick={() => changeTheme()}> 
          { currentTheme == 'light' ? <BsMoon className='topbar-icon'/> : <BsSun className='topbar-icon'/>}
        </button>
        <span className='text-xs bg-white p-2 rounded-lg absolute top-12 md:top-16 right-0 shadow dark:shadow-none font-inter-light w-24 text-center dark:bg-dark-dept-1 transition duration-300 -scale-0 group-hover:scale-100 '> 
          {currentTheme == 'dark' ? 'Light mode' : 'Dark mode'}
        </span>
      </div>

      {/* User Account */}
      <div ref={divUserAccountRef} className='flex items-center lg:ml-4 lg:mr-4 cursor-pointer' onClick={() => toggleDropdownTopbar('userAccount')}> 
        <div className='lg:flex lg:flex-col items-end mr-2 lg:mr-4 hidden'>
          <p className='m-0 text-white dark:text-gray-400 text-base font-inter-medium'> Ahmad Fauzi </p>
          <span className='text-xs text-white font-inter-light dark:text-gray-400'> Administrator </span>
        </div>
        <div className='w-[33px] h-[33px] md:btn-icon-size-account rounded-lg bg-white overflow-hidden'> 
          <Image src={avatar} alt="avatar" className='object-cover'/>
        </div>
        <AnimatePresence>
          { showDropdownTopbar.userAccount && <UserAccountMenu setShowDropdownTopbar={setShowDropdownTopbar} divRef={divUserAccountRef}/> }
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Topbar
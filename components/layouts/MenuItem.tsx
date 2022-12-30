import Link from 'next/link'
import React, { Component, useState } from 'react'

import { RxDotFilled } from 'react-icons/rx'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { useGlobalContext } from '../../context'

interface MenuItemProps {
  icon : any,
  url : String,
  title: String,
  subMenu?: any
}

const MenuItem = ({ icon, url, title, subMenu } : MenuItemProps) => {

  const [ activeSubMenu, setActiveSubMenu ] = useState(false);
  const showSubMenu = () => {
      setActiveSubMenu(prev => !prev);
   }

  return (
      <div className='menu-item'>
          {
            subMenu ? (
              <>
                <span className='menu-link' onClick={() => showSubMenu()}> 
                  <span className='menu-icon'> {icon} </span>
                  <span className='menu-title'> {title} </span>
                  <span> <FiChevronDown className={`duration-300 transition ${activeSubMenu ? 'rotate-180' : 'rotate-0'}`}/> </span>
                </span>

                <AnimatePresence>
                  {activeSubMenu && <SubMenu items={subMenu}/>}
                </AnimatePresence>
              </>
            ) : (
              <MenuLink icon={icon} url={url} title={title} />
            )
          }
      </div>
  )
}

const SubMenu = ({ items }: any ) => {
  
  const menuAnimation = {
      hidden: {
         opacity: 0,
         height: 0,
         padding: 0,
         transition: { 
            duration: 0.4, 
            when: "afterChildren" 
         },
      },
      show: {
         opacity: 1,
         height: "auto",
         transition: {
            duration: 0.4,
            when: "beforeChildren",
         },
      },
   };

   const menuItemAnimation = {
      hidden: (i:any) => ({
         padding: 0,
         x: "-100%",
         transition: {
            duration: (i + 1) * 0.1,
         },
      }),
      show: (i:any) => ({
         x: 0,
         transition: {
            duration: (i + 1) * 0.1,
         },
      }),
   };

  return (
     <motion.div 
         variants={menuAnimation}
         initial="hidden"
         animate="show"
         exit="hidden"
        className='menu-sub ml-4 flex p-0 m-0 list-none flex-col'>
        {
          items.map((value:any, index:any) => (
            <motion.div variants={menuItemAnimation} key={index} custom={index}> 
                <MenuLink 
                  key={index}
                  icon={<RxDotFilled />}
                  url={value.url}
                  title={value.title}
                />
              </motion.div>
          ))
        }
      </motion.div>
  )
}

const MenuLink = ({ url, icon, title } : {
  url: String,
  icon: any,
  title: String
}) => {

  const { setActiveSidebar } = useGlobalContext();

  const router = useRouter();
  const activeClass = router.pathname == url ? 'font-inter-semibold' : '';
  return (
    <Link href={`${url}`} className={`menu-link ${activeClass}`} onClick={() => setActiveSidebar(false)}>
      <span className='menu-icon'> {icon} </span>
      <span className='menu-title'> {title} </span>
    </Link>
  )
}

export default MenuItem
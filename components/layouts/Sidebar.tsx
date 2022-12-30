import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

import { AiOutlineDashboard } from 'react-icons/ai'
import { FiUsers, FiSettings, FiCrosshair } from 'react-icons/fi'
import { Menus } from '../../helper/menu'


const Sidebar = () => {
  return (
      <aside className='aside py-9 hidden lg:block'>
         {/* Aside Menu */}
         <div className='aside-menu flex w-full flex-col flex-auto pl-5 pr-3 mb-5 '> 
            <div className='flex pr-2  overflow-y-auto absolute top-9 bottom-9 left-5 right-3'>
               {/* Menu */}
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
      </aside>
  )
}

export default Sidebar
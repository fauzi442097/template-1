import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

import { AiOutlineDashboard } from 'react-icons/ai'
import { FiUsers, FiSettings, FiCrosshair } from 'react-icons/fi'


const Menus = [
   {
      id: 1,
      title: 'Dashboard',
      url: '/',
      icon: <AiOutlineDashboard />
   },
   {
      id: 2,
      title: 'Users',
      url: '/users',
      icon: <FiUsers />
   },
   {
      id: 3,
      title: 'Settings',
      url: '/settings',
      icon: <FiSettings />,
      subMenu: [
         {
            title: 'Account',
            url: '/settings/account'
         },
         {
            title: 'Payment',
            url: '/settings/payment'
         },
         {
            title: 'Role',
            url: '/settings/role'
         }
      ]
   },
   {
      id: 4,
      title: 'About',
      url: '/about',
      icon: <FiCrosshair />,
   }
];


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
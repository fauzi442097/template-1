import Link from 'next/link'
import React, { Component } from 'react'

import { RxDotFilled } from 'react-icons/rx'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'

interface MenuItemProps {
  icon : any,
  url : String,
  title: String,
  subMenu?: any
}

const MenuItem = ({ icon, url, title, subMenu } : MenuItemProps) => {
  return (
      <div className='menu-item'>
          {
            subMenu ? (
              <>
                <span className='menu-link'> 
                  <span className='menu-icon'> {icon} </span>
                  <span className='menu-title'> {title} </span>
                  <span> <FiChevronDown /> </span>
                </span>

                <div className='menu-sub ml-4 flex p-0 m-0 list-none flex-col'>
                  {
                    subMenu.map((value:any, index:any) => (<MenuLink 
                                                    key={index}
                                                    icon={<RxDotFilled />}
                                                    url={value.ur}
                                                    title={value.title}
                                                  />))
                  }
                </div>
              </>
            ) : (
              <MenuLink icon={icon} url={url} title={title} />
            )
          }
      </div>
  )
}

const MenuLink = ({ url, icon, title } : {
  url: String,
  icon: any,
  title: String
}) => {

  const router = useRouter();
  const activeClass = router.pathname == url ? 'font-inter-semibold' : '';
  return (
    <Link href={`${url}`} className={`menu-link ${activeClass}`}>
      <span className='menu-icon'> {icon} </span>
      <span className='menu-title'> {title} </span>
    </Link>
  )
}

export default MenuItem
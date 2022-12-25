import React from 'react'
import Content from './Content'
import Header from './Header/Index'
import Sidebar from './Sidebar'
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
})

const Layout = ({ children } : {
   children: React.ReactNode
}) => {


  return (
    <div className={`${inter.variable} font-inter-light flex flex-col flex-1`}>
      <div className='flex flex-row flex-1 '> 
         <Sidebar/>
         <div className='wrapper'> 
         <Header/>
         <Content>
            {children}
         </Content>
         {/* <Footer/> */}
         </div>
      </div>
   </div>
  )
}

export default Layout
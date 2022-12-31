import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Toolbar from '../components/layouts/Toolbar/Index'
import PageTitle from '../components/layouts/Toolbar/PageTitle'
import Breadcrumb from '../components/layouts/Toolbar/Breadcrumb'
import PageAction from '../components/layouts/Toolbar/PageAction'

import { motion } from 'framer-motion'
import { FiSave } from 'react-icons/fi'
import Button from '../components/Button'
import TagHead from '../components/layouts/TagHead'
import NextBreadcrumbs from '../components/layouts/Toolbar/Breadcrumb'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

          {/* Container */}
          <div className='flex flex-grow flex-shrink-0'> 
            <div className='w-full lg:py-0 lg:px-[30px] m-auto container-fluid flex flex-wrap gap-4'> 

                <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
                  Dashboard
                </div>

                  
                      
            </div>
          </div>
    </>
  )
}

import Head from 'next/head'
import React from 'react'
import Breadcrumb from '../components/layouts/Toolbar/Breadcrumb'
import Toolbar from '../components/layouts/Toolbar/Index'
import PageAction from '../components/layouts/Toolbar/PageAction'
import PageTitle from '../components/layouts/Toolbar/PageTitle'

import { motion } from 'framer-motion'
import NextBreadcrumbs from '../components/layouts/Toolbar/Breadcrumb'

function about() {
  return (
    <>
  
          {/* Container */}
          <div className='flex flex-grow flex-shrink-0'> 
            <div className='w-full lg:py-0 lg:px-[30px] m-auto container-fluid '> 
              <div className='bg-white dark:bg-dark-depth-1 py-5 px-9 rounded-lg'> 
                about page
              </div>
            </div>
          </div>
    </>
  )
}

export default about
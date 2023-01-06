import { useRouter } from 'next/router'
import React, { Component, ReactElement } from 'react'
import Content from './Content'
import Header from './Header/Index'
import Sidebar from './Sidebar'
import TagHead from './TagHead'
import Breadcrumbs from './Toolbar/Breadcrumb'
import Toolbar from './Toolbar/Index'
import PageTitle from './Toolbar/PageTitle'
import { StringHelper } from '../../helper/helper'
import { useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../../pages/_app'
import { GlobalContextProvider } from '../../context/globalContext'

const PageInfo = () => {
    const router = useRouter();
    const path = router.asPath.split("?")[0];
    const pathName = String(path.split('/').pop());
    const pageTitle = pathName == '' ? 'Dashboard' : StringHelper.Capitalize(pathName);

    return (
      <Toolbar>
          <PageTitle> 
            <h1 className='page-title dark:text-gray-400'> {pageTitle} </h1>
            <Breadcrumbs/>
          </PageTitle>
        </Toolbar>
    )
}

const Layout = ({ children } : {
   children: React.ReactNode
}) => {

  const { status } = useSession();
  const router = useRouter();


  return (
    <>
      <TagHead/>
      <div className={`flex flex-col flex-1`}>
        <div className='flex-auto overflow-x-auto'> 
          <Sidebar/>
          <div className='wrapper'> 
          <Header/>
          <Content>
              {/* Toolbar */}
              <PageInfo />
              {children}
          </Content>
          {/* <Footer/> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default Layout
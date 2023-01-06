import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { GlobalContextProvider } from '../context/globalContext'
import InitialGlobalFont from '../config/font'
import { SessionProvider } from "next-auth/react"
import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Layout from '../layouts/Admin/Index'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({
  Component,
  pageProps: { 
    session, 
    ...pageProps 
  },
} : {
  Component: any,
  pageProps: any
}) {

  return (
    <>
        <InitialGlobalFont/>
        <SessionProvider session={session}>
        <ThemeProvider attribute='class'>
          { 
            Component.getLayout ? (
                Component.getLayout(<Component {...pageProps} />)
            ) : (
              <GlobalContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </GlobalContextProvider>
            )
          }
        </ThemeProvider>
        </SessionProvider>
    </>
  )  
}

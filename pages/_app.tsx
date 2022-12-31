import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layouts/Index'
import { GlobalContextProvider } from '../context/globalContext'
import InitialGlobalFont from '../config/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <InitialGlobalFont/>
      <ThemeProvider attribute='class'>
        <GlobalContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalContextProvider>
      </ThemeProvider>
    </>
  )
}

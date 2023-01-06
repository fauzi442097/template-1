import React from 'react'
import logo from "../../public/logo-full.png"
import bg from "../../public/bg-login-2.png"
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const GuestLayout = ({ children }: {
  children: React.ReactNode
}) => {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

   const changeTheme = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <div className='h-screen flex flex-col lg:flex-row bg-white dark:bg-dark transition-colors duration-300'>
        <div className=' flex flex-row flex-auto justify-center p-10 lg:w-1/2'>

          <div className='flex flex-auto flex-col w-full max-w-md '>

            {/* Toggle Dark Mode */}
            <div className="m-0 relative group text-right">
              <button onClick={() => changeTheme()} className={'p-2 rounded-lg hover:cursor-pointer  hover:bg-red-700 hover:text-white   hover:dark:bg-red-900 transition-colors duration-300'}> 
                <span> 
                  {
                    currentTheme == 'dark' ? 
                    <BsSun className='text-lg font-inter-light'/> : 
                    <BsMoon className='text-lg font-inter-light'/> 
                  }
                </span> 
              </button>
              <span className='text-xs bg-white p-2 rounded-lg absolute top-10 right-0 shadow dark:shadow-none font-inter-light w-24 text-center dark:bg-dark-dept-1 transition duration-300 -scale-0 group-hover:scale-100'>{currentTheme == 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </div>

            <div className='w-full my-10'> 
              {/* Logo */}
              <div className='py-4 lg:py-8'>
                <Image src={logo} alt="logo" className={`w-20 lg:w-24 m-auto`}/>
              </div>
            </div>

            <div className='py-4 '>
              {children}
            </div>

          </div>
        </div>
        <div 
          className={`hidden lg:flex lg:flex-auto bg-cover bg-no-repeat bg-center lg:w-1/2`}
          style={{ 
            backgroundImage: `url(${bg.src})`
           }}
        ></div>
      </div>
    </>

  )
}

export default GuestLayout
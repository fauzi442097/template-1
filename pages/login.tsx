import Link from 'next/link'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import Input from '../components/Forms/Input'
import Label from '../components/Forms/Label'
import GuestLayout from '../layouts/Guest/GuestLayout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {

   const handleSubmit = (e: any) => {
      e.preventDefault();
   }

  return (
    <form action="" className='w-100' onSubmit={(e) => handleSubmit(e)}>
      <div className='text-left'>
        <div className='mb-6 flex items-end justify-between'> 
          <div>
            <span className='font-inter-bold text-lg'>Login</span>
          </div>
          <div></div>
        </div>
        <div className='mb-4'>
          <Label htmlFor='email' className='mb-1.5'> Email </Label>
          <Input.Text id='email' className="w-full" placeholder="example@gmail.com" />
        </div>
        <div className='mb-4'>
          <Label htmlFor='password' className='mb-1.5'> Password </Label>
          <Input.Text id='password' className="w-full" placeholder="********" />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
          <div></div>
          <Link href="/forgot-password" className="link font-inter text-sm">Forgot Password?</Link>
        </div>

        <div>
          <Button.Primary type="submit" className='w-full justify-center'> Login </Button.Primary>
        </div>

      </div>
    </form>
  )
}

Page.getLayout = (page:ReactElement) => <GuestLayout> {page}</GuestLayout>


export default Page
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import Input from '../components/Forms/Input'
import Label from '../components/Forms/Label'
import GuestLayout from '../layouts/Guest/GuestLayout'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {

   const handleSubmit = (e: any) => {
      e.preventDefault();
   }

  return (
    <form action="" className='w-100' onSubmit={(e) => handleSubmit(e)}>
      <div className='text-left'>
        <div className='mb-6 flex items-end justify-between'> 
          <div>
            <span className='font-inter-bold text-lg'>Forgot Password</span>
          </div>
          <div></div>
        </div>
        <div className='mb-4'>
          <Label htmlFor='email' className='mb-1.5'> Email </Label>
          <Input.Text id='email' className="w-full" placeholder="example@gmail.com" />
        </div>
        
         <div className=''>
          <Button.Primary type="submit" className='w-full justify-center'> Reset Password </Button.Primary>
        </div>

         <div className="flex items-center justify-center flex-wrap my-20">
          <div>
            Remember password?
            <Link href="/login" className="link font-inter text-sm"> Login</Link>
          </div>
        </div>
      </div>
    </form>
  )
}

Page.getLayout = (page:ReactElement) => <GuestLayout> {page}</GuestLayout>


export default Page
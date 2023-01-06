import Image from 'next/image'
import React from 'react'

import LogoMin from '../../../public/logo.png';
import LogoFull from '../../../public/logo-full.png';
import LogoFullTransparent from '../../../public/logo-trf.png';
import LogoMinTransparent from '../../../public/logo-trf-min.png';

const Logo = () => {
  return (
   <a href="">
      <Image alt='logo' src={LogoFullTransparent} className="h-[35px] lg:h-[40px] w-full hidden md:block rounded-lg"/>
      <Image alt='logo' src={LogoMinTransparent} className="h-[30px] w-full block md:hidden rounded-lg"/>
   </a>
  )
}

export default Logo
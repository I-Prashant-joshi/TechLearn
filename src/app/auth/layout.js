
import React from 'react'
import "../globals.css";
import Providers from '@/Providers';
import logo from "../../../public/TechLearnLogo.png"
import Image from 'next/image';
function Layout({children}) {
  return (
    <div
    className="h-screen w-full"
  
  >

     <div className='nav text-2xl flex items-center' >
        <Image src={logo} className='h-[30px] w-[90px] lg:w-[130px] lg:h-[30px]' alt="logo" />
     </div>
     <Providers>
    {children}
    </Providers>
    </div> 
  )
}

export default Layout
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link';
const MiddleImage = () => {
  return (
    <div className='h-[500px] bg-fixed bg-no-repeat bg-cover relative' style={{backgroundImage: `url('https://images.pexels.com/photos/1048283/pexels-photo-1048283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
       <Link className='  ' href='https://www.google.com/'>
       <div className=' flex flex-col justify-center items-center gap-36' >
       <h1 className='text-white'>INTRO</h1>
       <h1 className='text-white text-5xl font-medium'>Main header</h1>
       <h1 className='text-white'>Subheader</h1>
       </div>
        <IoMdArrowDropdown size={40} className='text-white  absolute bottom-1 left-1/2 animate-bounce'/>
       </Link>
      
    </div>
  )
}

export default MiddleImage
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-white px-24 py-12 flex justify-between'>
      <div className='w-96 flex flex-col gap-8'>
        <div className='flex gap-2'>
          {<FiShoppingCart className='text-fuchsia-700' size={30} />}
          <div>
            <h1 className='text-sm font-bold'>BOUNDLESS</h1>
            <h1 className='text-sm'>commerce</h1>
          </div>
        </div>
        <h1 className='font-normal text-3xl'>Your Company LLc</h1>
        <p className='font-light text-2xl'>This website and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. Price and availability information is subject to change without notice.</p>
      </div>
      <div className='w-96 flex flex-col gap-12'>
        <h1 className='font-semibold text-4xl'>Most popular</h1>
         <div className='flex flex-col gap-8'>
         <Link href=''>iPhone Cases</Link>
         <Link href=''>iPad Cases</Link>
         <Link href=''>Cases for Samsung</Link>
         <Link href=''>Collections</Link>
         </div>
         
      </div>
      <div className='w-96 flex flex-col gap-12'>
        <h1 className='flex flex-col gap-8'>Contact us</h1>
        <div className='flex flex-col gap-8'>
        <Link href='' className='flex gap-3 items-center'><FaWhatsapp className='text-fuchsia-400' />+251986589983</Link>
        <Link href='' className='flex gap-3 items-center'><MdLocationOn className='text-fuchsia-400' />1 infinite loop, Addis Ababa</Link>
        <p className='flex gap-3 items-center'><GoClockFill className='text-fuchsia-400' />9:00am - 6:00pm</p>
        </div>
       
      </div>
      <div className='w-96 flex flex-col gap-12'>
        <h1>Follow us</h1>
        <div className='flex gap-8'>
          <Link href='' className='hover:bg-slate-400 border-2 rounded-full duration-300'><FaFacebook   className=' p-2 text-6xl text-fuchsia-400 '/></Link>
          <Link href="" className='hover:bg-slate-400 border-2 rounded-full duration-300'><FaInstagram   className='p-2  text-6xl text-fuchsia-400 '/></Link>
          <Link href="" className='hover:bg-slate-400 border-2 rounded-full duration-300'><FaTwitter   className='p-2  text-6xl text-fuchsia-400'/></Link>
        </div>
        <p>All rights reserved!@Boundless commerce</p>
      </div>
       
    </div>
  )
}

export default Footer
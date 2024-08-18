import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { PiPhoneCall } from "react-icons/pi";


const DescriptionPage = () => {
  return (
    <main className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 mb-24'>
      <div className='my-6 px-3 py-4 flex gap-3 bg-slate-100 '>
        <Link href=''>Home</Link><span>/</span>
        <Link href=''>Iphone Cases</Link><span>/</span>
        <Link href=''>Iphone 7</Link>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className=' '>
          <h2>Case Explorer Wanted</h2>
          <div className='flex gap-12'>
            <div className='space-y-8 hidden md:block'>
              <button className='bg-emerald-500 px-2 py-1'>Best Choice</button>
              <img className='hover:border-2 hover:border-lime-500   cursor-pointer p-2  ' src="https://blank.demos.my-boundless.app/_next/image?url=https%3A%2F%2Fmedia.boundless-commerce.com%2Fthumb%2Fi2%2Fimages%2F49%2F54%2Fc4db23339fc41237bab64127ff69.jpeg%3Fmode%3Dscale%26max-size%3D100&w=128&q=100" alt="" />
              <img className='hover:border-2 hover:border-lime-500   cursor-pointer p-2  ' src="https://blank.demos.my-boundless.app/_next/image?url=https%3A%2F%2Fmedia.boundless-commerce.com%2Fthumb%2Fi2%2Fimages%2F42%2F8c%2Ffc30842678a18574925d97e9aa91.jpeg%3Fmode%3Dscale%26max-size%3D100&w=128&q=100" alt="" />
            </div>
            <div className='w-full flex justify-center md:'>
              <img width={400} className='  image1' src="https://blank.demos.my-boundless.app/_next/image?url=https%3A%2F%2Fmedia.boundless-commerce.com%2Fthumb%2Fi2%2Fimages%2F49%2F54%2Fc4db23339fc41237bab64127ff69.jpeg%3Fmode%3Dscale%26max-size%3D800&w=828&q=100" alt="" />
              <img width={400} className='hidden image2' src="https://blank.demos.my-boundless.app/_next/image?url=https%3A%2F%2Fmedia.boundless-commerce.com%2Fthumb%2Fi2%2Fimages%2F42%2F8c%2Ffc30842678a18574925d97e9aa91.jpeg%3Fmode%3Dscale%26max-size%3D800&w=828&q=100" alt="" />
            </div>
          </div>

        </div>
        <div className='  '>
          <div className='flex gap-6 my-12'>
            <span>For iphone:</span>
            <div className='flex gap-2 md:flex-col lg:flex-row'>
              <button className='border-2 px-4 py-1 hover:bg-slate-700  hover:text-white duration-300 '>iphone 7</button>
              <button className='border-2 px-4 py-1 hover:bg-slate-700  hover:text-white duration-300 '>iPhone 7 plus</button>
              <button className='border-2 px-4 py-1 hover:bg-slate-700  hover:text-white duration-300 '> iPhnoe 6</button>
              <button className='border-2 px-4 py-1 hover:bg-slate-700  hover:text-white duration-300 sm:flex-wrap'> iPhone 5/5s</button>
            </div>
          </div>
          <hr class="my-4 border-gray-300 border-1 my-12" />
          <div>
            <div>
              <span>8.99 $</span>
              <span>12.00 $</span>
            </div>
            <div>
              <span>You save:</span>
              <span>3.01 $</span>
            </div>
            <div>
              <button className='border-2 border-gray-400 p-2 text-center w-12 text-xl hover:bg-slate-600 hover:text-white' >-</button>
              <input className='border-2 border-gray-400 p-2 text-center w-20 text-xl' type="number" value='0' min='0' />
              <button className='border-2 border-gray-400 p-2 text-center w-12 text-xl hover:bg-slate-600 hover:text-white' >+</button>
              <button className='text-xl px-6 py-2 rounded-md bg-violet-500 text-black ml-8'>Buy</button>
            </div>
            <hr class="my-4 border-gray-300 border-1 my-12" />

            <div className='space-y-6'>
              <h2>Case characterstics</h2>
              <div className='flex flex-col gap-4'>
                <div><span>Is Charging Case?</span>...........<span>No</span></div>
                <div><span>Type of case</span>...........<span>Clip case</span></div>
                <div><span>Film is included</span>...........<span>No</span></div>
              </div>
              <div className='mt-24'>
                <div className='flex gap-2'><span>Brand</span>...........<img width={100} className='text-sm' src='https://media.boundless-commerce.com/thumb/i2/images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg?mode=scale&max-size=200'></img><span>Anymode</span></div>
                <div><span>weight</span>...........<span>0.1 Kg.</span></div>
              </div>
             
            </div>

            <hr class="my-4 border-gray-300 border-1" />
            <div className='space-y-4'>
              <div className='flex items-center gap-2'><FaCalendarAlt size={30} className='text-fuchsia-500' /><p>Extended warranty for 30 days.</p></div>
              <div className='flex items-center gap-2'><IoIosRefresh size={30} className='text-fuchsia-500' /><p>Changed your mind? No problem!</p></div>
              <div className='flex items-center gap-2'><PiPhoneCall size={30} className='text-fuchsia-500' /><p>Customer support line</p></div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}

export default DescriptionPage
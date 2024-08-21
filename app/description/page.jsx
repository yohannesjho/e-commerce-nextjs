"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { PiPhoneCall } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import useCart from "../use-cart";


const description = ({ searchParams }) => {
  const {addToCart} = useCart();

  const {sourceImage1,sourceImage2,Description,Price,DiscountedPrice} = searchParams


  const [cartItems, setCartItems] = useState([])
  let [quantity, setQuantity] = useState(1)

  const product = {
    image:sourceImage1,
    description: Description,
    price: Price,
    quantity: quantity
  }


  const incrementQuantity = () => {

    setQuantity(++quantity)

    console.log(Price)
  }

  const decrementQuantity = () => {

    if (quantity > 1) {
      setQuantity(--quantity)
    }


  }

  const handleAddToCart = () =>{
    addToCart(product);
    console.log(product)
  }

   

  return (
    <main className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 mb-24'>
      <div className='my-6 px-3 py-4 flex gap-3 bg-slate-100 '>
        <Link href=''>Home</Link><span>/</span>
        <Link href=''>Iphone Cases</Link><span>/</span>
        <Link href=''>Iphone 7</Link>

      </div>

      <div className='flex flex-col md:flex-row'>
        <div className=' '>
          <h2>{Description}</h2>
          <div className='flex gap-12'>
            <div className='space-y-8 hidden md:block'>
              <button className='bg-emerald-500 px-2 py-1'>Best Choice</button>
              <img className='hover:border-2 hover:border-lime-500   cursor-pointer p-2 w-24  ' src={ sourceImage1} alt="" />
              <img className='hover:border-2 hover:border-lime-500   cursor-pointer p-2  w-24' src={ sourceImage2} alt="" />
            </div>
            <div className='w-full flex justify-center md:'>
              <img width={400} className='image1' src={ sourceImage1} alt="" />
              <img width={400} className='hidden image2' src={ sourceImage2} alt="" />
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
          <hr className="border-gray-300 border-1 my-12" />
          <div>
            <div className='space-x-6 mb-3'>
              <span className='line-through text-red-600'>${ Price}</span>
              <span>${ DiscountedPrice}</span>
            </div>
            <div className='mb-6'>
              <span>You save:</span>
              <span>${ Price -  DiscountedPrice}</span>
            </div>
            <div>
              <button onClick={() => decrementQuantity()} className='border-2 border-gray-400 p-2 text-center w-12 text-xl hover:bg-slate-600 hover:text-white' >-</button>
              <input className='border-2 border-gray-400 p-2 text-center w-20 text-xl'  type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} min='1' />
              <button onClick={() => incrementQuantity()} className='border-2 border-gray-400 p-2 text-center w-12 text-xl hover:bg-slate-600 hover:text-white' >+</button>
               
                
              <button onClick={() => handleAddToCart()} className='text-xl px-6 py-2 rounded-md bg-violet-500 text-black ml-8'>Add to cart</button>
            </div>
            <hr className="border-gray-300 border-1 my-12" />

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

            <hr className="my-4 border-gray-300 border-1" />
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

export default description
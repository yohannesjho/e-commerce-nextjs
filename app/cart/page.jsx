'use client'
import React, { useState } from 'react'

const cartData = ({ searchParams }) => {
  const { Price, quantity } = searchParams
  let [quantity2, setQuantity2] = useState(0 + quantity)
  const incrementQuantity = () => {
    setQuantity2(++quantity2)
  }
  const decrementQuantity = () => {
    if (quantity2 > 1) {
      setQuantity2(--quantity2)
    }

  }

  return (
    <div className='my-24  '>
      <h2 className='text-center my-6'>Shopping Cart</h2>


      <table className=' w-1/2   mx-60 hidden md:inline-table '>
        <thead className=''>
          <tr className=''>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className='w-full '>
          <tr className='text-center'>
            <td>{Price}</td>
            <td><button onClick={() => decrementQuantity()} className='border-2 px-2 hover:bg-slate-400 duration-300'>-</button><input className='border-2 w-12 text-center' type="number" onChange={(e)=>setQuantity2(e.target.value)} value={quantity2} min={1} /><button onClick={() => incrementQuantity()} className='border-2 px-2 hover:bg-slate-400 duration-300'>+</button></td>
            <td>{quantity2 * Price}</td>
            <td><button className='border-2 px-2 hover:bg-slate-400 duration-300'>Remove</button></td>
          </tr>
        </tbody>

      </table>

      <div className='hidden w-1/4 md:flex justify-between mx-auto mt-12'>
        <p>Order Total: </p>
        <span>{quantity2}</span>
        <span>{quantity2 * Price}</span>
      </div>

      <div className='flex flex-col gap-4 m-12  md:hidden'>
        <div className='space-x-4'><span>Price</span><span>{Price}</span></div>
        <div className='space-x-4'> <span>Quantity</span><button onClick={() => decrementQuantity()} className='border-2 px-2 hover:bg-slate-400 duration-300'>-</button><input className='border-2 w-12 text-center' type="number" onChange={(e)=>setQuantity2(e.target.value)} value={quantity2} min={1} /><button onClick={() => incrementQuantity()} className='border-2 px-2 hover:bg-slate-400 duration-300'>+</button></div>
        <div className='space-x-4'><span>Total Price</span><span>${Price * quantity2}</span></div>
        <button className='border-2 w-1/4 mx-auto px-2 hover:bg-slate-400 duration-300'>Remove</button>
      </div>
    </div>
  )
}

export default cartData
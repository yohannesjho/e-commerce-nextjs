import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
const Store = ({ StoreData }) => {
    return (
        <div>
       <h1 className='font-bold text-center mb-12 text-3xl'>Boundless Store</h1>
       
       
        <div className=' flex  flex-between gap-6 flex-wrap pl-8 '>
            
            {StoreData.map(data => (
                <div key={data.id} className='border-2 bg-white  flex flex-col w-96 gap-2 p-6 justify-center items-center'>
                    <img src={data.img} alt="hhh" className='   ' />
                    <p className='font-bold'>{data.description}</p>
                    <div className='flex gap-4'>
                        <span>{`$`}{data.price}</span>
                        <span>{`$`}{data.discountedPrice}</span>
                    </div>

                    <button className='bg-fuchsia-300 text-black px-4 py-1 rounded-md flex items-center gap-2'>{<FiShoppingCart />} Add to cart</button>
                </div>
            ))}
        </div>
        <h1 className='font-bold text-center mt-12 text-3xl'>Cover Example</h1>
        </div>
    )
}

export default Store
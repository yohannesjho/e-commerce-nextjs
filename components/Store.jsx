import DescriptionPage from '@/app/description/page';
import Link from 'next/link';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
const Store = ({ StoreData }) => {
    return (
        <div>
            <h1 className='font-bold text-center mb-12 text-3xl'>Boundless Store</h1>


            <div className=' flex  flex-between gap-6 flex-wrap pl-8 '>

                {StoreData.map(data => (
                   
                    <Link key={data.id} href={{
                        pathname: '/description',
                        query: { sourceImage1: data.img1,
                            sourceImage2: data.img2,
                            Description: data.description,
                            Price: data.price,
                            DiscountedPrice: data.discountedPrice
                         }
                      }}  >
                         
                        <div className='border-2 bg-white  flex flex-col w-96 gap-2 p-6 justify-center items-center hover:shadow-2xl  duration-300'>
                            <img src={data.img1} alt="hhh" className='hover:[300px]' />
                            <p className='font-bold'>{data.description}</p>
                            <div className='flex gap-4'>
                                <span>{`$`}{data.price}</span>
                                <span>{`$`}{data.discountedPrice}</span>
                            </div>

                            <button className='bg-fuchsia-300 text-black px-4 py-1 rounded-md flex items-center gap-2'>{<FiShoppingCart />} Add to cart</button>
                        </div>
                    </Link>

                ))}
            </div>
            <h1 className='font-bold text-center mt-12 text-3xl'>Cover Example</h1>
        </div>
    )
}

export default Store
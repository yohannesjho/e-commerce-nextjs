import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import LINK from 'next/link'
import Link from 'next/link';
const Header = () => {
    return (
        <div className=''>
            <div className='flex justify-between gap-48  py-12 px-2 sm:px-8 md:px-16 lg:px-24'>
                <div className='flex gap-2'>
                    {<FiShoppingCart className='text-fuchsia-700' size={30} />}
                    <div>
                        <h1 className=' font-bold'>BOUNDLESS</h1>
                        <h1 className=''>commerce</h1>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        {<FiShoppingCart size={30} />}
                        <p className=''>$18</p>
                    </div>
                    <IoMdMenu size={30} />
                </div>
            </div>
            <div>
                <ul className='md:flex hidden justify-between no-wrap border-y-2 px-24 py-6 gap-4 '>
                    <Link href='' className='flex gap-2 '><span className=' '>IPHONE CASES</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className=' '>IPAD CASES</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className=' '>CASES FOR SAMSUNG</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className=' '>COLLECTIONS</span> <IoMdArrowDropdown /></Link>
                </ul>
            </div>
        </div>

    )
}

export default Header
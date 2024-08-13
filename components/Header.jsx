import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import LINK from 'next/link'
import Link from 'next/link';
const Header = () => {
    return (
        <div className=''>
            <div className='flex justify-between gap-48 px-24 py-12'>
                <div className='flex gap-2'>
                    {<FiShoppingCart className='text-fuchsia-700' size={30} />}
                    <div>
                        <h1 className='text-sm font-bold'>BOUNDLESS</h1>
                        <h1 className='text-sm'>commerce</h1>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        {<FiShoppingCart size={30} />}
                        <p className='text-sm'>$18</p>
                    </div>
                    <IoMdMenu size={30} />
                </div>
            </div>
            <div>
                <ul className='md:flex hidden justify-between no-wrap border-y-2 px-24 py-6 gap-4 '>
                    <Link href='' className='flex gap-2 '><span className='text-sm'>IPHONE CASES</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className='text-sm'>IPAD CASES</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className='text-sm'>CASES FOR SAMSUNG</span> <IoMdArrowDropdown /></Link>
                    <Link href='' className='flex gap-2 '><span className='text-sm'>COLLECTIONS</span> <IoMdArrowDropdown /></Link>
                </ul>
            </div>
        </div>

    )
}

export default Header
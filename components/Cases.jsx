import Link from 'next/link';
import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const Cases = () => {
    return (
        <div className=' bg-slate-200 w-96 h-2/4'>
            <div className='my-4'>
                <h1 className='mb-4 font-bold'>iPhone cases</h1>
                <ul className='pl-4'>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPhone 7</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPhone 7 Plus</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPhone 6</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPhone 5/5S</span></Link>
                </ul>
            </div>
            <div className='my-4'>
                <h1 className='mb-4 font-bold'>iPad cases</h1>
                <ul className='pl-4'>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPad mini 3/mini 2/mini</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPad Air 2/Air</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>iPad 4/3/2</span></Link>
                </ul>


            </div>
            <div className='my-4'>
                <h1 className='mb-4 font-bold'>cases for Samsung</h1>
            </div>
            <div className='my-4'>
                <h1 className='mb-4 font-bold'>Collections</h1>
                <ul className='pl-4'>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>For Women</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>For Women</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>For Women</span></Link>
                    <Link href='' className='flex gap-2'><IoMdArrowDropright /><span>For Women</span></Link>
                </ul>
            </div>
        </div>
    )
}

export default Cases
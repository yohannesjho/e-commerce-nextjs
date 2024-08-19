import { StoreData } from '@/public/data/StoreData';
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Link from 'next/link';
import "./TrendingSlider.css";

const ProductsCarousal = () => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
      };

      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
      };
  return (
    <div> 
        <div className="trending">
        <div className="container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
          {StoreData.map(data => (
                <div key={data.id} className='border-2 bg-white  flex flex-col w-96 gap-2 p-6 justify-center items-center hover:shadow-2xl  duration-300'>
                    <img src={data.img1} alt="hhh" className='h-48' />
                    <p className='font-bold'>{data.description}</p>
                    <div className='flex gap-4'>
                        <span>{`$`}{data.price}</span>
                        <span>{`$`}{data.discountedPrice}</span>
                    </div>

                    <button className='bg-fuchsia-300 text-black px-4 py-1 rounded-md flex items-center gap-2'>{<FiShoppingCart />} Add to cart</button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousal
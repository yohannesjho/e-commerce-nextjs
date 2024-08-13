'use client'
import React from 'react'
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      return (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      );
}

export default ImageSlider
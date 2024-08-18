'use client'
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import MiddleImage from "@/components/MiddleImage";
import ProductsCarousal from "@/components/tranding/TrandingSlider";
import Store from "@/components/Store";
import { StoreData } from "@/public/data/StoreData";

export default function Home() {
  const images = [
    {
      src: '../public/images/image1.jpg',
      alt: 'first image'
    },
    {
      src: '../public/images/image2.jpg',
      alt: 'second image'
    }

  ]
  return (
    <main >
      <div className="  px-24 pt-10 flex gap-12  w-full ">
        <Cases />
        <Store StoreData={StoreData} />
      </div>
      <MiddleImage />
      <ProductsCarousal/>
       
    </main>
  );
}

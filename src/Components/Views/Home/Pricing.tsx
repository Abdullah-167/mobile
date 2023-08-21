import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const MobilePricingSlider = () => {
  const [pricingRange, setPricingRange] = useState([0, 100000]);

  const handlePriceChange = (values: any) => {
    setPricingRange(values);
  };

  const handleInputChange = (index: any, value: any) => {
    const newPricingRange = [...pricingRange];
    newPricingRange[index] = value;
    setPricingRange(newPricingRange);
  };

  return (
    <section className='shadow-md py-5 px-5 my-10'>
      <h2 className='text-xl sm:text-3xl font-bold pb-3'>Let's Find a Mobile For You!</h2>
      <div className='flex justify-between md:flex-nowrap flex-wrap '>
        <div>
          <p className='text-lg sm:text-xl font-semibold pb-5'>By Price</p>
          <div className="max-w-[309px] px-2">
            <Slider
              min={0}
              max={100000}
              range
              value={pricingRange}
              onChange={handlePriceChange}
              trackStyle={[{ backgroundColor: '#38a169', height: '6px', top: "7px" }]}
              railStyle={{ backgroundColor: '#718096', top: "7px" }}
              handleStyle={[{ backgroundColor: '#38a169', borderColor: '#38a169', width: '20px', height: '20px' }, { backgroundColor: '#38a169', borderColor: '#38a169', width: '20px', height: '20px' }]} // Customize handle color
            />
            <div className="flex gap-4 mt-4 mb-7">
              <input
                type="text"
                className='border border-gray-300 px-2 py-1 w-1/2 outline-none active:outline-black transition-all duration-500'
                value={pricingRange[0]}
                onChange={(e) => handleInputChange(0, e.target.value)}
              />
              <span className="text-gray-500">To</span>
              <input
                type="text"
                className='border border-gray-300 px-2 py-1 w-1/2 outline-none active:outline-black transition-all duration-500'
                value={pricingRange[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
              />
            </div>
          </div>
          <Link href={''}>
            <button className="relative max-w-[309px] inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary w-full group mb-5">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                <svg className=" 
w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center font-semibold w-full h-full text-primary transition-all duration-500 transform group-hover:translate-x-full ease">Find Mobile</span>
              <p className="relative invisible font-semibold">Find Mobiles</p>
            </button>
          </Link>
          <p className='text-xl font-semibold pb-5'>Price Around</p>
          <div className='flex flex-wrap sm:flex-nowrap gap-3 text-sm font-semibold'>
            {prices.map((item, index) => {
              return (
                <p className=' cursor-pointer'
                  key={index}>{item.price}</p>
              )
            })}
          </div>
        </div>

        <div className=' md:border-x-[2px] border-x-[#AFACAC] px-6 pt-10 md:pt-0'>
          <p className='text-xl font-semibold pb-5'>Price Around</p>
          <div className='text-sm '>
            {byBrand.map((item, index) => {
              return (
                <p className='border-b-[1.3px] text-lg border-b-black mb-2 pb-1 cursor-pointer'
                  key={index}>{item.brand}</p>
              )
            })}
          </div>
        </div>

        <div className='pt-10 md:pt-0  md:pl-3'>
          <p className='text-xl font-semibold pb-5'>Price Around</p>
          <div className='text-sm '>
            {prices.map((item, index) => {
              return (
                <p className='border-b-[1.3px] text-lg border-b-black mb-2 pb-1 cursor-pointer'
                  key={index}>{item.price}</p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePricingSlider;


const prices = [
  {
    price: 'Rs. 5,000'
  },
  {
    price: 'Rs. 10,000'
  },
  {
    price: 'Rs. 15,000'
  },
  {
    price: 'Rs. 20,000'
  },
  {
    price: 'Rs. 25,000'
  },
]



const byBrand = [
  {
    brand: 'Samsung'
  },
  {
    brand: 'OPPO'
  },
  {
    brand: 'VIVO'
  },
  {
    brand: 'OnePlus'
  },
  {
    brand: 'Infinix'
  },
]
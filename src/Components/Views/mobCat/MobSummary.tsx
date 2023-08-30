import React from 'react'
import { FiLink2 } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';

const MobSummary = () => {
    return (
        <section className='py-10'>
            <div className='flex gap-3 justify-between items-center'>
                <span className='text-[#019943] cursor-pointer'>
                    {`Mobile Prices >`}
                </span>
                <div className='flex gap-2 text-3xl items-center'>
                    <span className='text-sm cursor-pointer'>Share On</span>
                    <span className='cursor-pointer'>  <FiLink2 /> </span>
                    <span className='text-blue-500 cursor-pointer'>
                        <AiFillFacebook />
                    </span>
                    <span className='text-blue-500 cursor-pointer'>
                        <FaTwitterSquare />
                    </span>
                </div>
            </div>
            <div className='bg-gray-100 py-6 px-7'>
                <h1 className=' text-primary text-3xl font-semibold pb-4'>
                    Samsung Mobile Phones - Samsung Mobile Phone Prices
                </h1>
                <p className='text-[#848484]'>
                    Samsung Electric is a South Korean company based in Seoul and was founded in 1969. Samsung Electronics is known for producing some world-class products ranging from Semiconductors to LEDs, quantum dot TVs, notebooks and Samsung Mobile Phones to Android tablets. Since releasing its debut Android smartphone in 2009 The company now holds the lion's share in the smartphone and Phablet market not just in Pakistan but around the world. From feature phones to Windows handsets and from smartphones running on Tizen OS to Android-based smartphones. Samsung's latest mobile phones need no introduction, Whether it be the Galaxy range or Note, or A series, Samsung offers a reliable multifunctional cell phone soup at different price ranges. Listed below is the Samsung New Model 2023 Phone Price in Pakistan.
                </p>
            </div>
        </section>
    )
}

export default MobSummary
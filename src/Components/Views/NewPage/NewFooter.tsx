import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLogoInstagram } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'



const NewFooter = () => {


    return (
        <footer className='bg-[#FBFBFB] '>
            <div>
                <div className=' container'>
                    <div className='flex flex-wrap md:flex-nowrap justify-between gap-16 py-10'>
                        <div className='flex flex-wrap sm:flex-nowrap justify-between gap-10'>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className=' font-semibold text-lg pb-5'>  {item.mainHeading} </p>
                                        {item.innerSec.map((newitem, idx) => {
                                            return (
                                                <div key={idx}>
                                                    <span className=' text-sm flex flex-col cursor-pointer pb-1' key={idx}>
                                                        {newitem.text}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h2 className='text-lg pb-2 font-semibold'>Subscribe</h2>
                            <div className='flex items-center mb-4 cursor-pointer'>
                                <input className='py-1.5 w-full bg-white border-blue-800 border px-2 outline-none rounded-l-md' placeholder='Email Address*' />
                                <span className='text-lg bg-[#8624e1] text-white flex justify-center items-center px-2 rounded-r-md py-[10px]'> <FiSend /> </span>
                            </div>
                            <p className='text-sm'>Our team is happy to answer your requests. Fill out the form and we will contact you in 15 minutes!</p>
                        </div>
                    </div>

                </div>
                <div className="bg-gray-100 ">
                    <div className="text-xs flex items-center flex-wrap sm:flex-nowrap justify-between max-w-[1100px] mx-auto py-5 px-5">
                        <div className="max-w-[300px]">
                            <Link href={"/"}>
                                <Image loading="lazy" src="/logo.png" alt="logo" width={150} height={0} />
                            </Link>
                        </div>
                        <p className="">@2023 Rafiky. </p>
                        <span className="hidden sm:block">
                            <Link href={"/terms-conditions"}>
                                <span className="px-1">Terms&conditions ||</span>
                            </Link>
                            <Link href={"/terms-conditions/privacy-policy"}>
                                <span className="px-1">Privacy Policy ||</span>
                            </Link>
                            <Link href={"/terms-conditions/cookies-policy"}>
                                <span className="px-1"> Cookie Policy </span>
                            </Link>
                        </span>
                        <div className="flex gap-3 items-center">
                            {iconData.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={item.url}
                                        className="bg-gray-200 text-black font-bold text-xl w-10 h-10 rounded-full p-3 flex justify-center items-center cursor-pointer"
                                        target="_blank"
                                    >
                                        {item.icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default NewFooter


const data = [
    {
        mainHeading: 'Product',
        innerSec: [
            {
                text: 'Remote simultaneous interpretation. We are changing the world.'
            }
        ]
    },
    {
        mainHeading: 'Company',
        innerSec: [
            {
                text: 'Our team has more than 10 years of experience in event planning. We will take care of every detail'
            }
        ]
    },
    {
        mainHeading: 'Product',
        innerSec: [
            {
                text: 'About '
            },
            {
                text: 'Contact '
            },
            {
                text: 'Prvicay'
            },
            {
                text: 'Remote'
            },
        ]
    },
]



const iconData = [
    {
        url: "https://www.facebook.com/Rafiky-103256367862244/",
        icon: <FaFacebookF />,
    },
    {
        url: "https://twitter.com/rafiky_net",
        icon: <AiOutlineTwitter />,
    },
    {
        url: "https://www.linkedin.com/in/rafiky-ltd-49826a19a/",
        icon: <GrLinkedinOption />,
    },
    {
        url: "https://www.instagram.com/rafikynet/",
        icon: <IoLogoInstagram />,
    },
    {
        url: "https://www.youtube.com/channel/UCQj4LE9-1G0dhWDbzIoUy8w",
        icon: <BsYoutube />,
    },
];

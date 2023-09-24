import Link from "next/link";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "./Container";
import { BsArrowRight } from "react-icons/bs";

const MiniNav = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const links = [
        {
            mainLink: 'News'
        },
        {
            mainLink: 'Search by Brand',
            innerLinks: [
                {
                    link1: 'Samsung Mobile',
                    link2: 'Apple Mobile',
                    link3: 'Vivo Mobile',
                    link3true: true,
                    link4true: true,
                    link5true: true,
                    link6true: true,
                    link7ture: false,
                    link8true: false,
                    link4: 'Xiaomi Mobile',
                    link5: 'Infinix Mobile',
                    link6: 'Google',
                    btn: 'View All',
                    btnIcon: <BsArrowRight />,
                    iconBtnTrue: true
                }
            ]
        },
        {
            mainLink: 'Search by Price',
            innerLinks: [
                {
                    link1: 'Prices > 50,000',
                    link2: '45,000 - 50,000',
                    link3: '40,000 - 45,000',
                    link3true: true,
                    link4true: true,
                    link5true: true,
                    link6true: true,
                    link7ture: false,
                    link8true: false,
                    link4: '35,000 - 40,000',
                    link5: '30,000 - 35,000',
                    link6: '25,000 - 30,000',
                    btn: 'View All',
                    btnIcon: <BsArrowRight />,
                    iconBtnTrue: true
                }
            ]
        },
        {
            mainLink: 'Search by Screen',
            innerLinks: [
                {
                    link1: '7.0 inch - 8.9 inch',
                    link2: '5.0 inch - 6.9 inch',
                    link3: '4.1 inch - 4.9 inch',
                    link3true: true,
                    link4true: true,
                    link5true: true,
                    link6true: false,
                    link7ture: false,
                    link8true: false,
                    link4: '3.0 inch - 4.0 inch',
                    link5: 'Less Then 3 Inches',
                    btn: 'View All',
                    btnIcon: <BsArrowRight />,
                    iconBtnTrue: true,
                }
            ]
        },
        {
            mainLink: 'Search by Network',
            innerLinks: [
                {
                    link1: '5G',
                    link2: '4G',
                    link3true: false,
                    link4true: false,
                    link5true: false,
                    link6true: false,
                    link7ture: false,
                    link8true: false,
                }
            ]
        },
        {
            mainLink: 'By OS',
            innerLinks: [
                {
                    link1: 'Apple Iphones',
                    link2: 'Android Phones',
                    link3: 'Windows Phones',
                    link3true: true,
                    link4true: false,
                    link5true: false,
                    link6true: false,
                    link7ture: false,
                    link8true: false,
                }

            ]
        },
        {
            mainLink: 'By Type',
            innerLinks: [
                {
                    link1: 'Camera Mobiles',
                    link2: 'Video Recording',
                    link3: 'Bluetooth Mobiles',
                    link3true: true,
                    link4true: true,
                    link5true: true,
                    link6true: true,
                    link7ture: true,
                    link8true: false,
                    link4: 'Wireless LAN ',
                    link5: 'MP3 Playback',
                    link6: 'FM Radio Mobiles',
                    link7: 'Memory Card ',
                }
            ]
        },
        {
            mainLink: 'Contact Us'
        },
    ]

    return (
        <section className="z-[1000]">
            <div className="mx-auto text-sm text-primary font-semibold justify-center border-b-[3px] border-b-primary py-[7px]">
                <Container>
                    <ul className="flex items-center gap-5 justify-center px-5">
                        <li className="flex gap-4 items-center">
                            {links.map((item: any, index: any) => {
                                return (
                                    <div
                                        className="relative" key={index}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        <Link
                                            href={""}
                                            className="flex"
                                        >
                                            <button
                                                className="flex gap-x-1 text-sm justify-center items-center    "
                                                onMouseOver={() => setActiveIndex(index)}
                                            >
                                                <span>{item.mainLink}</span>
                                                <span
                                                    className={`transition-all duration-200 text-2xl ${activeIndex === index ? "rotate-180" : " "
                                                        }  ${index < 1 || index > 6 ? 'hidden' : ''} `}
                                                >
                                                    <MdArrowDropDown />
                                                </span>
                                            </button>
                                        </Link>
                                        <ul className={`absolute top-6 min-w-[160px] bg-white transition-all duration-500 rounded border z-[1100] text-sm -left-6 right-0  ${activeIndex === index ? "  opacity-100" : " opacity-0"
                                            }`}>
                                            <div className={` ${activeIndex ? '' : 'hidden'}`}>
                                                {item.innerLinks?.map((innerItem: any, idx: any) => {
                                                    return (
                                                        <div className="" key={idx}>
                                                            <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link1}</p>
                                                            <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link2}</p>
                                                            {innerItem.link3true && (
                                                                <p className="pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">
                                                                    {innerItem.link3}
                                                                </p>
                                                            )}
                                                            {innerItem.link4true && (
                                                                <p className="pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">
                                                                    {innerItem.link4}
                                                                </p>
                                                            )}
                                                            {innerItem.link5true && (
                                                                <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link5}</p>
                                                            )}
                                                            {innerItem.link6true && (
                                                                <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link6}</p>
                                                            )}
                                                            {innerItem.link7true && (
                                                                <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link7}</p>
                                                            )}
                                                            {innerItem.link8true && (
                                                                <p className=" pl-4 hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem?.link8}</p>
                                                            )}
                                                            {innerItem.iconBtnTrue && (
                                                                <div className="flex gap-2 cursor-pointer pl-4 items-center pb-5 text-black">
                                                                    <span className=" ">{innerItem.btn}</span>
                                                                    <span className="text-lg">{innerItem.btnIcon}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </ul>
                                    </div>
                                )
                            })}
                        </li>
                    </ul>
                </Container>
            </div>
        </section>
    );
};
export default MiniNav;


import Link from "next/link";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "./Container";

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
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
                }
            ]
        },
        {
            mainLink: 'Search by Price',
            innerLinks: [
                {
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
                }
            ]
        },
        {
            mainLink: 'Search by Screen',
            innerLinks: [
                {
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
                }
            ]
        },
        {
            mainLink: 'Search by Network',
            innerLinks: [
                {
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
                }
            ]
        },
        {
            mainLink: 'By OS',
            innerLinks: [
                {
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
                }
            ]
        },
        {
            mainLink: 'BBy Type',
            innerLinks: [
                {
                    link1: 'Hello',
                    link2: 'Hello',
                    link3: 'Hello',
                    link4: 'Hello',
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
                            {links.map((item, index) => {
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
                                        <ul className={`absolute top-6 bg-white transition-all duration-500 rounded border z-[1000] text-sm -left-6 right-0  ${activeIndex === index ? "  opacity-100" : " opacity-0"
                                            }`}>
                                            <div className={` ${activeIndex ? '' : 'hidden'}`}>
                                                {item.innerLinks?.map((innerItem, idx) => {
                                                    return (
                                                        <div className="" key={idx}>
                                                            <p className=" text-center hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem.link1}</p>
                                                            <p className=" text-center hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem.link2}</p>
                                                            <p className=" text-center hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem.link3}</p>
                                                            <p className=" text-center hover:bg-gray-100 text-[#212529] font-medium py-1.5 cursor-pointer">{innerItem.link4}</p>
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


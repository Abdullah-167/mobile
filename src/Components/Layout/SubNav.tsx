import Link from "next/link";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "./Container";

const MiniNav = () => {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);
    const [dropDown3, setDropDown3] = useState(false);

    const counrty = [
        {
            text: 'Traduzione in Inglese UK',
            link: ''
        },
        {
            text: 'Traduzione in Inglese US',
            link: ''
        },
        {
            text: 'Traduzioni in Spagnolo',
            link: ''
        },
        {
            text: 'Traduzioni in Francese',
            link: ''
        },
        {
            text: 'Traduzioni in Cinese',
            link: ''
        },
        {
            text: 'Traduzioni in Russo',
            link: ''
        },
    ]


    const data = [
        {
            text: 'Traduzioni industriali e tecnologiche',
            link: ''
        },
        {
            text: 'Traduzioni mediche e scientifiche',
            link: ''
        },
        {
            text: 'traduzioni-finanziarie-e-assicurative',
            link: ''
        },
        {
            text: 'Traduzioni settore pubblico e amministrativo',
            link: ''
        },
        {
            text: 'Traduzioni legali',
            link: ''
        },
        {
            text: 'Traduzioni settore moda',
            link: ''
        },
    ]


    return (
        <section className="mini-nav-main">
            <div className="mx-auto text-sm text-primary font-semibold justify-center  border-b-[3px] border-b-primary py-[10px]">
                <Container>
                    <ul className="hidden lg:flex items-center gap-5 justify-center px-5">
                        <Link href={""}>
                            <li className="hidden xl:flex text-sm">News</li>{" "}
                        </Link>
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>Search By Brand</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000] text-sm -left-6 right-0 py-2   shadow-xl ${dropDown ? "block" : "hidden"
                                    }`}>
                                    {counrty.map((item, Index) => {

                                        return (

                                            <Link className="px-2" href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>

                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown3(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown3(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>Search By Price</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown3 ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000]  -left-6 right-0 py-2  shadow-xl ${dropDown3 ? "block" : "hidden"
                                    }`}>
                                    {data.map((item, Index) => {

                                        return (
                                            <Link href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown3(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown3(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>Search By Screen</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown3 ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000]  -left-6 right-0 py-2  shadow-xl ${dropDown3 ? "block" : "hidden"
                                    }`}>
                                    {data.map((item, Index) => {

                                        return (
                                            <Link href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown3(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown3(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>Search By Network</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown3 ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000]  -left-6 right-0 py-2  shadow-xl ${dropDown3 ? "block" : "hidden"
                                    }`}>
                                    {data.map((item, Index) => {

                                        return (
                                            <Link href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        {/* <Link href={"/richiesta-preventivo/"}>
            <li className="hidden xl:flex text-sm">{t("lingyouAcedamy")}</li>{" "}
          </Link> */}
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown3(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown3(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>By Os</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown3 ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000]  -left-6 right-0 py-2  shadow-xl ${dropDown3 ? "block" : "hidden"
                                    }`}>
                                    {data.map((item, Index) => {

                                        return (
                                            <Link href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className="relative"
                                // @ts-ignore
                                onMouseLeave={() => setDropDown3(false)}
                            >
                                <Link
                                    href={
                                        ""
                                    }
                                >
                                    <button
                                        onMouseOver={() => setDropDown3(true)}
                                        className="flex gap-x-1 text-sm justify-center items-center    "
                                    >
                                        <span>By Type</span>
                                        <span
                                            className={`transition-all duration-200 text-2xl ${dropDown3 ? "rotate-180" : " "
                                                }`}
                                        >
                                            <MdArrowDropDown />
                                        </span>
                                    </button>
                                </Link>
                                <ul className={`absolute z-[1000]  -left-6 right-0 py-2  shadow-xl ${dropDown3 ? "block" : "hidden"
                                    }`}>
                                    {data.map((item, Index) => {

                                        return (
                                            <Link href={item.link} key={Index}>
                                                <span className={" flex flex-col  gap-4 py-2 px-7 text-sm w-full"}>{item.text}</span>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li className="cursor-pointer">
                            Contact Us
                        </li>
                    </ul>
                </Container>
            </div>
        </section>
    );
};

export default MiniNav;


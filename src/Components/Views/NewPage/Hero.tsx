import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";


const Hero = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [toggelBtn, setToggelBtn] = useState(data[0].innerDta[0].id);
    const [isChecked2, setIsChecked2] = useState(false);
    const [toggelBtn2, setToggelBtn2] = useState(data[0].innerDta[0].id);
    const [isChecked3, setIsChecked3] = useState(false);
    const [toggelBtn3, setToggelBtn3] = useState(data[0].innerDta[0].id);

    const toggleBackground = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };
    const toggleBackground2 = () => {
        setIsChecked2((prevChecked) => !prevChecked);
    };
    const toggleBackground3 = () => {
        setIsChecked3((prevChecked) => !prevChecked);
    };

    const handleBtn = (id: any) => {
        setToggelBtn(id)
    }
    const handleBtn2 = (id: any) => {
        setToggelBtn2(id)
    }
    const handleBtn3 = (id: any) => {
        setToggelBtn3(id)
    }

    return (
        <header className="home-bgMain pt-10 relative">
            <div className=" max-w-[1600px] mx-auto px-5 relative">
                <div className="header flex justify-between sm:gap-20 items-center relative">
                    <div className="pb-10 sm:pb-12 sm:pl-10 md:pl-20">
                        <div>
                            <h1 className="text-[40px] md:text-[60px] text-white font-bold  xl:max-w-[651px]  leading-[50px] sm:leading-[65px] pb-7">
                                REMOTE SIMULTANEOUS INTERPRETING
                            </h1>
                            <h2 className="font-poppins text-[28px] font-semibold mb-4 text-white">
                                Remote interpreting                             </h2>
                            <p className="font-poppins text-base sm:text-[20px] font-medium text-white  xl:max-w-[750px] mb-10 sm:mb-14 leading-8">
                                Why use cumbersome hardware when technology allows us to obtain superior quality with just a few clicks? Try Rafiky software for remote interpreting . You will simply need a laptop and a smartphone (or tablet).   </p>
                        </div>
                        <div className="flex item-center flex-wrap md:flex-nowrap gap-x-5  gap-y-3">
                            <span className="border border-white  bg-white px-5 rounded-full py-2 cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
                                Get A Quote
                            </span>
                            <span className=" border-2 border-white px-5 rounded-full py-2 text-white cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
                                Watch Introduction
                            </span>
                        </div>

                    </div>
                    <div className="relative mx-auto md:w-[700px] mt-10 sm:mt-20  md:h-[600px] overflow-hidden relative">
                        <Image
                            className="image"
                            src={"/hero-mai.svg"}
                            alt={'Image'}
                            width={700}
                            height={700}
                            blurDataURL={"/laugh.webp"}
                            loading="lazy"
                        />
                        <div className="">
                            {data.map((item, index) => {
                                return (
                                    <div
                                        className={`absolute top-80 max-w-[250px] px-3 pb-3 rounded-md ${isChecked ? 'bg-black' : 'bg-white'
                                            }`}

                                    >
                                        <div className={`flex gap-4 items-center justify-between ${isChecked ? 'text-white' : 'text-black'
                                            }`}>
                                            <div className="flex gap-2 items-center">
                                                <div className={`text-[9px] rounded-md border-[1.5px]  px-1 ${isChecked ? 'border-white' : 'border-black'
                                                    }`}>CC</div>
                                                <span className="text-sm font-semibold">{item.heading}</span>
                                            </div>
                                            <label className="relative flex items-center mb-5 cursor-pointer mt-5">
                                                <input
                                                    type="checkbox"
                                                    value=""
                                                    className="sr-only peer"
                                                    onChange={toggleBackground}
                                                    checked={isChecked}
                                                />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            {item.innerDta.map((newItem, idx) => {
                                                return (
                                                    <span className={`text-[11px] flex gap-0.5 items-center px-1.5 mx-1 py-1 rounded-sm cursor-pointer font-semibold ${toggelBtn === newItem.id ? 'bg-[#8624e1] text-white  ' : ' bg-gray-300 text-gray-500'}`} key={index}
                                                        onClick={() => handleBtn(newItem.id)}
                                                    >{toggelBtn === newItem.id && (
                                                        <span className="text-white text-sm"> <IoCheckmarkOutline /> </span>
                                                    )} {newItem.button}</span>

                                                )
                                            })}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="absolute bottom-48 right-0">
                            {dataTwo.map((item, index) => {
                                return (
                                    <div key={index}
                                        className={`max-w-[250px] px-3 pb-3 rounded-md ${isChecked2 ? 'bg-black' : 'bg-white'
                                            }`}
                                    >
                                        <div className={`flex gap-4 items-center justify-between ${isChecked2 ? 'text-white' : 'text-black'
                                            }`}>
                                            <div className="flex gap-2 items-center">
                                                <div className={`text-[9px] rounded-md border-[1.5px]  px-1 ${isChecked2 ? 'border-white' : 'border-black'
                                                    }`}>CC</div>
                                                <span className="text-sm font-semibold">{item.heading}</span>
                                            </div>
                                            <label className="relative flex items-center mb-5 cursor-pointer mt-5">
                                                <input
                                                    type="checkbox"
                                                    value=""
                                                    className="sr-only peer"
                                                    onChange={toggleBackground2}
                                                    checked={isChecked2}
                                                />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            {item.innerDta.map((newItem, idx) => {
                                                return (
                                                    <span key={idx} className={`text-[11px] flex gap-0.5 items-center px-1.5 mx-1 py-1 rounded-sm cursor-pointer font-semibold ${toggelBtn2 === newItem.id ? 'bg-[#8624e1] text-white  ' : ' bg-gray-300 text-gray-500'}`}
                                                        onClick={() => handleBtn2(newItem.id)}
                                                    >{toggelBtn2 === newItem.id && (
                                                        <span className="text-white text-sm"> <IoCheckmarkOutline /> </span>
                                                    )} {newItem.button}</span>

                                                )
                                            })}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="absolute bottom-[340px] right-0">
                            {dataThree.map((item, index) => {
                                return (
                                    <div key={index}
                                        className={`max-w-[250px] px-3 pb-3 rounded-md ${isChecked3 ? 'bg-black' : 'bg-white'
                                            }`}
                                    >
                                        <div className={`flex gap-4 items-center justify-between ${isChecked3 ? 'text-white' : 'text-black'
                                            }`}>
                                            <div className="flex gap-2 items-center">
                                                <div className={`text-[9px] rounded-md border-[1.5px]  px-1 ${isChecked3 ? 'border-white' : 'border-black'
                                                    }`}>CC</div>
                                                <span className="text-sm font-semibold">{item.heading}</span>
                                            </div>
                                            <label className="relative flex items-center mb-5 cursor-pointer mt-5">
                                                <input
                                                    type="checkbox"
                                                    value=""
                                                    className="sr-only peer"
                                                    onChange={toggleBackground3}
                                                    checked={isChecked3}
                                                />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            {item.innerDta.map((newItem, idx) => {
                                                return (
                                                    <span key={idx} className={`text-[11px] flex gap-0.5 items-center px-1.5 mx-1 py-1 rounded-sm cursor-pointer font-semibold ${toggelBtn3 === newItem.id ? 'bg-[#8624e1] text-white  ' : ' bg-gray-300 text-gray-500'}`}
                                                        onClick={() => handleBtn3(newItem.id)}
                                                    >{toggelBtn3 === newItem.id && (
                                                        <span className="text-white text-sm"> <IoCheckmarkOutline /> </span>
                                                    )} {newItem.button}</span>

                                                )
                                            })}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;



const data = [
    {
        heading: 'Sign Langusges',
        innerDta: [

            {
                id: 1,
                button: 'Deustsch',
            },
            {
                id: 2,
                button: 'Deustsch',
            },
            {
                id: 3,
                button: 'Deustsch'
            },
        ]
    },

]


const dataThree = [
    {
        heading: 'Sign Langusges',
        innerDta: [

            {
                id: 1,
                button: 'Deustsch',
            },
            {
                id: 2,
                button: 'Deustsch',
            },
            {
                id: 3,
                button: 'Deustsch'
            },
        ]
    },

]


const dataTwo = [
    {
        heading: 'Sign Langusges',
        innerDta: [

            {
                id: 1,
                button: 'Deustsch',
            },
            {
                id: 2,
                button: 'Deustsch',
            },
            {
                id: 3,
                button: 'Deustsch'
            },
        ]
    },

]
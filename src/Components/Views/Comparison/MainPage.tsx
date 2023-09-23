import Container from '@/Components/Layout/Container'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FiLink2 } from 'react-icons/fi'

const MainPage = () => {

    const [showItems, setShowItems] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setShowItems(false);
            } else {
                setShowItems(true);
            }
        };

        // Add event listener to update showItems on window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <div className='flex md:flex-nowrap flex-wrap justify-between items-center'>
                <span className='text-[#019943] cursor-pointer hidden md:flex sm:gap-4 sm:text-base text-xs'>
                    {`Mobile Prices >`}
                    <span>{`Compare Mobile Phones > `}</span>
                    <span>{` Samsung Galaxy Z Fold >      `}</span>
                </span>
                <div className='flex gap-2 text-3xl items-center sm:mb-0 mb-5'>
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
            <div className='flex lg:justify-between justify-end flex-grow border first-letter  sm:mb-0 mb-7'>
                <div className='pt-3 px-3 max-w-[400px] border-r pr-[64px] lg:block hidden'>
                    <p className='text-gray-600 text-lg font-semibold pb-3'>Compare By:</p>
                    {specs.map((item, index) => {
                        return (
                            <p className='text-base py-1 cursor-pointer border text-center flex items-center justify-center ml-20 px-5 mb'
                                key={index}
                            >
                                {item.heading}
                            </p>
                        )
                    })}
                </div>
                <div className='flex justify-end flex-grow'>
                    {mobleSpecs.map((item, index) => {
                        return (
                            <div
                                className={`px-1 py-1 border-r border-r-gray-300 max-w-[291px] xl:max-w-[350px] 2xl:max-w-[400px] w-full ${!showItems && index >= 2 ? 'hidden' : ''}`}
                                key={index}
                            >
                                <div className='bg-gray-100 px-3 py-1 mb-2'>
                                    <h2 className='text-[13px] font-semibold text-gray-600 pb-2'>{item.heading}</h2>
                                    <div className='flex sm:flex-nowrap flex-wrap gap-1 pb-2'>
                                        <input className='outline-none border border-gray-400 px-2 text-xs w-full' type={item.input} />
                                        <span className='bg-[#f9f9f9] text-xs px-2 py-1 border border-gray-400 cursor-pointer w-full max-w-[65px]'>{item.btn}</span>
                                    </div>
                                    <div className='flex items-center gap-1 text-xs'>
                                        <span className='text-sm'>&#9432;</span>
                                        <p className=' italic font-semibold text-gray-600'>{item.model}</p>
                                    </div>
                                </div>
                                <div className='px-3'>
                                    <p className='sm:text-lg lg:text-xl pb-2'>{item.modelName}</p>
                                    <div className='flex sm:flex-nowrap flex-wrap items-center gap-4 justify-center sm:justify-between pb-2'>
                                        <Image className='' src={item.modelImg} alt={''} width={111} height={100} />
                                        <div className=' px-3 py-1'>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px] lg:text-base text-sm'>{item.reviews}</p>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px] lg:text-base text-sm'>{item.specs}</p>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px] lg:text-base text-sm'>{item.pic}</p>
                                        </div>
                                    </div>
                                    <div className='flex sm:flex-nowrap flex-wrap justify-center sm:justify-between items-center gap-2'>
                                        <span>{item.price}</span>
                                        {item.com && (
                                            <p className='text-xs'>(COMING SOON)</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=' border border-[#019943] '>
                {specs.map((item, index) => (
                    <div className=' border-b border-b-[#019943] lg:flex w-full' key={index}>
                        <h2 className=' text-2xl sm:border-l-transparent border-l-[4px] border-l-orange-500 min-w-[150px] md:text-lg bg-[#a8d8a0] text-[#595959] font-semibold text-left pl-3 border-[#019943]'>{item.heading}</h2>
                        <div className='w-full'>
                            <div className='flex  w-full'>
                                {item.dataOne.map((newItem, idx) => (
                                    <div key={idx} className='flex md:flex-nowrap flex-wrap w-full'>
                                        <span className='md:max-w-[160px] md:text-left text-center bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767] min-w-[160px] w-full'>{newItem.heading}</span>
                                        <div className='w-full'>
                                            {newItem.innerData.map((innerItem, innerIdx) => (
                                                <div key={innerIdx} className='flex w-full'>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full '>{innerItem.dataOne}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full'>{innerItem.dataTwo}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full lg:block hidden'>{innerItem.dataThree}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {item.dataTwo.map((newItem, idx) => (
                                    <div key={idx} className='flex md:flex-nowrap flex-wrap w-full'>
                                        <span className='md:max-w-[160px] md:text-left text-center bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767] min-w-[160px] w-full'>{newItem.heading}</span>
                                        <div className='w-full'>
                                            {newItem.innerData.map((innerItem, innerIdx) => (
                                                <div key={innerIdx} className='flex w-full'>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full '>{innerItem.dataOne}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full'>{innerItem.dataTwo}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full lg:block hidden'>{innerItem.dataThree}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {item.dataThree.map((newItem, idx) => (
                                    <div key={idx} className='flex md:flex-nowrap flex-wrap w-full'>
                                        <span className='md:max-w-[160px] md:text-left text-center bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767] min-w-[160px] w-full'>{newItem.heading}</span>
                                        <div className='w-full'>
                                            {newItem.innerData.map((innerItem, innerIdx) => (
                                                <div key={innerIdx} className='flex w-full'>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full '>{innerItem.dataOne}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full'>{innerItem.dataTwo}</span>
                                                    <span className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2 w-full lg:block hidden'>{innerItem.dataThree}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MainPage;


const mobleSpecs = [
    {
        heading: 'COMPARE WITH',
        input: 'text',
        btn: 'SEARCH',
        model: 'PLEASE ENTER MODEL NAME',
        modelName: 'Samsung Galaxy 21 A',
        modelImg: '/compimg.svg',
        reviews: 'Rewiews',
        specs: 'Specifications',
        pic: 'Pictures',
        price: 'Rs. 269999',
        coming: 'Coming Soon',
        com: true
    },
    {
        heading: 'COMPARE WITH',
        input: 'text',
        btn: 'SEARCH',
        model: 'PLEASE ENTER MODEL NAME',
        modelName: 'Samsung Galaxy 21 A',
        modelImg: '/compimg.svg',
        reviews: 'Rewiews',
        specs: 'Specifications',
        pic: 'Pictures',
        price: 'Rs. 269999',
        coming: 'Coming Soon',
        com: false
    },
    {
        heading: 'COMPARE WITH',
        input: 'text',
        btn: 'SEARCH',
        model: 'PLEASE ENTER MODEL NAME',
        modelName: 'Samsung Galaxy 21 A',
        modelImg: '/compimg.svg',
        reviews: 'Rewiews',
        specs: 'Specifications',
        pic: 'Pictures',
        price: 'Rs. 269999',
        coming: 'Coming Soon',
        com: true
    },
]


const specs = [
    {
        heading: 'Genaral',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Specifications',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Performance',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Display',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Design',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Camera',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
    {
        heading: 'Battery',
        dataOne: [
            {
                heading: 'Launch Date',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataTwo: [
            {
                heading: 'OS',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
        dataThree: [
            {
                heading: 'UI',
                innerData: [
                    {
                        dataOne: 'ABC',
                        dataTwo: 'ABC',
                        dataThree: 'ABC',
                    }
                ]
            }
        ],
    },
]
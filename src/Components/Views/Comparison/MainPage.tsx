import Container from '@/Components/Layout/Container'
import Image from 'next/image'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FiLink2 } from 'react-icons/fi'

const MainPage = () => {
    return (
        <section>
            <div className='flex gap-3 justify-between items-center'>
                <span className='text-[#019943] cursor-pointer flex gap-4'>
                    {`Mobile Prices >`}
                    <span>{`Compare Mobile Phones > `}</span>
                    <span>{` Samsung Galaxy Z Fold >      `}</span>
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
            <div className='flex justify-between border'>
                <div className='pt-3 px-3 max-w-[400px] border-r pr-[77px]'>
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
                <div className='flex'>
                    {mobleSpecs.map((item, index) => {
                        return (
                            <div className='px-1 py-1 border-r border-r-gray-300'
                                key={index}>
                                <div className='bg-gray-100 px-3 py-1 mb-2'>
                                    <h2 className='text-[13px] font-semibold text-gray-600 pb-2'>{item.heading}</h2>
                                    <div className='flex gap-1 pb-2'>
                                        <input className='outline-none border border-gray-400 px-2 text-xs' type={item.input} />
                                        <span className='bg-[#f9f9f9] text-xs px-2 py-1 border border-gray-400 cursor-pointer'>{item.btn}</span>
                                    </div>
                                    <div className='flex items-center gap-1 text-xs'>
                                        <span className='text-sm'>&#9432;</span>
                                        <p className=' italic font-semibold text-gray-600'>{item.model}</p>
                                    </div>
                                </div>
                                <div className='px-3'>
                                    <p className='text-xl pb-2'>{item.modelName}</p>
                                    <div className='flex items-center gap-4 justify-between pb-2'>
                                        <img className='w-[500px] 2xl:w-[500px]' src={item.modelImg} alt={''} width={111} height={100} />
                                        <div className=' px-3 py-1'>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px]'>{item.reviews}</p>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px]'>{item.specs}</p>
                                            <p className='bg-gray-100 cursor-pointer px-1 pb-1 mb-[1px]'>{item.pic}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
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
                    <table className='w-full border-b border-b-[#019943]' key={index}>
                        <tbody>
                            {item.dataOne.map((newItem, idx) => (
                                <tr key={idx}>
                                    <th className='w-[150px] text-lg bg-[#a8d8a0] text-[#595959] font-semibold text-left pl-3 border-[#019943]'>{item.heading}</th>
                                    <td className='w-[160px] bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767]'>{newItem.heading}</td>
                                    <td>
                                        <table className='w-full'>
                                            <tbody>
                                                {newItem.innerData.map((innerItem, innerIdx) => (
                                                    <tr key={innerIdx}>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataOne}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataTwo}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataThree}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tbody>
                            {item.dataTwo.map((newItem, idx) => (
                                <tr key={idx}>
                                    <th className='w-[140px] text-lg bg-[#a8d8a0] text-[#595959] font-semibold text-left pl-3'></th>
                                    <td className='w-[160px] bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767]'>{newItem.heading}</td>
                                    <td>
                                        <table className='w-full'>
                                            <tbody>
                                                {newItem.innerData.map((innerItem, innerIdx) => (
                                                    <tr key={innerIdx}>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataOne}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataTwo}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataThree}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tbody>
                            {item.dataThree.map((newItem, idx) => (
                                <tr key={idx}>
                                    <th className='w-[140px] text-lg bg-[#a8d8a0] text-[#595959] font-semibold text-left pl-3'></th>
                                    <td className='w-[160px] bg-[#E5F9DB] px-2 py-1 text-base font-semibold border-b border-b-[#019943] text-[#676767]'>{newItem.heading}</td>
                                    <td>
                                        <table className='w-full'>
                                            <tbody>
                                                {newItem.innerData.map((innerItem, innerIdx) => (
                                                    <tr key={innerIdx}>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataOne}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataTwo}</td>
                                                        <td className='py-1 pl-5 border-r border-r-gray-300  border-b border-b-[#019943] px-2'>{innerItem.dataThree}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
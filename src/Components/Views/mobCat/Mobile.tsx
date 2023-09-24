import Ads from '@/Components/Common/Ads';
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillAndroid } from 'react-icons/ai';
import { VscListFilter } from 'react-icons/vsc';


const Mobile = ({ toggleSidebar2 }: any) => {

    const [selectedCategory, setSelectedCategory] = useState('Prices');

    const itemsPerRow = 5;

    const rows = [];
    const rowsTwo = [];
    const rowsThree = [];

    for (let i = 0; i < data.length; i += itemsPerRow) {
        rows.push(data.slice(i, i + itemsPerRow));
    }
    for (let i = 0; i < data.length; i += itemsPerRow) {
        rowsTwo.push(data2.slice(i, i + itemsPerRow));
    }
    for (let i = 0; i < data.length; i += itemsPerRow) {
        rowsThree.push(data3.slice(i, i + itemsPerRow));
    }

    const filteredRows = rows.filter((row: any) => {
        return row.category === selectedCategory || selectedCategory === 'Prices';
    });
    const filteredRows2 = rows.filter((rowsTwo: any) => {
        return rowsTwo.category === selectedCategory || selectedCategory === 'Prices';
    });
    const filteredRows3 = rows.filter((rowsThree: any) => {
        return rowsThree.category === selectedCategory || selectedCategory === 'Prices';
    });


    return (
        <section className='px-10 pb-16'>
            <div className='flex pb-10 justify-around items-center gap-3'>
                <div>
                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                </div>
                <p className='text-xl font-semibold whitespace-nowrap'>Featured Brands</p>
                <div>
                    <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
            <div className='bg-white flex  md:flex-nowrap flex-wrap justify-between border-b mb-6 md:mb-9'>
                <div className='flex sm:text-base text-xs ga-2 md:pb-0 pb-3'>
                    <p className={`px-4 cursor-pointer  ${selectedCategory === 'Prices' ? 'text-primary border-t-2 border-x-2 border-t-primary border-x-primary rounded-t' : 'border-t-2 border-t-transparent border-x-2 border-x-transparent'}`} onClick={() => setSelectedCategory('Prices')}>Prices</p>
                    <p className={`px-4 cursor-pointer  ${selectedCategory === 'Latest' ? 'text-primary border-t-2 border-x-2 border-t-primary border-x-primary rounded-t' : 'border-t-2 border-t-transparent border-x-2 border-x-transparent'}`} onClick={() => setSelectedCategory('Latest')}>Latest</p>
                    <p className={`px-4 cursor-pointer  ${selectedCategory === 'Coming Soon' ? 'text-primary border-t-2 border-x-2 border-t-primary border-x-primary rounded-t' : 'border-t-2 border-t-transparent border-x-2 border-x-transparent'}`} onClick={() => setSelectedCategory('Coming Soon')}>Coming Soon</p>
                </div>
                <span
                    className='md:flex hidden border-2 border-primary sm:text-base text-xs mx-3 px-2 lg:hidden rounded cursor-pointer font-medium gap-2 items-center'
                    onClick={toggleSidebar2}
                >
                    Filter All <span className='text-lg'> <VscListFilter /> </span>
                </span>
            </div>
            <span
                className='flex md:hidden border-2 justify-center mb-8 border-primary sm:text-base text-xs mx-3 px-2 lg:hidden rounded cursor-pointer font-medium gap-2 items-center'
                onClick={toggleSidebar2}
            >
                Filter All <span className='text-lg'> <VscListFilter /> </span>
            </span>
            {selectedCategory === 'Prices' && (
                <div>
                    <div className=" hidden lg:grid grid-cols-5 gap-5">
                        {rows.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 1) % 3 === 0) && (
                                    <div className="col-span-5">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" lg:hidden hidden md:grid grid-cols-3 gap-5">
                        {rows.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 2 === 0) && (
                                    <div className="col-span-3">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" md:hidden grid grid-cols-2 gap-5">
                        {rows.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[250px] md:min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 3 === 0) && (
                                    <div className="col-span-2">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
            {selectedCategory === 'Latest' && (
                <div>
                    <div className=" hidden lg:grid grid-cols-5 gap-5">
                        {rowsTwo.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 1) % 3 === 0) && (
                                    <div className="col-span-5">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" lg:hidden hidden md:grid grid-cols-3 gap-5">
                        {rowsTwo.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 2 === 0) && (
                                    <div className="col-span-3">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" md:hidden grid grid-cols-2 gap-5">
                        {rowsTwo.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[250px] md:min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 3 === 0) && (
                                    <div className="col-span-2">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
            {selectedCategory === 'Coming Soon' && (
                <div>
                    <div className=" hidden lg:grid grid-cols-5 gap-5">
                        {rowsThree.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 1) % 3 === 0) && (
                                    <div className="col-span-5">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" lg:hidden hidden md:grid grid-cols-3 gap-5">
                        {rowsThree.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 2 === 0) && (
                                    <div className="col-span-3">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=" md:hidden grid grid-cols-2 gap-5">
                        {rowsThree.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[250px] md:min-h-[220px]">
                                        <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                        <p className="text-center font-medium leading-5">{item.model}</p>
                                        <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                            <span className="text-primary text-sm">{item.price}</span>
                                            <span className="pl-2"><AiFillAndroid /></span>
                                        </div>
                                    </div>
                                ))}
                                {((rowIndex + 2) % 3 === 0) && (
                                    <div className="col-span-2">
                                        <Ads />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Mobile;


const data = [
    {
        img: '/mobile1.png',
        model: 'Samsung Samsung Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
]

const data2 = [
    {
        img: '/mobile2.png',
        model: 'Samsung Samsung Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
]
const data3 = [
    {
        img: '/mobile1.png',
        model: 'Samsung Samsung Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
]
